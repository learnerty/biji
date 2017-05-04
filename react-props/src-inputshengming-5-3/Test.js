import React from 'react'

class Test extends React.Component{
  constructor(){
    super();
    console.log('test con')
  }
  componentWillMount(){
    console.log('test will');
  }
  componentDidMount(){
    console.log('test did');
  }
  componentWillReceiveProps(){
    console.log('test======will receive props');
  }
  componentWillUnmount(){
    console.log('test ====== will unmount');
  }
  render(){
    return (
      <div>test下的num:{this.props.num}</div>
    )
  }
}

export default Test
