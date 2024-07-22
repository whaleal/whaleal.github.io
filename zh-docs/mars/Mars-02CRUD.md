Mars 基础的增删改查样例


## 单个CRUD操作
```java
@Slf4j
@SpringBootTest
public class MarsCRUDTest {
    @Autowired
    private Mars mars;
    
    //插入一个对象记录到数据库
	@Test
    public void testInsertOne() {
        //这个只是我自定义的一个创建对象的静态方法
        Student student = StudentGenerator.getInstance(defStuNo);
        InsertOneResult insert = mars.insert(student);
    }
	//根据条件查找一个对象并返回
	@Test
    public void testFind() {
        String key = "1";
        Optional<Student> student = mars.findOne(Query.query(Criteria.where("_id").is(key)), Student.class);
    }
	//更新student表中_id为key的记录，修改它的stuName字段为yy,updateOptions.multi false为单条更新
        @Test
    public void testUpdate() {
        String key = "1";
        mars.update(Query.query(Criteria.where("_id").is(key)), Update.update("stuName", "yy"),Student.class,new UpdateOptions().multi(false),"student");
    }
	//删除student集合中_id为key的记录
	@Test
    public void testDeleteOne(){
        String key = "1";
        mars.delete(Query.query(Criteria.where("_id").is(key)),Student.class);
    }

}
```
## 批量CRUD操作
```java
@Slf4j
@SpringBootTest
public class MarsCRUDTest {
    @Autowired
    private Mars mars;
    
    private static List<Student> stuList = new LinkedList<>();
    private static Integer totalCount = 1000000;

    public void init() {
        mars.getCollection(Student.class).drop();
        for (int i = 0; i < totalCount; i++) {
            Student student = StudentGenerator.getInstance(i);
            stuList.add(student);
        }
    }
    //插入多个对象记录到数据库
	@Test
    public void testInsertMany() {
        init();
        mars.insert(stuList);
    }
    
    //根据条件查找多个对象，并返回其中的前一部分数据
    @Test
    public void testFindAll(){
        Integer queryCount = 3;
        QueryCursor<Student> cursor = mars.findAll(new Query().limit(queryCount), Student.class);
    }
    
	
    //批量更新,更新表中姓名为yy全部学生的年龄为10 updateOptions.multi true 控制批量更新
    @Test
    public void testUpdateMulti(){
        //构建query条件
        Query query = new Query(Criteria.where("stuName").is("yy"));
        //构建UpdateOptions对象，设定multi为true表示批量更新
        UpdateOptions options = new UpdateOptions();
        options.multi(true);
        //构建更新条件
        Update update = new Update();
        update.set("stuAge",10);
        mars.update(query,update, Book.class,options,"student");
    }
    
	//删除student集合中_id为key的记录
	@Test
    public void testDeleteOne(){
        String key = "1";
        mars.delete(Query.query(Criteria.where("_id").is(key)),Student.class);
    }

}
```

