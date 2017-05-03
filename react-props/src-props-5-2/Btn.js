import React from 'react';
import PropTypes from 'prop-types';

class Btn extends React.Component{
  render(){
    console.log(this.props);
    return (
      <button style={{border:'none',padding:`${this.props.pad}px`,background:this.props.bg,color:'#fff'}}>
        {this.props.title}
      </button>
    )
  }
}

Btn.defaultProps = {
  title:'我是默认的标题',
  bg:'blue',
  pad:21
}
Btn.propTypes = {
  title: PropTypes.string,
  bg:PropTypes.string,
  pad:PropTypes.number
}
export default Btn
