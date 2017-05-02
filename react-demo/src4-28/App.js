import React from 'react';
import Drawer from './Drawer';
// import $ from 'jquery';

class App extends React.Component{
  handleClick(){
    // console.dir(p)   //拿到详细信息

    // console.log(this.refs.test);
    // console.log(this.aaa);
    // this.input.focus();
    // $(this.input).focus();

    // console.log(this.drawer);
    this.drawer.open()
  }
  render(){
    return (
      <div>
        <Drawer ref={drawer=>this.drawer = drawer}/>
        <button style={{float:'right'}} onClick={this.handleClick.bind(this)}>click</button>
        {/* <p ref={(test) => this.aaa = test}>talk is cheap,show me your code</p>
        <input placeholder="hahaha" ref={input=>this.input=input} />
        <button onClick={this.handleClick.bind(this)}>click</button> */}
      </div>
    )
  }
}

export default App
