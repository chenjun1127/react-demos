# Webpack+Es6+React 打包环境构建

Es6+React以及webpack打包搭建框架的步骤及部分详解

### 1、初始化项目，安装依赖项
#### 初始化一个 package.json 文件
```javascript
npm init 
```
执行后，npm会引导输入一些基本信息，可以默认按回车键，然后会生成一个package.json文件，包含基本信息，后续的依赖也会保存到它里边。
当然也可以

#### 安装 react 和 react-dom 依赖：
```javascript
npm install react react-dom --save
```

#### 安装 webpack 和 webpack-dev-server 依赖：
```javascript
npm install webpack webpack-dev-server --save-dev 
```

#### 安装 babel 依赖：
```javascript
npm install babel-loader babel-core babel-preset-react babel-preset-es2015 --save-dev
```

### 2、代码部分
最终的目录结构类似于这样：
```javascript
--your project
  |--components（组件目录）
    ...
  |--index.js（入口文件）
  |--build（输出目录）
    |--index.html
    |--bundle.js（输出文件，由 webpack 打包后生成的）
  |--package.json
  |--webpack.config.js
```

### 3、webpack配置

webpack打包时需要一个入口文件，需要将react组件引到这个入口文件，就是index.js

下面就是 Webpack 配置文件 webpack.config.js 的编写，代码如下：
```javascript
var path = require('path');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, './index.js');
var BUILD_PATH = path.resolve(__dirname, './build');

module.exports = {
	entry: APP_PATH,
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	devServer: {
		inline: true, //实时刷新
		port: 8100
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader",
			query: {
				presets: ['react', 'es2015']
			}
		}]
	}
}
```

最后，需要将编译打包后的文件 bundle.js 引入到 index.html 中：
```javascript
<script src="./bundle.js"></script>
```
### 4、构建和启动

#### 构建

配置完成后需要最后执行webpack.config.js中的构建任务，在package.json中配置就可以完成
```javascript
"scripts": {
	"build": "webpack"
}
```

执行 npm run build 完成构建，此时打开 index.html ，即可看到效果。

#### 启动服务器

但这种方式显得略 low，一是它是双击以文件的形式打开 HTML 页面，二是每次有更改都要手动执行 npm run build 重新打包。

一种更好的方式是启动一个静态资源服务器，监听文件内容修改并自动打包。在这里用的是前面安装好的 webpack-dev-server ，在 package.json 中配置：
```javascript
"scripts": {
	"dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build"
}
```
dev 中各个参数的含义：
* --webpack-dev-server 在 localhost:8100 建立一个 Web 服务器；
* --devtool eval 映射编译好的源码，用于调试；
* --progress 显示代码打包进度；
* --colors 表示在命令行中显示颜色；
* --content-base 来指定 server 启动后的内容目录。

执行 npm run dev 启动 server，此时打开 http://localhost:8100 ，即可看到效果。