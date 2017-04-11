import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class CarMakerDetails extends Component {
  render() {

    const carMakers = this.props.route.data;
    const carmaker = carMakers.find(x => x.id == this.props.params.id);
    
    console.log(carmaker);

    const carmakerNode = (
      <Jumbotron>
        <h3>Hello, world!</h3>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      </Jumbotron>);
    return (carmakerNode);
  }
}


export default CarMakerDetails;
