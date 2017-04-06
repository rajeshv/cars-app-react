import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

class CarMakers extends Component {

  render() {
    const carMakers = JSON.parse(require('./../../car_makers.json'));
    const names = carMakers.map((i) => i.make);
    return (
      <div className="Main">
        <div className="header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default CarMakers;
