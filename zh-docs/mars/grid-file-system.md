Mars gridfs 支持及样例 

## 文件存储GridFs

- GridFS 用于存储和恢复那些超过16M（BSON文件限制）的文件(如：图片、音频、视频等)
- GridFS 也是文件存储的一种方式，但是它是存储在MonoDB的集合中
- GridFS 可以更好的存储大于16M的文件
- GridFS 会将大文件对象分割成多个小的chunk(文件片段),一般为256k/个,每个chunk将作为MongoDB的一个文档(document)被存储在chunks集合中
- GridFS 用两个集合来存储一个文件：fs.files与fs.chunks
- 每个文件的实际内容被存在chunks(二进制数据)中,和文件有关的meta数据(filename,content_type,还有用户自定义的属性)将会被存在files集合中
> `Mars`框架同样支持GridFs 的功能，相对于原生的Java驱动，在操作方面有了许多简化，

```java
@SpringBootTest
@Slf4j
public class MarsGridFsTest {
    @Autowired
    Mars mars;

    private static String bucketName = "xx";
    private static String m1 = "./back.jpeg";

    private static String m1Id = "6080dd5e878eb9205b437f7f";


    //向MongoDB中存入一个文件，插入成功会返回该文件的主键
    @Test
    public void testInsertGridFs() throws FileNotFoundException {
        File file = new File(m1);
        FileInputStream fileInputStream = new FileInputStream(file);
        ObjectId objectId = mars.storeGridFs(fileInputStream, "xx", new Document("delete", true), bucketName);
    }
    
    //根据主键Id去查找文件的信息，返回的是一个GridFSFindIterable 类型的对象，这个对象包含了文件的基本信息，但是不包含文件流
    @Test
    public void testFindById() {
        String fieldId = "6080dc7d30d2012b25d79af5";
        GridFSFindIterable iterable = mars.findGridFs(Query.query(Criteria.where("_id").is(new ObjectId(fieldId))), bucketName);
        System.out.println("找到的数据");
        System.out.println(iterable);
        iterable.forEach(item -> {
            System.out.println(item);
        });
    }
    
    //根据文件的filename去进行查询，由于filename可重复，所以可能会查询出多个结果
    @Test
    public void testFindByName() {
        GridFSFindIterable iterable = mars.findGridFs(Query.query(Criteria.where("filename").is("back")));
        System.out.println("找到的数据");
        iterable.forEach(item -> {
            System.out.println(item);
        });
    }
    
    //根据文件的元信息进行查询，也会返回多个结果
    @Test
    public void testFindByMetadata() {
        Document document = new Document("delete", false);
        GridFSFindIterable iterable = mars.findGridFs(Query.query(Criteria.where("metadata.delete").is(true)));
    }
    
    //更改文件的元信息，实际上是使用Mar对文档的操作进行修改的，并没有使用到GridFs的操作
    @Test
    public void updateGridFs() {
        UpdateResult result = mars.getDatabase().getCollection("fs.files").updateOne(Filters.eq("_id", new ObjectId(m1Id)), Updates.set("metadata.delete", true));
        System.out.println("更新的结果");
        System.out.println(result);
    }
    
    //将在MongoDB中存储的文件下载到指定目录
    @Test
    public void testBucketFind() throws IOException {
        GridFSFile gridFSFile = mars.findOneGridFs(Query.query(Criteria.where("_id").is(new ObjectId(m1Id))), bucketName);
        //打开下载流对象
        GridFsResource resource = mars.getResource(gridFSFile,bucketName);
        //创建gridFsSource，用于获取流对象
        //获取流中的数据
        InputStream input = resource.getInputStream();
        //目的地地址
        String destination = "/usr/local/tmp/xx.rar";
        int index;
        byte[] bytes = new byte[1024];
        FileOutputStream downloadFile = new FileOutputStream(destination);
        while ((index = input.read(bytes)) != -1) {
            downloadFile.write(bytes, 0, index);
            downloadFile.flush();
        }
        input.close();
        downloadFile.close();
    }
    
    //根据查询条件删除文件
    @Test
    public void testDelByQuery() {
        mars.deleteGridFs(Query.query(Criteria.where("_id").is(new ObjectId("606c2bd63b073106df70cc9e"))));
    }

    //根据id删除文件
    @Test
    public void testDelById() {
        mars.deleteGridFs(new ObjectId("608011db84316b43f412d1f8"), "fs");
    }

}
```