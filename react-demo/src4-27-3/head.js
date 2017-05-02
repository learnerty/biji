import React from 'react'
import {li_a, bg, f_left, f_right, li_le, hSty} from './fi.js'
class Header extends React.Component{
  render(){
    return (
      <div className="header clearfix">
        <h3 style={{...f_left,...hSty}}>Project name</h3>
        <ul style={f_right}>
          <li style={{...f_left,...li_le}}><a href='#' style={{...li_a,...bg}}>Home</a></li>
          <li style={{...f_left,...li_le}}><a href='#' style={li_a}>About</a></li>
          <li style={{...f_left,...li_le}}><a href='#' style={li_a}>Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Header
