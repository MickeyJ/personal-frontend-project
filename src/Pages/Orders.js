import React from 'react';

import OrderManager from '../Modules/Orders/index';

export default class Home extends React.Component {
  render(){
    return(
      <div>
        <h3>Recent Orders</h3>
        <OrderManager url='/api/orders' pollInterval={3000} />
      </div>
    )
  }
};