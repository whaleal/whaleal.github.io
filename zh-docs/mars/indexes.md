Mars  索引 



## 基于注解的索引 

### 索引列表 

### @Indexes

| 属性    | 类型    | 必须指定 | 默认值                               | 描述                   |
| ------- | ------- | -------- | ------------------------------------ | ---------------------- |
| value   | Index[]   | 是     | 无 | 用于添加一个或多个索引 |

### @Index 
| 属性    | 类型    | 必须指定 | 默认值                               | 描述                   |
| ------- | ------- | -------- | ------------------------------------ | ---------------------- |
| fields   | Field[]  | 是       | 无 | 用于指定字段名称及方向|
| options   | IndexOptions  | 否       | IndexOptions | 索引选项 |

### @Field
| 属性    | 类型    | 必须指定 | 默认值                               | 描述                   |
| ------- | ------- | -------- | ------------------------------------ | ---------------------- |
| value   | String  | 是       | 无 | 字段名称 |
| type   | IndexDirection  | 否       | IndexDirection.ASC | 字段基础属性 |
| weight   | int  | 否/当类型为TEXT 是必须指定      | -1 | 字段权重 ，仅在 TEXT 索引类型是 生效 |

### @IndexOptions

### @Collation

## 使用示例

```
@Indexes({@Index(fields = {@Field(value = "fld1", type = IndexDirection.ASC)}), @Index(fields = {@Field(value = "fld1", type = IndexDirection.ASC), @Field(value = "fld2", type = IndexDirection.ASC)})})

ensureIndexes( Class< T > entityClass, String collectionName )
```

以上示例 创建的索引 结构为 
```
{fld1:1,fld2:1,fld3:1}
```


索引相关
主要结构如下所示
```
 Indexes
     -Index
          -Field = {field1 ,ASC}
          -Field = {field1 ,ASC}
    -Index
          -Field = {field1 ,ASC}
          -Field = {field1 ,ASC}
         -IndexOptions
```



## 基于对象的索引 
## 基础对象 
### Index
```
Index index = new Index();
index.on("c", IndexDirection.ASC);
index.setOptions(new IndexOptions().background(true).expireAfter(3600l, TimeUnit.SECONDS));
```
### IndexOptions
索引相关的属性 

### 索引的创建 
```
createIndex( Index index, String collectionName )
```

### 索引的查询
```
List< Index > getIndexes( String collectionName )
```

### 索引的删除 
```
 dropIndexes( String collectionName )
```

## 索引模块与自动加载索引 
暂无 后续版本将设计