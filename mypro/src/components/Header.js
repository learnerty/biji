import React from 'react';
import Button from 'antd/lib/button';

class Header extends React.Component{
  render(){
    return (
      <header>
        <Button icon="left">返回</Button>
        <h2>learnerty@HOME</h2>
        <Button icon="right">返回</Button>
      </header>
    )
  }
}
export default Header
