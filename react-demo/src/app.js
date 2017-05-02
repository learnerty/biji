import React from 'react'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      num:3
    }
  }
  handleClick(num){
    console.log(num);
    let btncol=document.querySelectorAll(".btn button")[`${num-1}`];
    btncol.style.backgroundColor='#40E0D0';
    console.log(btncol);
  }
  render(){
    let sty={
      backgroundColor:'blue'
    }

    let num=this.state.num;
    return (
      <div className="btn">
        <button onClick={this.handleClick.bind(this,num-2)}>{num-2}</button>
        <button onClick={this.handleClick.bind(this,num-1)} style={{marginLeft:'4px'}}>{num-1}</button>
        <button onClick={this.handleClick.bind(this,num)} style={{marginLeft:'4px'}}>{num}</button>
        <button onClick={this.handleClick.bind(this,num+1)} style={{marginLeft:'4px'}}>{num+1}</button>
        <button onClick={this.handleClick.bind(this,num+2)} style={{marginLeft:'4px'}}>{num+2}</button>
      </div>
    )
  }
}

export default App
