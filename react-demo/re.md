首先，必须导入

import React from 'react';
import ReactDOM from 'react-dom';


ReactDOM.render 把写的东西渲染到浏览器

ReactDOM.render(渲染什么东西,渲染到哪里)


querySelector  和$用法一样，代替$，找到匹配到的第一个

querySelectorAll  返回所以元素，找到的是一个数组，用[ ]来找

#### JSX语法
是对语法的拓展，不是一个新的语法

例如：`let hello = <p>hello world</p>` 就是一个JSX语法

JSX语法需要babel进行编译，转为这个方法 React.createElement();
```js
var hello = React.createElement(
  "p",
  null,
  "hello world"
);
```

Adjacent JSX elements must be wrapped in an enclosing tag 相邻的JSX元素必须包裹在一个闭合标签内

每一个标签必须闭合Unterminated JSX contents

class要写成className  for写成htmlFor

标签区分大小写

在JSX语法中可以嵌入变量或者求值表达式,可以写js语法，用一对大括号包裹即可,不可以写js语句


#### React组件(3种)
当做自定义标签使用，定义的组件名称首字母必须大写，渲染的时候也要首字母大写，一般组件都是写成直观闭的 < /> 组件可以嵌套组件
1. React.createClass
```js
let Hello = React.createClass({
  render:function(){
    return (
      <div>
        <h1>我是第一种组件的创建方式，即将废弃</h1>
      </div>
    )
  }
})
// ReactDOM.render(<Hello></Hello>, document.querySelector('#root'))
ReactDOM.render(<Hello />, document.querySelector('#root'))
```
2. function(){}
```js
function World() {
  return(
    <h2>我是 hello World</h2>
  )
}
function Hello() {
  let x = 666;
  return(
    <div>
      <h1>我是第二种组{x}件的创建方式，必须有返回值，而且返回值必须是 JSX elements</h1>
      <World></World>
    </div>
  )
}
ReactDOM.render(<Hello />, document.querySelector('#root'))
```
3. class 组件名 extends React.Component{render(){}}
```js
class Hello extends React.Component{
  render(){
    return(
      <div>
        <h1>我是第三种组件的创建方法</h1>
      </div>
    )
  }
}
```
render(){} === render:function(){}
