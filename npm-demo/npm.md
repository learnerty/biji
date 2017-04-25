初始化弄node项目  
```bash
  npm init
```

npm install jquery --save  安装jquery插件  --save 向package.json记录

npm install  安装配置文件package.json记录的所有依赖

用npm装的包，直接require('包名')，如果是自己的包，则require('相对路径/包名')

安装指定版本的最高版本 npm install jquery@3.0 --save-dev    一般用来安装开发所用的

安装第三方模块
```js
npm install [packagename] [--save]
//安装到了node_modules
--save:记录到dependencies字段下
--save-dev:记录到devDependencies字段下
--global:缩写为 -g  全局安装,安装到我们的系统上，可以在任何位置使用
```

卸载模块
```bash
  npm uninstall [packagename] [-g]  不是全局不用加-g
```

npm install -g create-react-app

create-react-app --version  查看版本

create-react-app --help   查看帮助

npm run start  运行
