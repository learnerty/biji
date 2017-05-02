import React from 'react';
import Head from './Head.js';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends React.Component{
  render(){
    return (
      <div>
        <Head />
        <Main />
        <Footer />
      </div>
    )
  }
}
export default App;
