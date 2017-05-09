import React from 'react';
import { withRouter } from 'react-router';

class Test extends React.Component{
  render(){
    console.log('test=======',this.props);
    return (
      <div>
        <button onClick={()=>this.props.history.push('/work')}>test 去work</button>
      </div>
    )
  }
}
export default withRouter(Test)
