git clone [url]   克隆

git status    查看仓库状态

git log     查看仓库日志

修改后上传更新

git add .  添加到git 暂时保存下来

git commit -m 'message'  做版本

git push   提交

atom 装包命令

apm install [packagename]

emmet

open-in-browser
autocomplete-paths
language-babel

手动创建.gitignore里面写名称,忽略不想上传的文件或文件夹


本地上传

ssh-keygen 生成电脑钥匙 .put公有,将里面内容复制到github的SSH and GPG keys

git init 初始化成一个仓库

git remote add origin 地址

git push -u origin master


安装node

先在github上安装nvm

nvm ls-remote  从远端查看nodejs的版本

nvm install 版本号  下载安装最新的nodejs版本

自动会把npm装上，npm是最大的nodejs的包管理工具

nvm use 版本 切换node的版本

nvm alias default 版本  设置默认的版本

nvm uninstall 版本  卸载nodejs




h标签  #h1  ##h2  以此类推



无序列表 - 或 *
- 无序列表
- 无序列表
- 无序列表

有序列表  数字
1. 有序列表
1. 有序列表
1. 有序列表

块标签  保证语法格式<pre></pre>

放在pre标签里<code></code>


.md文件  块标签   写什么语法就在后面写什么
```js  
console.log('aaa');
   console.log('aaa');
```
我是一个变量`window`

粗体  左右两个星号或者下划线

这样可以加粗**我是粗体**


斜体  左右一个星号或者下划线

这样可以倾斜*我是倾斜*



l + tab   a标签

[内容来自百度](https://www.baidu.com)


图片  ! + l   +tab

![img](http://pic.58pic.com/58pic/12/81/74/96458PICi7U.jpg)


分割线 三个星号
***


table  表格

| Header One     | Header Two     |
| :------------- | :------------- |
| Item One       | Item Two       |

> 好好学习天天向上
