import React from 'react'
import {jBtn, jumh, jump} from './fi.js'
class Jumbotron extends React.Component{
  constructor(){
    super();
    this.state={
      cl:true
    }
  }
  handleCl(){
    this.setState({
      cl: !this.state.cl
    })
  }
  render(){
    let juma={
      padding:'14px 24px',
      textDecoration:'none',
      backgroundColor: this.state.cl ? '#5cb85c' : '#4cae4c',
      display:'table',
      margin:'0 auto',
      color:'#fff',
      fontSize:'21px',
      borderRadius:'5px',
      marginTop:'20px',
      marginBottom:'20px'
    }
    return (
      <div className="jumbotron" style={jBtn}>
        <h1 style={jumh}>Jumbotron heading</h1>
        <p style={jump}>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
        <a href='#' style={juma} onMouseEnter={this.handleCl.bind(this)} onMouseLeave={this.handleCl.bind(this)}>Sign up today</a>
      </div>
    )
  }
}
export default Jumbotron
