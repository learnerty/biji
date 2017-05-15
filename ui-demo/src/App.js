import React from 'react';
import Rate from 'antd/lib/rate';
import Calendar from 'antd/lib/calendar';
class App extends React.Component{
  render(){
    return (
      <div>
        <Rate allowHalf defaultValue={0.5} />
        <Calendar/>
      </div>
    )
  }
}
export default App
