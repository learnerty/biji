import React from 'react'

import Main from './main'

class Top extends React.Component{
  handleStart(){
    this.main.getval(this.input.value)
  }
  render(){
    return (
      <div>
        <form style={{background:'#00bcd4',paddingTop:'100px',paddingBottom:'55px',textAlign:'center'}}>
          <input onChange={this.handleStart.bind(this)} ref={input=>this.input = input} style={{height:'30px',lineHeight:'30px',width:'360px'}}/>
          <button style={{background:'#ff4081',border:'none',outline:'none',height:'35px',width:'50px',color:'#fff',marginLeft:'6px'}}>搜索</button>
        </form>
        <Main ref={main=>this.main = main} />
      </div>
    )
  }
}

export default Top
