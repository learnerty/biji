import React from 'react';

class ToduList extends React.Component{
  handleChange(id){
    this.props.completed(id);
  }
  render(){
    return (
      <ul style={{listStyle:'none'}}>
        {
          this.props.data.map( item =>
            <li key={item.id}>
              <input type="checkbox" className="pull-left" checked={item.completed} onChange={this.handleChange.bind(this,item.id)}/>
              <span style={{textDecoration:item.completed ? 'line-through' : 'none'}}>{item.text}</span>
              <span className="glyphicon glyphicon-remove-circle pull-right" aria-hidden="true" onClick={()=>this.props.remove(item.id)}></span>
            </li>
          )
        }
      </ul>
    )
  }
}
export default ToduList
