import React from 'react';

class Child extends React.Component{
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Child
