import React from 'react';
import './index.css'

let arr = [{title:'aaaa',date:'2017年4月29日'},{title:'bbbb',date:'2017年4月29日'},{title:'ccccc',date:'2017年4月29日'},{title:'dddd',date:'2017年4月29日'},{title:'eeee',date:'2017年4月29日'},{title:'ffff',date:'2017年4月29日'},{title:'abcdef',date:'2017年4月29日'}];
let newArr = arr.reverse();;
class Main extends React.Component{
  constructor(){
    super();
    this.state={
      val:''
    }
  }
  list(){
    if(this.state.val===''){
      newArr = arr;
      this.for();
    }else{
      newArr = [];
      arr.forEach(item =>{
        if(item.title.indexOf(this.state.val) !== -1){
          newArr = [...newArr,item]
        }
      })
    }
  }
  getval(val){
    this.setState({val:val})
  }
  for(){
    let num = newArr.length;
    newArr.forEach(item => {
      item.aa = 1;
      item.num = `${num--}`
    })
  }

  render(){
    this.list();
    return (
      <div style={{width:'80vw',margin:'0 auto'}}>
        {
          newArr.map( item=>
            <a key={item.num} className='clearfix' href='#' style={{display:'block',height:'55px',lineHeight:'55px',marginTop:'15px',textDecoration:'none'}}>
              <span style={{display:'block',width:'10vw',textAlign:'center',color:'#fff',background:'#00bcd4',float:'left',fontWeight:'bold',fontSize:'20px'}}>{item.num}</span>
              <span style={{display:'block',border:'1px solid #ccc',width:'70vw',float:'left'}}>
                <sapn style={{marginRight:'5px',marginLeft:'20px',color:'#222'}}>{item.title}</sapn>
                <span style={{color:'#777',fontSize:'12px'}}>{item.date}</span>
              </span>

            </a>
          )
        }
      </div>
    )
  }
}

export default Main
