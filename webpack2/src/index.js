import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import './main.less';
import img from './1.jpg';
let a = <div className='box'><p>aaaa</p><img src={img}/></div>

ReactDOM.render(a,document.querySelector('#root'))
