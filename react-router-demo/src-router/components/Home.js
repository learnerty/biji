import React from 'react';

import Test from './Test'

class Home extends React.Component{
  // componentDidMount(){
  //   alert('3秒后跳转到work')
  //   setTimeout(()=>{
  //     this.props.history.push('/work')  //跳转到
  //   },3000)
  // }
  handleClick(){
    // this.props.history.goBack();  //返回上一级
    // this.props.history.go(-2);  //往回倒两步
    this.props.history.goForward();  //向前一步
  }
  render(props){
    console.log(this.props);
    return (
      <div>
        Home
        <button onClick={this.handleClick.bind(this)}>返回</button>
        <Test/>
      </div>
    )
  }
}
export default Home
