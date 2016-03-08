import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout  from "./../Components/Layout"
import OrdersPage from "./../Pages/Orders"
import InventoryPage from "./../Pages/Inventory"
import SettingsPage from "./../Pages/Settings"

const app = document.getElementById('app');

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={OrdersPage}> </IndexRoute>
    <Route path="inventory" component={InventoryPage}> </Route>
    <Route path="settings" component={SettingsPage}> </Route>
  </Route>
</Router>, app);