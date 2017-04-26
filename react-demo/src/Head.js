import React from 'react';
import img from './avater.jpg'
class Head extends React.Component{
  render(){
    return (
      <div>
        <h2>我是头部</h2>
        <img src={img} alt=''/>
      </div>
    )
  }
}
export default Head;
