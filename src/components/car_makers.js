import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

class CarMakers extends Component {

  render() {
    const carMakers = this.props.route.data;
    return (
      <ListGroup>
        {carMakers.map((maker, index) =>
          <ListGroupItem key={index}>
            <Link to={"/car_makers/" + maker.id}>{maker.name}</Link>
          </ListGroupItem>
        )}        
      </ListGroup>
    );
  }
}

export default CarMakers;
