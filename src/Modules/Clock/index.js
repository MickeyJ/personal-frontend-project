import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.date = new Date();
    this.state = {
      hours: ((this.date.getHours() + 11) % 12 + 1),
      minutes: this.date.getMinutes(),
      seconds: this.date.getSeconds()
    };
  }
  tick() {
    this.date = new Date();
    this.setState({
      hours: ((this.date.getHours() + 11) % 12 + 1),
      minutes: this.date.getMinutes(),
      seconds: this.date.getSeconds()
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
          {this.state.hours}:{this.state.minutes}:{this.state.seconds}
        </span>
      </div>
    );
  }
}
