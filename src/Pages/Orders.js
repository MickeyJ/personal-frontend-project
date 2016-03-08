import React from 'react';

import OrderManager from '../Modules/Orders/index';

export default class OrdersPage extends React.Component {
  render(){
    return(
      <div>
        <h3>Recent Orders -- Add Order</h3>
        <OrderManager url='/api/orders' pollInterval={3000} />
      </div>
    )
  }
};