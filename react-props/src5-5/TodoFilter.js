import React from 'react';

class TodoFilter extends React.Component{
  render(){
    let btns = ['ALL','ACTIVE','COMPLETED'];
    return (
      <div>
        分类:
        {
          btns.map((item,index)=>
          <button key={index} className={`btn ${this.props.color===item ? 'btn-primary' : 'btn-default'}`} onClick={()=>this.props.select(item)}>{item}</button>
        )
        }
      </div>
    )
  }
}
export default TodoFilter
