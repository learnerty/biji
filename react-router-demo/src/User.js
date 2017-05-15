import React from 'react';
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';

class User extends React.Component{
  constructor(){
    super();
    this.state={
      data:{},
      wait:true
    }
  }
  componentWillMount(){
    axios.get(`https://cnodejs.org/api/v1/user/${this.props.match.params.loginname}`)
      .then(res => this.setState({data:res.data.data,wait:false}))
  }
  render(){
    let {data,wait} = this.state;
    return (
      <div style={{overflow:'hidden'}}>
        {
          wait ? '敬请期待...' :
          <div>
            <div>
              <img src={data.avatar_url} style={{float:'left',width:'40px'}} alt="img"/>
              {data.loginname}
              <p>{data.score}积分</p>
              <p>注册时间 {moment(data.create_at).fromNow()}</p>
            </div>
            <div>
              <h4>最近创建的话题</h4>
              {
                data.recent_topics.map(item=>
                  <p key={item.id}>
                    <img style={{float:'left',width:'30px'}} src={item.author.avatar_url} alt='img'/>
                    <Link to={`/topic/${item.id}`} style={{textDecoration:'none'}}><span style={{color:'#005580'}}>{item.title}</span></Link>
                    <span style={{fontSize:'0.8em',float:'right'}}>{moment(item.last_reply_at.slice(0,10)).fromNow()}</span>
                  </p>
                )
              }
            </div>
            <div>
              <h4>最近参与的话题</h4>
              {
                data.recent_replies.map(item=>
                  <p key={item.id}>
                    <img style={{float:'left',width:'30px'}} src={item.author.avatar_url} alt='img'/>
                    <Link to={`/topic/${item.id}`} style={{textDecoration:'none'}}><span style={{color:'#005580'}}>{item.title}</span></Link>
                    <span style={{fontSize:'0.8em',float:'right'}}>{moment(item.last_reply_at.slice(0,10)).fromNow()}</span>
                  </p>
                )
              }
            </div>
          </div>
        }

      </div>
    )
  }
}
export default User
