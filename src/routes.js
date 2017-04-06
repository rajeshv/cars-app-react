import React from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';

import MainLayout from './layouts/main_layout';
import Carmakers from './components/car_makers';
import Home, {About} from './components/sub-components';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/car_makers" component={Carmakers}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
);