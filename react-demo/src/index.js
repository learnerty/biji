import React from 'react';
import ReactDOM from 'react-dom';



// let age = 23;
// function sum(x,y){
//   return x*y;
// }
// let msg = 'HELLO WORLD'
//
// let hello = <div>
//   <label htmlFor="aa">姓名</label>
//   <input value={age} id="aa"/>
//   <p className="ppp">ddfd{(age+1000)*10}sfsffgd</p>
//   <p className="pp">hhhhhhh{sum(5,8)}{msg.toLowerCase()}</p>
// </div>;





// let Hello = React.createClass({
//   render:function(){
//     return (
//       <div>
//         <h1>我是第一种组件的创建方式，即将废弃</h1>
//       </div>
//     )
//   }
// })

// function World() {
//   return(
//     <h2>我是 hello World</h2>
//   )
// }
// function Hello() {
//   let x = 666;
//   return(
//     <div>
//       <h1>我是第二种组{x}件的创建方式，必须有返回值，而且返回值必须是 JSX elements</h1>
//       <World></World>
//     </div>
//   )
// }

// class Hello extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>我是第三种组件的创建方法</h1>
//       </div>
//     )
//   }
// }
// ReactDOM.render(hello, document.getElementById('root'))
// ReactDOM.render(<Hello />, document.querySelector('#root'))

import Head from './Head.js';
import Main from './Main.js';
import Footer from './Footer.js';

class J extends React.Component{
  render(){
    return (<div>
        <Head />
        <Main />
        <Footer />
      </div>)
  }
}

ReactDOM.render(<J/>,document.querySelector('#root'))
