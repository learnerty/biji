import React from 'react'

class Form extends React.Component{
  constructor(){
    super();
    this.state={
      input:'',
      textarea:'',
      select:'gr',
      radio:'gril',
      checkbox:true
    }
  }
  handleSubmit(e){
    e.preventDefault()
    // e.target.reset()
  }
  handleChange(e){
    console.log(e.target.value);
    this.setState({input:e.target.value})
  }
  textarea(e){
    this.setState({textarea:e.target.value})
  }
  handleSelect(e){
    this.setState({select:e.target.value})
  }
  handleRadio(e){
    this.setState({radio:e.target.value})
    console.log(e.target.value);
  }
  handleCheck(e){
    console.log(e.target.checked);
    this.setState({checkbox:e.target.checked})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input placeholder='name' value={this.state.input} onChange={this.handleChange.bind(this)} name="aa"/>
        <input placeholder='name' defaultValue='gfgds' name="bb"/>
        <textarea value={this.state.textarea} onChange={this.textarea.bind(this)} rows="5" cols="20" name="cc"/>
        <select value={this.state.select} onChange={this.handleSelect.bind(this)}>
          <option value="gr">Gr</option>
          <option value="hr">Hr</option>
          <option value="jr">Jr</option>
        </select>
        <select defaultValue="ww">
          <option value="qq">qq</option>
          <option value="ww">ww</option>
        </select>
        <br/>
        男<input name="goodRadio" type="radio" value="boy" onChange={this.handleRadio.bind(this)}/>
        女<input name="goodRadio" type="radio" value="gril" onChange={this.handleRadio.bind(this)} defaultChecked/>
        <br/>
        同意<input type="checkbox" checked={this.state.checkbox} onChange={this.handleCheck.bind(this)}/>
        <br/>
        <button>提交</button>
      </form>

      // <form action='https://api.github.com' method="POST">
      //   <input name="age"/>
      //   <button>提交</button>
      // </form>
    )
  }
}
export default Form
