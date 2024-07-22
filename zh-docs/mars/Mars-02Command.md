## Mars 02Command

------

Mars Command

#### MarsCommand介绍

------

Mars Command为Mars项目提供命令方面的支持包括（CRUD、数据库的建库建表等操作）

#### MarsCommand的使用方式

------

通过一个JsonString来执行命令

```
Document executeCommand(String jsonCommand); 
```

通过原生的MongoDB Document执行命令

```
Document executeCommand(Document command); 
```

通过 原生的MongoDB Document 及ReadPreference来执行命令

```
Document executeCommand(Document command, ReadPreference readPreference); 
```

#### 示例

------

1.创建用户示例、传入JsonString

```java
public class CreateUserTest {

    private Mars mars = new Mars(Constant.connectionStr);

    @Test
    public void testForCreateUser(){
        //传入JsonString
        Document document = mars.executeCommand("{\n" +
                "       createUser: \"testUser\",\n" +
                "       pwd: \"testPwd\",\n" +
                "       customData: { employeeId: 12345 },\n" +
                "       roles: [\n" +
                "                { role: \"clusterAdmin\", db: \"admin\" },\n" +
                "                { role: \"readAnyDatabase\", db: \"admin\" },\n" +
                "                \"readWrite\"\n" +
                "              ],\n" +
                "       writeConcern: { w: \"majority\" , wtimeout: 5000 }\n" +
                "}");
        System.out.println(document);
    }
}
```

2.创建用户示例、传入JsonCommand

```java
public class CreateUserTest {

    private Mars mars = new Mars(Constant.connectionStr);
    @Test
    public void testForCreateUserByDocument(){
        //传入原生MongoDB Document
        Document command = new Document("createUser", "testUser")
                .append("pwd", "testPwd")
                .append("customData", new Document("employeeId", 12345))
                .append("roles", ListUtil.list(false,
                        new Document("role", "clusterAdmin").append("db", "admin"),
                        new Document("role", "readAnyDatabase").append("db", "admin"),
                        "readWrite"))
                .append("writeConcern", new Document("w", "majority").append("wtimeout", 5000));
        System.out.println(command);
        Document document = mars.executeCommand(command);
        System.out.println(document);
    }
}
```

