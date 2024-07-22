
Mars 与 spring 相关方法 名称对比 

## CRUD 部分 

###  插入数据 CREATE

#### Save  保存数据 

|  方法类型   | Mars 方法  |Spring  方法   |
|  ----  | ----  |----  |
|  save | public <T> T save(T entity)  |public <T> T save(T objectToSave) |
|  save | public <T> T save(T entity,String collectionName) |public <T> T save(T objectToSave, String collectionName)|
|  save | public <T> T save(T entity, InsertOneOptions options) |public <T> T save(T objectToSave, String collectionName)|
|  save | public <T> T save( T entity, InsertOneOptions options, String collectionName )|none|
|  save |  public <T> List<T> save(Collection<? extends T> entities) |none|
|  save |  public <T> List<T> save(Collection<? extends T> entities ,String collectionName) |none|
|  save |  public <T> List<T> save(Collection<? extends T> entities, InsertManyOptions insertManyOptions) |none|
|  save |  public <T> List<T> save( Collection<? extends T> entities, InsertManyOptions options, String collectionName )  |none|


#### Insert  插入数据 

|  方法类型   | Mars 方法  |Spring  方法   |
|  ----  | ----  |----  |
| insertOne  | public <T> InsertOneResult insert(T entity) |public <T> T insert(T objectToSave) |
| insertOne  | public <T> InsertOneResult insert( T entity, String collectionName )  |	public <T> T insert(T objectToSave, String collectionName) |
| insertOne  |  public <T> InsertOneResult insert(T entity, InsertOneOptions insertOneOptions)  |none |
| insertOne  | public <T> InsertOneResult insert( T entity, InsertOneOptions options, String collectionName ) |none |
| ----------- | -------------------- |---------------------- |
| insertMany  | public <T> InsertManyResult insert(Collection<? extends T> entities,Class<?> entityClass)|public <T> Collection<T> insert(Collection<? extends T> batchToSave, Class<?> entityClass)  |
| insertMany  | public <T> InsertManyResult insert( Collection<? extends T> entities, String collectionName )  |public <T> Collection<T> insert(Collection<? extends T> batchToSave, String collectionName)  |
| insertMany  |public  <T> InsertManyResult insert(Collection<? extends T> entities, Class<?> entityClass,InsertManyOptions options); | none|
| insertMany  | public <T> InsertManyResult insert( Collection<? extends T> entities, String collectionName , InsertManyOptions options) |none |
| insertMany  | none |public <T> Collection<T> insertAll(Collection<? extends T> objectsToSave) |


### update 方法 

相关 upsert  方法 已经全部 封装在 相关update 的 Option  中 
```
new UpdateOptions().upsert(true);
```


updateFirst 全部封装在Option 参数中 
```
 new UpdateOptions().multi(false);
```

方法对比 

|  方法类型   | Mars 方法  |Spring  方法   |
|  ----  | ----  |----  |
| update  |public <T> UpdateResult update(Query query, UpdateDefinition update, Class<T> entityClass) |UpdateResult updateMulti(Query query, UpdateDefinition update, Class<?> entityClass); |
| update  |public <T> UpdateResult update(Query query, UpdateDefinition update, String collectionName) |	UpdateResult updateMulti(Query query, UpdateDefinition update, String collectionName); |
| update  | none |UpdateResult updateMulti(Query query, UpdateDefinition update, Class<?> entityClass, String collectionName); |
| update  |public <T> UpdateResult update(Query query, UpdateDefinition update, Class<T> entityClass, UpdateOptions options)  |none |
| update  |public <T> UpdateResult update(Query query, UpdateDefinition update, String collectionName, UpdateOptions options) |none |
| update  |public <T> UpdateResult update( Query query, UpdateDefinition update, Class<T> entityClass, UpdateOptions options, String collectionName ); |none |



新增如下方法 以对象方式进行传参，同时解析到该对象对应的基础表信息  
```
public <T> UpdateResult updateEntity(Query query, T entity) 
public <T> UpdateResult updateEntity(Query query, T entity, UpdateOptions options)
public <T> UpdateResult updateEntity( Query query, T entity, String collectionName )
public <T> UpdateResult updateEntity( Query query, T entity, UpdateOptions options, String collectionName )
```


##读取数据 READ

### FindOne


方法对比 

|  方法类型   | Mars 方法  |Spring  方法   |
|  ----  | ----  |----  |
| findOne   |public <T> Optional<T> findOne(Query query, Class<T> entityClass) |<T> T findOne(Query query, Class<T> entityClass); |
| findOne  | public <T> Optional<T> findOne(Query query, Class<T> entityClass, String collectionName )|<T> T findOne(Query query, Class<T> entityClass, String collectionName); |
### FindAll

|  方法类型   | Mars 方法  |Spring  方法   |
|  ----  | ----  |----  |
| FindAll   | public <T> QueryCursor<T> findAll(Query query, Class<T> entityClass)  |<T> List<T> find(Query query, Class<T> entityClass); |
| FindAll  | public <T> QueryCursor<T> findAll( Query query, Class<T> entityClass, String collectionName );|<T> List<T> find(Query query, Class<T> entityClass, String collectionName); |
|  FindAll |  none |  <T> List<T> findAll(Class<T> entityClass); |
|  FindAll |  none | <T> List<T> findAll(Class<T> entityClass, String collectionName);  |

tips: 
①关于 批量查找的可以传入空Query
②Cursor  与 List  转换 可以通过`toList()` 方法实现



## 删除数据 DELETE

### 方法对比 
|  方法类型   | Mars 方法  |Spring  方法   |
|  ----  | ----  |----  |
|  delete |public <T> DeleteResult delete(Query query, Class<T> entityClass)   |DeleteResult remove(Query query, Class<?> entityClass);  |
|  delete |public <T> DeleteResult delete(Query query, Class<T> entityClass, DeleteOptions deleteOptions)  |----  |
|  delete |public DeleteResult delete(Query query, String collectionName)   |DeleteResult remove(Query query, String collectionName);  |
|  delete |public DeleteResult delete(Query query, String collectionName, DeleteOptions options)   |----  |
|  delete |public DeleteResult delete(Query query, Class<?> entityClass, String collectionName)   |DeleteResult remove(Query query, Class<?> entityClass, String collectionName)  |
|  delete |public <T> DeleteResult delete( Query query, Class<T> entityClass, DeleteOptions options, String collectionName )  |----  |


### 批量删除&&单文档删除 
```
new DeleteOptions().multi(true);

```

### REMOVE

remove() 相关说明 
remove 是delete  方法的别名 已在MongoDB 中弃用

##  单文档事务

### FindAndModify

```
 public <T> T findAndModify(Query query, UpdateDefinition update, Class<T> entityClass)

 public <T> T findAndModify(Query query, UpdateDefinition update, Class<T> entityClass, String collectionName)

 public <T> T findAndModify(Query query, UpdateDefinition update, FindOneAndUpdateOptions options, Class<T> entityClass)
    
 public <T> T findAndModify(Query query, UpdateDefinition update, FindOneAndUpdateOptions options, Class<T> entityClass,
                        String collectionName);
```
   
### FindAndReplace

```
public <T> T findAndReplace(Query query, T replacement) 

public <T> T findAndReplace(Query query, T replacement, String collectionName) 

public <T> T findAndReplace(Query query, T replacement, FindOneAndReplaceOptions options)

public <T> T findAndReplace(Query query, T replacement, FindOneAndReplaceOptions options, String collectionName) 

public <T> T findAndReplace(Query query, T replacement, FindOneAndReplaceOptions options, Class<T> entityType,
                                 String collectionName) 

public <S, T> T findAndReplace(Query query, S replacement, FindOneAndReplaceOptions options, Class<S> entityType,
                                    Class<T> resultType) 

public <S, T> T findAndReplace(Query query, S replacement, FindOneAndReplaceOptions options, Class<S> entityType,
                            String collectionName, Class<T> resultType);
```
    
### FindAndDelete
```
public <T> T findAndDelete(Query query, Class<T> entityClass)
    
public <T> T findAndDelete(Query query, Class<T> entityClass, String collectionName)

public <T> T findAndDelete(Query query ,Class<T> entityClass, String collectionName,FindOneAndDeleteOptions options);

```
    
### 说明
以上 单文档事务操作方法签名如上所示   
内部实现主要为基于 session 的 因果一致性考虑。  


## 统计文档

|  方法类型   | Mars 方法  |Spring  方法   |
|  ----  | ----  |----  |
| count  |   long count(Query query, Class<?> entityClass, CountOptions countoptions ,String collectionName);| none|
| count  |   long count(Query query, Class<?> entityClass, String collectionName);| long count(Query query, Class<?> entityClass, String collectionName);|
| count   | <T> long count( Query query, String collName); | <T> long count( Query query, String collName);|
| count  |  <T> long count( Query query, Class<T> clazz);| <T> long count( Query query, Class<T> clazz);|
| count   |<T> long estimatedCount( String collName); |<T> long estimatedCount( String collName);|
| count  |  <T> long estimatedCount( Class<T> clazz);| <T> long estimatedCount( Class<T> clazz); |



