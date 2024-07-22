Mars提供了spring 的自动注入过程 

# 配置spring
`mars-springboot` 是一个标准的Spring AutoConfiguration,可以灵活进行对象注入 。

引入相关依赖 
```
<!-- https://mvnrepository.com/artifact/com.whaleal.mars/mars-springboot -->
<dependency>
    <groupId>com.whaleal.mars</groupId>
    <artifactId>mars-springboot</artifactId>
    <version>x.x.x</version>
</dependency>
```

该模块会使用 spring-data 的相关配置进行依赖注入 。
自动生成 `Mars  mars` 对象

## spring 相关的配置文件 示例

```
spring.data.mongodb.host=127.0.0.1
spring.data.mongodb.port=27017
spring.data.mongodb.authentication-database=admin
spring.data.mongodb.username=<username specified on MONGO_INITDB_ROOT_USERNAME>
spring.data.mongodb.password=<password specified on MONGO_INITDB_ROOT_PASSWORD>
spring.data.mongodb.database=<the db you want to use>
```
以上示例 中 均使用 spring 相关配置即可  

tips: 相关配置未生效的说明  
```
spring.data.mongodb.fieldNamingStrategy;  
spring.data.mongodb.uuidRepresentation;
spring.data.mongodb.autoIndexCreation;
```
以上参数 在本平台暂时不生效

gridfs 模块补充说明  
database与连接通用配置的数据库保持一致  
bucket默认为 fs ,在`Mars `相关接口中 有自选 `bucket` 的接口 。 

##  自动注入 

可以使用 以下方式之一进行注入 
```
@Autowired
Mars  mars 

@Resource
Mars  mars
```


##  与 spring 版本的兼容性 
在 `mars-springboot` 中 引入了 `spring-boot-autoconfigure`
其兼容性需要查看 `spring-boot-autoconfigure` 与  `spring` 包的兼容性  
根据其内部依赖的版本自由选择 `mars-springboot`



## 配置Entity
在 `application.properties` 配置文件中添加Mars框架的配置信息：
这里可以直接复用 spring 的配置文件

```shell
spring.data.mongodb.uri= #你的连接字符串，集群和单机模式均可，如果没有配置，那么默认就是localhost的27017端口 
spring.data.mongodb.database=myrepo #数据库的名字，

spring.data.mongodb.uri=mongodb://root:123456@server100:37017,server100:37018,server100:37019/mars?authSource=admin
spring.data.mongodb.database=test
```
创建 Spring Boot 启动类：
```java
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(QuickStartApplication.class, args);
    }
}
```

