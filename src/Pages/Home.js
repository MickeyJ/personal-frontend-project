import React from 'react';

import OrderManager from '../Modules/Orders/index';

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <h3>Can I take ya ooorda?</h3>
        <OrderManager url='/api/orders' pollInterval={3000} />
      </div>
    )
  }
};