import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import MainLayout from './layouts/main_layout';
import Carmakers from './components/car_makers';
import CarmakerDetail from './components/car_maker_details';
import Home, {About} from './components/sub-components';

var carMakers = require('./../../car_makers.json')["makes"];

export default (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/car_makers" component={Carmakers} data={carMakers}/>
      <Route path="/car_makers/:id" component={CarmakerDetail} data={carMakers}/>
      
      <Route path="/about" component={About}/>
    </Route>
  </Router>
);