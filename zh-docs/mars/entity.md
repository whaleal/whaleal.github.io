Mars 实体关联 

##  实体的定义 
实体类一般指 pojo类 或具备以下特征的开放类   
* 基于对象安全   
* 包含基础的属性   
* 公开的 getter / setter 方法   

与 MongoDB数据库映射 过程 相关联后 实体应当 具备以下特性   
* 类开放 能够被Mars  内部探测器加载到   
* 构造开放   
* 字段开放     
* 当字段不开放时应当提供 开放的 getter/setter  
* 主键 id 的存在  
* 字段类型可识别   


##  实体相关的注解 

Mars使用Java注释的特性来描述Java对象如何被持久化到MongoDB数据库中去。以下是Mars比较常用的注释。  

### @Entity

@Entity注释是必需的。其声明了在专用MongoDB集合上该类作为文档将持久保存,同时与Mars 对象注入,自动加载相关。
该注解与表名相关联,在默认情况下,Mars 使用类名称来命名集合。


## 注解
### @Id
 


- 描述：文档主键注解
@Id注释指示Mars 哪个字段用作文档ID,@Id注释是必需的。如果试图持久保存对象(其@Id注释的字段为null)，则Mars 会自动生成ID值。
注意 `@Id` 注解一般来描述 String 类型或 ObjectId 类型的字段。 其他类型的数据可能会与MongoDB 内置的_id  要求冲突。

| 属性  | 类型    | 必须指定 | 默认值              | 描述         |
| ----- | ------- | -------- | ------------------- | ------------ |
| concreteClass | Class<?> | 否       | Object.class | 用于读取值映射类型 |

### @Property

- 描述：文档字段注解
类属性标记@Property注释， 表明为此属性在MongoDB数据库取一个别名。
同时声明字段类型 用于反序列化  

| 属性    | 类型    | 必须指定 | 默认值                               | 描述                   |
| ------- | ------- | -------- | ------------------------------------ | ---------------------- |
| value   | String  | 否       | "" | 用于读取值映射类型 |
| concreteClass | Class<?> | 否       | Object.class | 用于读取值映射类型 |

### @Representation(BsonType.OBJECT_ID)
- 描述：文档类型注解 如使用该注解必须指定值
类属性标记@Representation。其声明了  在MongoDB 集合上该属性将被修改为指定类型。

| 属性    | 类型    | 必须指定 | 默认值                               | 描述                   |
| ------- | ------- | -------- | ------------------------------------ | ---------------------- |
| value   | BsonType  |是      | null  | 用于类型映射 |


 
### @PropIgnore

类属性标记@PropIgnore注释则表明这个字段将不被持久化到数据库。

## Mars编程模型
 
本节上通过定义一个简单的类以及一些操作代码片段来说明Mars功能的编程模型，使得我们可以从总体上了解Mars开发。

### 定义被持久类

```
@Entity
public class MyEntity {
@Id
public ObjectId id;

public String name;

}

```


### 初始化 Mars 
```
Mars mars = new Mars(MongoClientSetting setting);
```



### 持久化 
```
mars.insert(new MyEntity());
```

## 查询
```
mars.findAll(new Query(),MyEntity.class);
```


## 示例 及基础相关的说明 

在实际环境中不建议您使用如此多的注解 
如果您的实体属性类型及字段名称 与 数据库内的文档保持一致的状态
那么 在Mars  框架内部 他会自动的完成相应的映射 而且性能更高;
如果您需要修改 数据存储的类型 或 存储字段的名称 那么您可能会使用到 @Representation 及 @Property 等注解

tips:
这个示例说明
@Entity  注解表明这是个实体 ，他映射的表名为 student  
@Id() 注解表明 以stuNo字段为主键 同时会自动映射到 mongoDB 数据库文档的 _id  字段   
@Representation 注解表明 让 stuNo 这个字段映射为 OBJECT_ID 类型 而不是原始的 String  类型   
@Property(value = "sex")  注解表明 需要修改这个字段的名称,以sex名称存储，而不是stuSex 名称  


编写实体类 `Student.java`（此处使用了 [Lombok](https://www.projectlombok.org/) 简化代码）
```java
@Entity("student")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Student {

        @Id()
        @Representation(BsonType.OBJECT_ID)
        private String stuNo;
    
        private String classNo;
    
        private String stuName;
    
        private Integer stuAge;
    
        private Double stuHeight;
    
        @Property(value = "sex")
        private Gender stuSex;
    
        @Property(value = "cscore")
        private Double chineseScore;
    
        @Property(value = "mscore")
        private Double mathScore;
    
        @Property(value = "escore")
        private Double englishScore;

}

public enum Gender {

    F("男"),
    M("女");

    String sex ;

    Sex(String s) {
        sex = s;
    }

}
```


