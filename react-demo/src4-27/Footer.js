import React from 'react';

class Footer extends React.Component{
  render(){
    let styles={
      common:{
        color:'blue'
      },
      spec:{
        textAlign:'center',
        color:'red'
      }
    }
    return (
      <div>
        <h2 style={styles.common}>我是正常的</h2>
        <h2 style={Object.assign({},styles.common,styles.spec)}>我是特殊的</h2>
        <h2>我是尾部</h2>
      </div>
    )
  }
}

export default Footer;
