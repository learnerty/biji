import React from 'react';
import axios from 'axios';
import moment from 'moment';
import {Link} from 'react-router-dom';

class Home extends React.Component{
  constructor(){
    super();
    this.state={
      data:[],
      tab:'',
      tabs:['','good','share','ask','job'],
      page:1
    }
  }
  loadData(tab=this.state.tab,page=1){
    axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}`)
      .then(res => this.setState({data:res.data.data}))
      .catch(error => {if (error.response) {
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }})
  }
  componentWillMount(){
    this.loadData()
  }
  handleClick(tab){
    this.setState({tab})
    this.loadData(tab)
  }
  selectPage(page){
    this.setState({page})
    this.loadData(this.state.tab,page)
  }
  render(){
    let obj={
      good:'精华',
      share:'分享',
      ask:'问答',
      job:'招聘'
    }
    let btns=[];
    for (var i = 0; i < 5; i++) {
      let nowPage = this.state.page<3?i+1 : this.state.page+i-2;
      btns.push(
        <button onClick={this.selectPage.bind(this,nowPage)} key={i} style={{backgroundColor:this.state.page===nowPage?'#80bd01':'#778087'}}>{nowPage}</button>
      )
    }
    return (
      <div>
        {
          this.state.tabs.map((item,index)=>
          <button key={index} onClick={this.handleClick.bind(this,item)} style={{background:this.state.tab===item?'#80bd01':'#fff',color:this.state.tab===item?'#fff':'#80bd01'}}>{!item?'全部':obj[item]}</button>)
        }
        {
          this.state.data.length===0 ? '加载中...请稍后' :
          this.state.data.map(item =>
            <div key={item.id}>
              <Link to={`/user/${item.author.loginname}`}><img src={item.author.avatar_url} alt='avatar' style={{width:'30px',height:'30px'}}/></Link>
              <span>{item.reply_count}/{item.visit_count}</span>
              <button style={{background:item.good||item.top ?'#80bd01':'#e5e5e5',color:item.good||item.top?'#fff':'#999'}}>{item.top ? '置顶' : item.good ? '精华' : obj[item.tab]}</button>
              <Link to={`/topic/${item.id}`} style={{textDecoration:'none'}}><span>{item.title}</span></Link>
              <span style={{float:'right'}}>{moment(item.create_at.slice(0,10)).fromNow()}</span>
            </div>
          )
        }
        {btns}
      </div>
    )
  }
}
export default Home
