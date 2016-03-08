import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.state = {
      AMPM: this.getAMPM(),
      hours: ((this.date.getHours() + 11) % 12 + 1),
      minutes: this.addZero(this.date.getMinutes()),
      seconds: this.addZero(this.date.getSeconds())
    };
  }
  addZero(value){
    if(value < 10)
      return '0'+ value;
    else
      return value
  }
  getAMPM(){
    if(this.date.getHours > 12)
      return 'AM';
    else
      return "PM";
  }
  tick() {
    this.date = new Date();
    this.setState({
      AMPM: this.getAMPM(),
      hours: ((this.date.getHours() + 11) % 12 + 1),
      minutes: this.addZero(this.date.getMinutes()),
      seconds: this.addZero(this.date.getSeconds())
    });
  }
  componentDidMount(){
    const intervalId = setInterval(this.tick.bind(this), 1000);
    this.setState({intervalId});
  }
  componentWillUnmount(){
    clearInterval(this.state.intervalId)
  }
  render() {
    return (
      <div className="main-clock">
        <span>
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}-{this.state.AMPM}
        </span>
      </div>
    );
  }
}
