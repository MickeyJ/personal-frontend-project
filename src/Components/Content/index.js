import React from 'react';
import Clock from '../../Modules/Clock/index';

export default class Content extends React.Component {
  render(){
    const clearBoth = { clear: "both" };
    return(
      <main style={clearBoth}>
        <Clock initialCount={0}/>
        {this.props.children}
      </main>
    )
  }
}