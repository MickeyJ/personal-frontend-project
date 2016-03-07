import React from 'react';


export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: this.props.initialCount};
  }
  tick() {
    this.setState({count: this.state.count + 1});
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
      <div>
        Seconds in session: {this.state.count}
      </div>
    );
  }
}
