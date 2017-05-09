import React from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class Home extends React.Component{
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentWillMount(){
    axios.get('https://cnodejs.org/api/v1/topics')
      .then(res => this.setState({data:res.data.data}))
  }
  render(){
    console.log(this.state.data);
    let obj={
      share:'分享',
      ask:'问答',
      job:'招聘'
    }
    return (
      <div>
        <button>全部</button>
        <button>精华</button>
        <button>分享</button>
        <button>问答</button>
        <button>招聘</button>
        <br/>
        {
          this.state.data.map(item =>
            <div key={item.id}>
              <img src={item.author.avatar_url} alt='avatar' style={{width:'30px',height:'30px'}}/>
              <span>{item.reply_count}/{item.visit_count}</span>
              {item.top ? <button>置顶</button> : item.good ? <button>精华</button> : <button>{obj[item.tab]}</button>}
              <span>{item.title}</span>
              <span style={{float:'right'}}>{moment(item.create_at, "YYYYMMDD").fromNow()}</span>
            </div>
          )
        }
      </div>
    )
  }
}
export default Home
