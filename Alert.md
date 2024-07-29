

修改整个文档的目录结构
为了网站更好的进行URL拼接中，目录规范为小写字母+'-'


1 给你一个路径 filePath:/Users/liheping/Desktop/project/whaleal.github.io/zh-docs
2 遍历所有路径，针对每个路径修改一个符合条件的路径：修改为【小写字母+'-'】
  记录下所有的源路径和目标路径存到Map中
3 遍历filePath下所有.md结尾的文档，查询文件中涉及到的.png和.md，然后把路径进行替换修改

