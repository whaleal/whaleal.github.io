
欢迎大家使用Mars，常见问题在这里解答，希望对大家有所帮助。
# 1. Mars是什么？
Mars是Java语言中最好的MongoDB  ORM/ODM  框架。其性能远超 spring-data系列

# 2. 在哪里下载mars
* 正式版本下载：<br/>
maven中央仓库: [https://repo1.maven.org/maven2/com/whaleal/mars/](https://repo1.maven.org/maven2/com/whaleal/mars/) <br/>

# 3. 怎么获取mars的源码
Mars是一个开源项目，源码托管在github上，源代码仓库地址是 https://github.com/whaleal/mars 。同时每次mars发布正式版本和快照的时候，都会把源码打包，你可以从上面的下载地址中找到相关版本的源码

# 4. 怎么配置maven
mars 所有的版本都发布到maven中央仓库中，所以你只需要在项目的pom.xml中加上dependency就可以了。例如：
```
<dependency>
    <groupId>com.whaleal.mars</groupId>
    <artifactId>mars-core</artifactId>
    <version>${mars-version}</version>
</dependency>
<dependency>
    <groupId>com.whaleal.mars</groupId>
    <artifactId>mars-springboot</artifactId>
    <version>${mars-version}</version>
</dependency>
```

也可以选择 Maven仓库查找公共的仓库地址: [https://mvnrepository.com/artifact/com.whaleal.mars/mars](https://mvnrepository.com/artifact/com.whaleal.mars/mars)


# 5. Mars 如何防止 SQL  注入 
基于对象的传入而不是数据库语句字符串拼接。

