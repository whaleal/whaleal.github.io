Mars 是一个 MongoDB ORM/ODM 框架，包含MongoDB全部的操作，同时具备高性能的对象映射，经历过最严苛线上业务场景考验，是你值得信赖的技术产品。

# 快速入门
## 背景
为什么会有这个项目，现阶段`spring-data-mongodb` 封装较重,性能损耗较大
同时因为其和 `Spring`系列框架的强耦合,导致升级改动也较大,开发成本高。  
现阶段亟需一款稳定的成熟的轻量的ORM,ODM 框架针对MongoDB基本操作进行封装，同时具备高性能，高容错性的特点。

## 简介
`Mars`是一款 `MongoDB`的驱动层框架，采用 `Java` 语言开发，在原生的驱动基础功能上做了进一步的封装，让操作变得更加方便快捷。
> **目标**
> 我们希望 `Mars` 框架将来可以整合多个数据库，对不同的数据平台提供统一的驱动操作。让用户能够达到只用Mars就可以对多种不同类型数据库进行操作

##  版本信息 
版本信息详见 [releases](https://github.com/whaleal/mars/releases)
请修改相关pom  文件 

### 特点

- 快速：Mars框架对于底层的数据映射操作做了一系列的优化，对于大数据量的部分操作速度对比Spring会有部分提高
- 便捷：可以很轻松的在项目中引入Mars框架并使用Mars框架的功能，而不需要关注底层的实现
- 适配：可以在多种环境下使用Mars框架，一个普通的Java项目可以使用,一个SpringBoot项目也可以使用
### 代码托管
> [GitHub](https://github.com/whaleal/mars.git)
>
> Mars已经发布至maven中央仓库，所以可以通过maven中央仓库或者阿里云的镜像仓库来下载我们的项目
>
> 用户也可以通过本项目github地址来下载使用

# 下载
你可以从如下地方下载：
```
maven central repository https://repo1.maven.org/maven2/com/whaleal/mars/
```

# Maven 依赖
    <!-- https://mvnrepository.com/artifact/com.whaleal.mars/mars-core -->
    <dependency>
        <groupId>com.whaleal.mars</groupId>
        <artifactId>mars-core</artifactId>
        <version>x.x.x</version>
    </dependency>
    
    <!-- https://mvnrepository.com/artifact/com.whaleal.mars/mars-springboot -->
    <dependency>
        <groupId>com.whaleal.mars</groupId>
        <artifactId>mars-springboot</artifactId>
        <version>x.x.x</version>
    </dependency>


# Gradle
    compile group: 'com.whaleal.mars', name: 'mars-core', version: 'x.x.x'
    compile group: 'com.whaleal.mars', name: 'mars-springboot', version: 'x.x.x'
    
# 版本选择 
推荐使用最新版本  
`mars-core`   是本项目的核心包  
`mars-springboot`  为 `mars`  与 `springboot`  集成相关的插件包,内置自动注入,自动配置的相关功能。

# 社区交流
[whaleal鲸云社区](https://www.whaleal.com)

# 常见问题汇总
[https://github.com/whaleal/mars/issues](https://github.com/whaleal/mars/issues)