import React from 'react';
import axios from 'axios';
import moment from 'moment';

class topic extends React.Component{
  constructor(){
    super();
    this.state={
      data:{}
    }
  }
  componentWillMount(){
    axios.get(`https://cnodejs.org/api/v1/topic/${this.props.match.params.id}`)
      .then(res => this.setState({data:res.data.data}))
  }
  render(){
    let newdata = this.state.data;
    return (
      <div>
        <div>
          {newdata.top ? <button style={{backgroundColor:'#80bd01',color:'#fff',float:'left'}}>置顶</button> : newdata.good ? <button style={{backgroundColor:'#80bd01',color:'#fff',float:'left'}}>精华</button> : <div></div>}
          <h2>{newdata.title}</h2>
        </div>
        <ul style={{color:'#333'}}>
          <li>发布于{moment(newdata.create_at).fromNow()}</li>
          <li>{newdata.visit_count}次浏览</li>
        </ul>
        <div dangerouslySetInnerHTML={{__html: newdata.content}} />
      </div>
    )
  }
}
export default topic
