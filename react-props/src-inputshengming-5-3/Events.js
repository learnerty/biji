import React from 'react'

class Events extends React.Component{
  handleClick(num,e){
    console.log(num);
    e.preventDefault();
  }
  render(){
    return (
      <div>
        <a href="http://www.baidu.com" onClick={this.handleClick.bind(this,222)}>baidu</a>
      </div>
    )
  }
}
export default Events
