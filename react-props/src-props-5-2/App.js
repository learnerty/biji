import React from 'react';
// import Btn from './Btn';
import Card from './Card';
import CardArr from './CardArr';
import Child from './Child';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      data: [
        {index:1,title:'first',date:'2017.4.30'},
        {index:2,title:'aaaaa',date:'2017.5.1'},
        {index:3,title:'bbbb',date:'2017.5.11'},
        {index:4,title:'last',date:'2017.5.21'}
      ],
      num:0
    }
  }
  handleClick = () => {console.log(this)};
  fand(ind){
    this.setState({
      data:this.state.data.filter(item=>item.index !== ind)
    })

  }
  render(){
    return (
      <div>
        {/* <Card index={23} title='abcdefg' date='2017.5.1'/> */}
        {/* {
          // this.state.data.map(item=><Card key={item.index} index={item.index} title={item.title} date={item.date}/>)
          //也可以写成
          this.state.data.map(item=><Card key={item.index} {...item}/>)
        } */}
        <CardArr data={this.state.data} hand={(ind) => this.fand(ind)}/>
        {/* <Child>
          <p style={{fontSize:'20px'}}>ddddddddd</p>
          <p>aaaaaaaaa</p>
        </Child> */}

        {/* {this.state.num}
        <button onClick={()=>this.setState({num:this.state.num+1})}>click</button>
        <button onClick={this.handleClick}>arrow func</button> */}
      </div>
      // <div>
      //   <Btn title='注册' pad={13} bg='red'/>
      //   <Btn title='登录' pad={15}/>
      //   <Btn title='清空' pad={17}/>
      //   <Btn title='关闭' pad={19}/>
      //   <Btn/>
      // </div>
    )
  }
}

export default App
