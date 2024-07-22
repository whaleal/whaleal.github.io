Mars  聚合操作说明及基础示例

##  聚合 命令 

### 生成聚合对象 
创建 聚合对象 默认返回Document.class  
```
AggregationPipeline< Document > pipeline = AggregationPipeline.create();  
```
如需返回实体对象 则应该直接指定  
```
AggregationPipeline< Student > pipeline = AggregationPipeline.create(Student.class);  
```


### 添加聚合步骤
添加 聚合步骤 示例中 是一个 `projection`
```
pipeline.project(Projection.of().exclude("_id").include("stuAge").include("classNo")); 
pipeline......   
pipeline......   
pipeline......   
```



### 执行聚合并返回结果 
```
Student student1 = mars.aggregate(pipeline).tryNext(); 
```
 