import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class CarMakers extends Component {

  render() {
    const carMakers = require('./../../car_makers.json');
    return (
      <ListGroup>
        {carMakers.map((maker, index) =>
          <ListGroupItem key={index}>
            {maker.make_display}
          </ListGroupItem>
        )}        
      </ListGroup>
    );
  }
}

export default CarMakers;
