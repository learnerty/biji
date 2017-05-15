import React from 'react';
import DatePicker from 'material-ui/DatePicker';

export default class DatePickerExampleControlled extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      controlledDate: new Date()
    };
  }

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  };

  render() {
    return (
      <DatePicker
        hintText="Controlled Date Input"
        value={this.state.controlledDate}
        onChange={this.handleChange}
        okLabel={'确认'}
        cancelLabel={'取消'}
        firstDayOfWeek={1}
        mode={'landscape'}
      />
    );
  }
}
