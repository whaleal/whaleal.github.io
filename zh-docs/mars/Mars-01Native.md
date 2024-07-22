Mars 的原生配置 

## 说明 
一个 Mars对象针对的是一个数据库(database 级别的) 的连接
其相关操作默认情况下均与该库进行了绑定。

虽然我们可以切换Mars 的连接库 ，但是不推荐这样做 。
如果你有多个数据库连接的需求，建议您创建多个 `Mars` 对象 

## Mars对象生成 

### 通过连接字符串创建

```
Mars mars = new  Mars(String connectionString) ;
```

### 通过client  及 databaseName 传入

```
Mars mars = new Mars(MongoClient mongoClient, String databaseName) ;

```
### 通过连接字符串对象 创建 

```
Mars mars = new  Mars(ConnectionString connectionString);
```

### 通过MongoClientSettings 对象及数据库名去创建 
```
Mars mars = new Mars( MongoClientSettings clientSettings ,String databaseName);
```


## 全局的读写偏好设置

说明，全局的读写偏好设置 是针对 db 级别 ,设置后该库以下的 相关读写操作级别 已经自动适配 。

### 读写偏好设置样例
```
Mars.setWriteConcern( WriteConcern writeConcern ) ;

Mars.setReadConcern( ReadConcern readConcern );
   
Mars.setReadPreference( ReadPreference readPerference );

```


