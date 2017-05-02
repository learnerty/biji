import React from 'react'
import {jump} from './fi.js'
class Marketing extends React.Component{
  render(){
    let marDiv={
      width:'48%',
      marginLeft:'2%',
      float:'left'
    }
    let marH4={
      fontSize:'18px',
      color:'#333',
      fontWeight:400
    }
    let marp={
      fontSize:'14px'
    }
    let marHg={
      marginTop:'20px'
    }
    return (
      <div className='marketing clearfix'>
        <div style={marDiv}>
          <h4 style={marH4}>Subheading</h4>
          <p style={marp}>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
          <h4 style={{...marH4,...marHg}}>Subheading</h4>
          <p style={marp}>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
          <h4 style={{...marH4,...marHg}}>Subheading</h4>
          <p style={marp}>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </div>
        <div style={marDiv}>
          <h4 style={marH4}>Subheading</h4>
          <p style={marp}>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
          <h4 style={{...marH4,...marHg}}>Subheading</h4>
          <p style={marp}>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>
          <h4 style={{...marH4,...marHg}}>Subheading</h4>
          <p style={marp}>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
        </div>
      </div>
    )
  }
}

export default Marketing
