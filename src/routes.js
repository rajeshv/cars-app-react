import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import MainLayout from './layouts/main_layout';
import Carmakers from './components/cars/car_makers';
import CarmakerDetail from './components/cars/car_maker_details';
import CarDetails from './components/cars/car_details';
import Home, {About} from './components/sub-components';

var carMakers = require('./../../car_makers.json')["makes"];

export default (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="car_makers">
      <IndexRoute component={Carmakers} data={carMakers} />
      	<Route path=":id" component={CarmakerDetail} data={carMakers}/>
      	<Route path=":id/:car_id" component={CarDetails} data={carMakers}/>
      </Route>     
      
      <Route path="about" component={About}/>
    </Route>
  </Router>
);