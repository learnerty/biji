import React from 'react';

class Work1 extends React.Component{
  render(){
    return (
      <div>
        我是work1组件<br/>
        {this.props.match.params.work1}
      </div>
    )
  }
}
export default Work1
