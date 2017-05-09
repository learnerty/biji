import React from 'react';
import {Route, Link} from 'react-router-dom';

const Wo = ()=><h1>我</h1>
const Laoshi = ()=><h1>老师</h1>

class About extends React.Component{
  render(props){
    console.log(this.props);
    let {match} = this.props;
    return (
      <div>
        About页面<br/>
        <Link to={`${match.url}`}>关于我</Link><br/>
        <Link to={`${match.url}/laoshi`}>关于老师</Link><br/>
        <Route exact path={`${match.url}`} component={Wo}/>
        <Route path={`${match.url}/laoshi`} component={Laoshi}/>
      </div>
    )
  }
}
export default About
