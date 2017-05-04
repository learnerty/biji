import React from 'react';

class MForm extends React.Component{
  constructor(){
    super();
    this.state={
      text:'',
      textarea:'',
      select:'hr',
      radio:'gril',
      checkbox:true
    }
  }
  handleSubmit(e){
    e.preventDefault();
    let obj = {
      text: this.state.text,
      textarea: this.state.textarea,
      select: this.state.select,
      radio: this.state.select,
      checkbox: this.state.checkbox
    }
    console.log(obj);
  }
  handleInput(e){
    let target = e.target;
    console.log(target.name);
    let value = target.name==='checkbox' ? target.checked : target.value
    console.log(value);
    this.setState({
      [target.name] : value
    })
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input value={this.state.input} onChange={this.handleInput.bind(this)} name="text"/>
        <textarea value={this.state.textarea} onChange={this.handleInput.bind(this)} rows="5" cols="20" name="textarea"/>
        <select value={this.state.select} onChange={this.handleInput.bind(this)} name="select">
          <option value="gr">Gr</option>
          <option value="hr">Hr</option>
          <option value="jr">Jr</option>
        </select>
        <br/>
        同意<input type="checkbox" checked={this.state.checkbox} onChange={this.handleInput.bind(this)} name="checkbox"/>
        <br/>
        男<input name="goodRadio" type="radio" value="boy" onChange={this.handleInput.bind(this)}/>
        女<input name="goodRadio" type="radio" value="gril" onChange={this.handleInput.bind(this)} defaultChecked/>
        <br/>
        <button>提交</button>
      </form>
    )
  }
}

export default MForm
