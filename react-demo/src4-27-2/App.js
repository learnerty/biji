import React from 'react'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      num:0,
      tab:0,
      show:true
    }
  }
  handleClick(num){
    this.setState({
      num: this.state.num + num,
      show: !this.state.show
    })
  }
  handleTab(tab){
    this.setState({
      tab: tab
    })
  }
  render(){
    let styles={
        width: this.state.show ? '100px' : '0px',
        height: this.state.show ? '100px' : '0px',
        background: this.state.show ? 'red' : '#fff',
        transition: 'all 1s'
    }
    let box1 = <div style={styles}></div>
    return (
      <div className='app'>
        <p>数量是: {this.state.num}</p>
        <button onClick={this.handleClick.bind(this,1)}>+1</button>
        <button onClick={this.handleClick.bind(this,-1)}>-1</button>
        <br />


        <button onClick={this.handleTab.bind(this,0)}>选项卡1</button>
        <button onClick={this.handleTab.bind(this,1)}>选项卡2</button>
        <button onClick={this.handleTab.bind(this,2)}>选项卡3</button>
        <br />
        {
          this.state.tab===0 ? <img src={img1} alt=''/> :
          this.state.tab===1 ? <img src={img2} alt=''/> : <img src={img3} alt=''/>
        }
        {box1}
      </div>
    )
  }
}

export default App;
