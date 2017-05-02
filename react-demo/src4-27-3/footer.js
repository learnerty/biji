import React from 'react'

class Footer extends React.Component{
  render(){
    let foop={
      fontSize:'12px',
      lineHeight:'60px',
      color:'#444'
    }
    return (
      <div className="footer">
        <p style={foop}>© 2016 Company, Inc.</p>
      </div>
    )
  }
}
export default Footer
