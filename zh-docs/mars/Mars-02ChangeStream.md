Mars  Change Stream 

## 数据迁移ChangeStream
> changeStream的原理就是使用 `消费者-生产者`的模式，让一个线程去读取MongoDB中 opLog 的变更，然后将消息分发给其他的消费者



### 直接使用

- 首先需要定义收到消息之后需要进行的处理，实现接口，并重写接口中的 onMessage 方法

```java
import com.mongodb.client.model.changestream.ChangeStreamDocument;
import lombok.extern.slf4j.Slf4j;
import org.bson.Document;
import org.mars.core.messaging.Message;
import org.mars.core.messaging.MessageListener;

@Slf4j
public class DocumentMessageListener implements MessageListener<ChangeStreamDocument<Document>, Document> {
    @Override
    public void onMessage(Message<ChangeStreamDocument<Document>, Document> message) {
        log.info("Received Message in collection: {},message raw: {}, message body:{}",
                message.getProperties().getCollectionName(), message.getRaw(), message.getBody());
    }
}

```

- 接下来可以通过创建对象的方式进行调用

  
```java
import com.cs.mars.config.DocumentMessageListener;
import com.mongodb.client.model.changestream.FullDocument;
import org.bson.Document;
import org.junit.jupiter.api.Test;
import org.mars.core.Mars;
import org.mars.core.messaging.ChangeStreamRequest;
import org.mars.core.messaging.DefaultMessageListenerContainer;
import org.mars.core.messaging.MessageListenerContainer;

public class SimpleListenerTest {

    //监听指定连接数据库中的test表格中的所有操作，如果数据有变更，就会执行上面定义的onMessage的操作
    @Test
    public void testListener() throws InterruptedException {
        Mars mars = new Mars("连接uri");
        DocumentMessageListener listener = new DocumentMessageListener();
        MessageListenerContainer container = new DefaultMessageListenerContainer(mars);
        ChangeStreamRequest<Document> request = ChangeStreamRequest.builder(listener)
                .collection("test")//需要监听的集合名，不指定默认监听数据库的
                .filter()  //过滤需要监听的操作类型，可以根据需求指定过滤条件 ，本功能暂时不能支持
                .fullDocumentLookup(FullDocument.UPDATE_LOOKUP)  //不设置时，文档更新时，只会发送变更字段的信息，设置UPDATE_LOOKUP会返回文档的全部信息
                .build();
        container.register(request,Document.class);
        container.start();
        Thread.currentThread().join();
    }
    	
    //如果需要监听数据库中的多个集合，那么需要往MessageListener多注册一套规则，这个规则还是会包括，对消息的处理，监听的集合
    @Test
    public void tesMultiListener() throws InterruptedException {
        Mars mars = new Mars("连接uri");
        DocumentMessageListener listener = new DocumentMessageListener();
        MessageListenerContainer container = new DefaultMessageListenerContainer(mars);
        ChangeStreamRequest<Document> request = ChangeStreamRequest.builder(listener)
                .collection("test")//需要监听的集合名，不指定默认监听数据库的
                .filter()  //过滤需要监听的操作类型，可以根据需求指定过滤条件 ，本功能暂时不能支持
                .fullDocumentLookup(FullDocument.UPDATE_LOOKUP)  //不设置时，文档更新时，只会发送变更字段的信息，设置UPDATE_LOOKUP会返回文档的全部信息
                .build();
        container.register(request,Document.class);
        
        ChangeStreamRequest<Document> request1 = ChangeStreamRequest.builder(listener)
                .collection("testtt")//需要监听的集合名，不指定默认监听数据库的
                .filter()  //过滤需要监听的操作类型，可以根据需求指定过滤条件 ，本功能暂时不能支持
                .fullDocumentLookup(FullDocument.UPDATE_LOOKUP)  //不设置时，文档更新时，只会发送变更字段的信息，设置UPDATE_LOOKUP会返回文档的全部信息
                .build();
        container.register(request1,Document.class);
        container.start();
        Thread.currentThread().join();
    }
}
```

- 如果你只是想要简单的使用，并且对性能方面也没有太高的要求的话，那么建议你使用 `Mars` 支持的原生changeStream操作

  
```
@Test
public void testWatch() {
    Mars mars = new Mars("连接uri");
    MongoCollection<Document> collection = mars.getDatabase().getCollection("test");
    System.out.println(collection);
    //对本collection进行监听，并且过滤操作的规则，只监听insert类型的操作
    ChangeStreamIterable<Document> documents = collection.watch(asList(Aggregates.match(Filters.in("operationType", asList("insert")))))
            .fullDocument(FullDocument.UPDATE_LOOKUP);
    documents.forEach(doc -> {
        System.out.println(doc);
    });
}
```
### 在Spring容器内部使用



- 首先还是需要定义接收到消息之后的处理策略

  
```java
import com.mongodb.client.model.changestream.ChangeStreamDocument;
import lombok.extern.slf4j.Slf4j;
import org.bson.Document;
import org.mars.core.messaging.Message;
import org.mars.core.messaging.MessageListener;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class DocumentMessageListener implements MessageListener<ChangeStreamDocument<Document>, Document> {
    @Override
    public void onMessage(Message<ChangeStreamDocument<Document>, Document> message) {
        log.info("Received Message in collection: {},message raw: {}, message body:{}",
                message.getProperties().getCollectionName(), message.getRaw(), message.getBody());
    }
}
```

- 接下来是使用配置类来配置MessageListenerContainer，将定义的策略和需要监听的集合配置进去

  
```java
import com.mongodb.client.model.changestream.FullDocument;
import org.bson.Document;
import org.mars.core.Mars;
import org.mars.core.messaging.ChangeStreamRequest;
import org.mars.core.messaging.DefaultMessageListenerContainer;
import org.mars.core.messaging.MessageListenerContainer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.Executor;
import java.util.concurrent.Executors;


@Configuration
public class MongoConfig {
    //这里是声明将MessageListenerContainer放入到Spring容器中可以进行使用，
    @Bean
    MessageListenerContainer messageListenerContainer(Mars mars, DocumentMessageListener documnetMessageListener) {
        Executor executor = Executors.newSingleThreadExecutor();
        MessageListenerContainer messageListenerContainer = new DefaultMessageListenerContainer(mars, executor) {
            //在Spring项目启动到使用，就会自动启动
            @Override
            public boolean isAutoStartup() {
                return true;
            }
        };
        ChangeStreamRequest<Document> request = ChangeStreamRequest.builder(documnetMessageListener)
                .collection("dept")  //需要监听的集合名，不指定默认监听数据库的
                .filter()  //过滤需要监听的操作类型，可以根据需求指定过滤条件 功能暂不支持
                .fullDocumentLookup(FullDocument.UPDATE_LOOKUP)  //不设置时，文档更新时，只会发送变更字段的信息，设置UPDATE_LOOKUP会返回文档的全部信息
                .build();
        messageListenerContainer.register(request, Document.class);

        return messageListenerContainer;
    }
}

```

- 如果想要监听多个集合，只需要在写配置类的同时，往里面多注入一个即可

  
```java
import com.mongodb.client.model.changestream.FullDocument;
import org.bson.Document;
import org.mars.core.Mars;
import org.mars.core.messaging.ChangeStreamRequest;
import org.mars.core.messaging.DefaultMessageListenerContainer;
import org.mars.core.messaging.MessageListenerContainer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

@Configuration
public class MongoConfig {
    @Bean
    MessageListenerContainer messageListenerContainer(Mars mars, DocumnetMessageListener documnetMessageListener) {
        Executor executor = Executors.newSingleThreadExecutor();
        MessageListenerContainer messageListenerContainer = new DefaultMessageListenerContainer(mars, executor) {
            @Override
            public boolean isAutoStartup() {
                return true;
            }
        };

        ChangeStreamRequest<Document> request = ChangeStreamRequest.builder(documnetMessageListener)
                .collection("test")  //需要监听的集合名，不指定默认监听数据库的
                .filter()  //过滤需要监听的操作类型，可以根据需求指定过滤条件
                .fullDocumentLookup(FullDocument.UPDATE_LOOKUP)  //不设置时，文档更新时，只会发送变更字段的信息，设置UPDATE_LOOKUP会返回文档的全部信息
                .build();

        messageListenerContainer.register(request, Document.class);


        return messageListenerContainer;
    }

    @Bean
    MessageListenerContainer messageListenerContainer2(Mars mars, DocumnetMessageListener documnetMessageListener) {
        Executor executor = Executors.newSingleThreadExecutor();
        MessageListenerContainer messageListenerContainer = new DefaultMessageListenerContainer(mars, executor) {
            @Override
            public boolean isAutoStartup() {
                return true;
            }
        };

        ChangeStreamRequest<Document> request = ChangeStreamRequest.builder(documnetMessageListener)
                .collection("person")  //需要监听的集合名，不指定默认监听数据库的
                .filter()  //过滤需要监听的操作类型，可以根据需求指定过滤条件
                .fullDocumentLookup(FullDocument.UPDATE_LOOKUP)  //不设置时，文档更新时，只会发送变更字段的信息，设置UPDATE_LOOKUP会返回文档的全部信息
                .build();

        messageListenerContainer.register(request, Document.class);
        return messageListenerContainer;
    }

}
```
