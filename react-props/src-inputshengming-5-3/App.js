import React from 'react';
import Test from './Test';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      num:0,
      destroy:false
    }
    console.log('constructor');
  }
  componentWillMount(){
    console.log('will mount');
  }
  render(){
    console.log('render');
    return (
      <div>
        {this.state.num}
        <button onClick={()=>this.setState({num:this.state.num+1})}>+1</button>

        <button onClick={()=>this.setState({destroy:true})}>销毁test组件</button>
        {this.state.destroy ? null : <Test num={this.state.num}/>}
      </div>
    )
  }
  componentDidMount(){
    console.log('did mount');
    // setInterval(()=>this.setState({num:this.state.num+1}),1000)
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('should update');
    // console.log(nextProps,nextState);
    return nextState.num<10 ? true : false
  }
  componentWillUpdate(nextProps, nextState){
    console.log('will update');
    // console.log(nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState){
    console.log('did update');
    // console.log(prevProps, prevState);
  }
}

export default App
