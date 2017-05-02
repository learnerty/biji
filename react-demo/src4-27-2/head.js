import React from './react'

class Head extends React.Conponent{
  render(){
    let rigDiv = <div style={{float:'right'}}>
      <div>Home</div>
      <div>About</div>
      <div>Contact</div>
    </div>
    retrun (
      <div className='head'>
        <h3>Project name</h3>
      </div>
    )
  }
}
