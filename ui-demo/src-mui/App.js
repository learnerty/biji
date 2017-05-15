import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import CheckboxExampleSimple from './CheckboxExampleSimple';
import DatePickerExampleControlled from './DatePickerExampleControlled';

import Translate from 'material-ui/svg-icons/action/g-translate';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
console.log(darkBaseTheme);
let myTheme = {
  palette:{
    primary1Color:red500,
    textColor: '#03A9F4'
  }
}
class App extends React.Component{
  render(){
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme(myTheme)}>
          <div>
            <RaisedButton label="Default" primary={true}/>
            <RaisedButton label="Default" primary={true}/>
            <RaisedButton label="Default" primary={true}/>
            <CheckboxExampleSimple />
            <DatePickerExampleControlled />
            <Translate style={{width:'80px',height:'80px'}}/>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}
export default App
