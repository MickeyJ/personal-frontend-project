import React from 'react';

import InventoryManager from '../Modules/Inventory/index';

export default class InventoryPage extends React.Component{
  render(){
    return(
      <div>
        <h3>Inventory</h3>
        <InventoryManager />
      </div>
    )
  }
};
