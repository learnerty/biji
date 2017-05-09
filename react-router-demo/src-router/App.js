import React from 'react';
import {HashRouter, BrowserRouter as Router, Route, Link, Redirect, Switch, NavLink} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Work1 from './components/Work1';
import './main.css';

const Work = (props)=>{
  console.log(props);
  return (
    <div>
      我是work
    </div>
  )
}

let New = ()=>{return (<div>我是新的页面，是old的改版</div>)}
let NotFound = ()=>{return (<div>我是404页面<Link to='/'>返回首页</Link></div>)}

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      admin:false
    }
  }
  render(){
    return (
      <HashRouter>
        <div>
          <h1>欢迎</h1>
          <NavLink exact to='/'>首页</NavLink><br/>
          <NavLink to='/about'>about</NavLink><br/>
          <NavLink to='/work'>work</NavLink><br/>
          <NavLink to='/work1/work1'>work1</NavLink><br/>
          <NavLink to="/old">old重定new</NavLink><br/>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' render={props => this.state.admin ? <About {...props}/> : <Redirect to='/'/>}/>
            <Route path='/work' component={Work} />
            <Route path='/work1/:work1' component={Work1} />
            <Route path='/new' component={New} />
            <Redirect from='/old' to='/new'/>
            <Route path='/404' component={NotFound} />
            <Redirect from='*' to='/404'/>
          </Switch>
          <p>版权所有</p>
        </div>
      </HashRouter>
    )
  }
}
export default App
