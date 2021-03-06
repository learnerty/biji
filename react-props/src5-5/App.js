import React from 'react';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      input: '',
      data: [],
      filter:'ALL'
    }
  }
  componentWillMount(){
    if (!localStorage.todos) {
      localStorage.todos = JSON.stringify([])
      console.log(localStorage.todos);
    }
    this.setState({data:JSON.parse(localStorage.todos)})
  }
  handleSubmit(e){
    e.preventDefault();
    let value = this.state.input.trim();
    if(value){
      this.setState({
        data:[...this.state.data,{text:value,completed:false,id:Date.now()}],
      })
      localStorage.todos = JSON.stringify([...this.state.data,{text:value,completed:false,id:Date.now()}])
    }else{
      alert('不能输入空内容')
    }
    this.input.focus();
    this.setState({input:''})
  }
  handleCompleted(id){
    let index = this.state.data.findIndex(item=>item.id === id);
    let newData = this.state.data;
    newData[index].completed = !newData[index].completed;
    this.setState({data:newData})
    localStorage.todos = JSON.stringify(newData)
  }
  handleRemove(id){
    let r = confirm('是否确认删除?');
    if(r){
      let newData = this.state.data;
      let index = newData.findIndex(item=>item.id === id);
      newData.splice(index,1);
      this.setState({data:newData})
      localStorage.todos = JSON.stringify(newData)
    }
  }
  handleFliter(name){
    this.setState({filter:name})
  }
  render(){
    let showData = this.state.filter === 'ALL' ? this.state.data : this.state.filter === 'ACTIVE' ? this.state.data.filter(item=>!item.completed) : this.state.data.filter(item=>item.completed);
    return (
      <div className='container'>
        <h1 className='text-center'>TODO</h1>
        <form className="form-inline text-center" onSubmit={this.handleSubmit.bind(this)}>
          <input className="form-control" type='text' value={this.state.input} onChange={e => this.setState({input:e.target.value})} ref={input=>this.input=input}/>
          <button type='submit' className="btn btn-info">ADD {this.state.data.length}</button>
        </form>
        <TodoList data={showData} completed={this.handleCompleted.bind(this)} remove={this.handleRemove.bind(this)}/>
        <TodoFilter select={this.handleFliter.bind(this)} color={this.state.filter}/>
      </div>
    )
  }
}

export default App
