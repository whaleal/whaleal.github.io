mars是一个开放的项目，有很多开发人员参与其中。你也可以成为其中一份子。这里介绍如何参与mars开发。

# 🧬贡献代码的步骤
* 在github issues 上找到需要修复的问题，或提出要贡献的特性内容  
* 在github或者Github上fork项目到自己的repo  
* 把fork过去的项目也就是你的项目clone到你的本地  
* 修改代码（记得一定要修改v1-dev分支）并进行相关测试  
* commit后push到自己的库（v1-dev分支）  
* 登录github或Github在你首页可以看到一个 pull request 按钮，点击它，选择自己的dev 分支及本项目的dev 分支，填写一些说明信息，然后提交即可。  
* 等待维护者合并  

# 安装git相关软件 <br/>
* git有命令行和图形工具，强烈推荐你用命令行工具。

* Eclipse / IDEA的git插件 <br/>
Eclispe/IDEA自带的git插件，在Eclipse / IDEA 之前的版本非常不稳定，不推荐使用，在Eclipse / IDEA 中，也偶发bug，仍然不推荐使用。

* git的官方站点
http://git-scm.com/ <br/>
官方站点有文档和命令行工具下载，需要翻墙，自己想办法解决。

# Fork
* 第1步 Fork自己的仓库<br>
从whaleal/mars项目中fork一个你自己的仓库

mars的官方仓库是：
https://github.com/whaleal/mars

fork之后，你的个人仓库是：
https://github.com/my_account/mars 

# 开发并且提交代码

* clone
首先要从github上下载代码到本地，你需要执行如下命令：
<pre>
git clone https://github.com/my_account/mars.git 
cd mars
</pre>

* commit
当你修改代码之后，需要commit到本地仓库，执行的命令如下：
<pre>
git add --all
git commit -a -m '修改原因，相关说明信息'
</pre>
建议你的不同的修改，分别做不同的commit。

* push
执行git commit之后，只是提交到了本机的仓库，而不是github上你账号的仓库。你需要执行push命令，把commit提交到服务器。
<pre>
git push
</pre>

# 上游仓库
* 添加远程仓库 <br>
<pre>
git remote add upstream https://github.com/whaleal/mars.git 
</pre> 

* 更新远程代码：
<pre>
git pull upstream
</pre>

* 将远程代码合并到本地仓库
<pre>
git merge upstream/master
</pre>

* 将代码提交自己的仓库
<pre>
git push
</pre>

# 保存密码 
每次push都需要输入密码很麻烦，你可以执行如下命令保存密码：
<pre>
git config --global credential.helper cache
git config credential.helper 'cache --timeout=360000'
</pre>

# pull request
登陆github，在你自己的账号中的仓库中点击pull request, 就会要求你输入pull request的原因和详细信息，你确认之后。mars的owner就会收到并且审查，审查通过就会合并到主干上。

mars欢迎任何人为mars添砖加瓦，贡献代码，不过维护者是一个强迫症患者，为了照顾病人，需要提交的pr（pull request）符合一些规范，规范如下：
* 注释完备，尤其每个新增的方法应按照Java文档规范标明方法说明、参数说明、返回值说明等信息，必要时请添加单元测试，如果愿意，也可以加上你的大名。
* mars的缩进按照IDEA,IDEA真香，默认（tab）缩进，所以请遵守（不要和我争执空格与tab的问题，这是一个病人的习惯）。
* 新加的方法不要使用第三方库的方法，mars遵循无依赖原则（除非在extra模块中加方法工具）。
* 请pull request到`v1-dev`分支。mars在1.x版本后使用了新的分支：`v1-main`是主分支，表示已经发布中央库的版本，这个分支不允许pr，也不允许修改。


# 提示
本地快速编译，去掉生成javadoc和testcase，节省时间。建议对页面修改时这么编译，如果修改java代码，请不要跳过testcase。
<pre>
mvn install -Dmaven.javadoc.skip=true -Dmaven.test.skip=true
</pre>


### 代码格式化
不建议您格式化项目代码,可能会给项目带来较大的风险。
如果您一定要这么做,请参照 IDEA 风格来格式化文件，导入至Eclipse / IDEA并启用，提交的代码必须按照此格式提交

### commit
不同目的进行的代码修改，进行分次提交，多个commit可以放到一个pullrequest里

### commit msg
内容要写具体点
例如：add testcase --> 改成 add testcase for XXX class 之类的, 可以git log 就能明白做了什么, 而不是非要查看具体改了哪些文件才知道做了什么

### 分支说明 
项目分为 main  分支和 dev  分支   
代码修改提交请 全部提交到 dev  分支下。  

