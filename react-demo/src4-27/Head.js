import React from 'react';
import img from './avater.jpg'
class Head extends React.Component{
  render(){
    return (
      <div>
        <img src={img} alt='' style={{width:'200px'}}/>
        <h2>我是头部</h2>
      </div>
    )
  }
}
export default Head;
