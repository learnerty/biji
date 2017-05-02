import React from 'react';
import {ccc, red, blue, style} from './style';
import bg from './avater.jpg'
class Main extends React.Component{
  getStyles(){
    return ({
      textAlign: 'center',
      color : blue
    })
  }
  render(){
    let styles={
      textAlign: 'center',
      color : red
    }
    return (
      <div style={{backgroundImage:`url(${bg})`}}>
        <h2 style={{textAlign:'center',color:ccc}}>我是身体1</h2>
        <h2 style={styles}>我是身体2</h2>
        <h2 style={this.getStyles()}>我是身体3</h2>
        <h2 style={style}>我是导入的样式</h2>
      </div>
    )
  }
}
export default Main;
