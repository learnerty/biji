import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Header extends React.Component{
  constructor(){
    super();
    this.state={
      login:false,
      user:{}
    }
  }
  componentWillMount(){
    if (!sessionStorage.gouwu) {
      sessionStorage.gouwu = JSON.stringify([])
    }
    let json = JSON.parse(sessionStorage.gouwu);
    this.setState({
      user:json.user,
      login:json.login
    })
  }
  login(){
    let token = this.input.value;
    axios.post('https://cnodejs.org/api/v1/accesstoken',{accesstoken:token})
      .then(res => {
        this.setState({user:res.data,login:true})
        sessionStorage.gouwu = JSON.stringify({user:res.data,login:true})
      })
      .catch(err => alert(err))
  }
  render(){
    return (
      <div style={{overflow:'hidden'}}>
        <h1 style={{float:'left',margin:'0'}}>cnode 中文社区</h1>
        {
          this.state.login ? <p style={{float:'right'}}>欢迎您:<Link to={`/user/${this.state.user.loginname}`}>{this.state.user.loginname}</Link></p> :
          <div style={{float:'right'}}>
            <input ref={input=>this.input=input}/>
            <button onClick={this.login.bind(this)}>登录</button>
          </div>
        }
      </div>
    )
  }
}
export default Header
