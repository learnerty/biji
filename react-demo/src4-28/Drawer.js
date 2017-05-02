import React from 'react';

class Drawer extends React.Component{
  constructor(){
    super();
    this.state={
      show:false
    }
  }
  open(){
    this.setState({show:!this.state.show})
  }
  render(){
    // let cc = 6;
    // cc && cc==6 && alert('aaa');console.log('qqq')
    return (
      <div>
        <div style={{position:'fixed',top:'0',width:'300px',left:this.state.show ? '0' : '-300px',bottom:'0',background:'#ccc',transition:'left 0.5s'}}></div>
      </div>


    )
  }
}

export default Drawer
