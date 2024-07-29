Mars Session  && Transcation 介绍 


##  MarsSession
`MarsSession` 是 `ClientSession` 的子类   


```
MarsSession session = mars.startSession();
``` 

MarsSession 同时也提供了 Mars 的所有功能  
所以您可以使用 MarsSession 完成所有的Mars  具备的操作 


## MarsTranscation
事务 主要是基于Session  的一致性完成的 。

MarsTranscation  是 一个MongoDB Transcation 开放接口 
您可以在内自定义相关操作 
但是请注意 版本及兼容情况 
请查阅相关文档 [link](https://www.mongodb.com/docs/upcoming/core/transactions/)

## Useage

```
mars.withTransaction(( session ) -> {
        session.save(stu);

        assertNull(mars.findAll(new Query(), Student.class).tryNext());


        Update update = new Update().inc("stuAge", 13);

        mars.update(new Query(), update, Student.class);

        assertEquals(session.findAll(new Query(), Student.class).tryNext().getStuAge(), stu.getStuAge() + 13, 0.5);

        assertNull(mars.findAll(new Query(), Student.class).tryNext());
        return null;
    });
```