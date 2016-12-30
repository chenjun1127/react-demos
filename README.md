# React 基本教程
### 简介
React 是一个用于构建用户界面的 JAVASCRIPT 库。
React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。
React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。
React 拥有较高的性能，代码逻辑非常简单，越来越多的人已开始关注和使用它。
### React 特点
* 声明式设计 −React采用声明范式，可以轻松描述应用。
* 高效 −React通过对DOM的模拟，最大限度地减少与DOM的交互。
* 灵活 −React可以与已知的库或框架很好地配合。
* JSX − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
* 组件 − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
* 单向响应的数据流 − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。
### React 安装
React 可以直接下载使用，可以从[官网](https://facebook.github.io/react/)下载最新版。也可以使用React CDN 库; 
```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/6.1.4/browser.min.js"></script>
```
基本模板输出hello,world!
```javascript
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Hello React!</title>
    <script src="../../build/react.js"></script>
    <script src="../../build/react-dom.js"></script>
    <script src="../../build/browser.min.js"></script>
</head>
<body>
<div id="example"></div>
<script type="text/babel">
    ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
    );
</script>
</body>
</html>
```
需注意两点：
* 首先，最后一个 script 标签的 type 属性为 text/babel 。这是因为 React 独有的 JSX 语法，跟 JavaScript 不兼容。凡是使用 JSX 的地方，都要加上 type="text/babel" 。
* 其次，上面代码一共用了三个库： react.js 、react-dom.js 和 Browser.js ，它们必须首先加载。其中，react.js 是 React 的核心库，react-dom.js 是提供与 DOM 相关的功能，Browser.js 的作用是将 JSX 语法转为 JavaScript 语法，这一步很消耗时间，实际上线的时候，应该将它放到服务器完成。

#### 一、React JSX
```javascript
ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);
```
##### a）、JavaScript 表达式
```javascript
ReactDOM.render(
	<div>
	  <h1>{i == 1 ? 'True!' : 'False'}</h1>
	</div>,
	document.getElementById('example')
);
```
注意：在 JSX 中不能使用 if else 语句，但可以使用 conditional (三元运算) 表达式来替代。以下实例中如果变量 i 等于 1 浏览器将输出 true, 如果修改 i 的值，则会输出 false。
##### b）、样式
React 推荐使用内联样式。我们可以使用 camelCase 语法来设置内联样式. React 会在指定元素数字后自动添加 px 。以下实例演示了为 h1 元素添加 myStyle 内联样式：
```javascript
var myStyle = {
	fontSize: 100,
	color: '#FF0000'
};
ReactDOM.render(
	<h1 style = {myStyle}>Example</h1>,
	document.getElementById('example')
);
```
##### c）、数组
JSX 允许在模板中插入数组，数组会自动展开所有成员：
```javascript
var arr = [
  	<h1>Example</h1>,
  	<h2>This is React demo</h2>,
];
ReactDOM.render(
  	<div>{arr}</div>,
  	document.getElementById('example')
);
```
#### 二、React 组件
创建基本的组件
```javascript
var HelloMessage = React.createClass({
render: function () {
    console.log(this.props)
    return <h1 title={this.props.title}>hello {this.props.name}</h1>;
}
});
ReactDOM.render(
    <HelloMessage name="Jack" title="My name is Jack"/>,
    document.getElementById('example')
)
```
React.createClass 方法用于生成一个组件类 HelloMessage。
< HelloMessage /> 实例组件类并输出信息。
注意：原生 HTML 元素名以小写字母开头，而自定义的 React 类名以大写字母开头，比如 HelloMessage 不能写成 helloMessage。除此之外还需要注意组件类只能包含一个顶层标签，否则也会报错。
