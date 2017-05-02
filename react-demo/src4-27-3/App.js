import React from 'react';
import Header from './head';
import Jum from './jumbotron';
import Mar from './marketing';
import Footer from './footer';
class App extends React.Component{
  render(){
    return (
      <div>
        <Header />
        <Jum />
        <Mar />
        <Footer />
      </div>
    )
  }
}

export default App
