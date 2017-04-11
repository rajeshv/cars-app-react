import React, { Component } from 'react';
import { Jumbotron, ListGroup, ListGroupItem } from 'react-bootstrap';

class CarMakerDetails extends Component {
  render() {

    const carMakers = this.props.route.data;
    const carmaker = carMakers.find(x => x.id == this.props.params.id);
    
    console.log(carmaker);

    const carmakerNode = (
      <Jumbotron>
        <h4>{carmaker.name}</h4>
        <h4>Models:</h4>
        <ListGroup>
            {carmaker.models.map((model, index)=>
              <ListGroupItem key={index}>
                {model.name}
              </ListGroupItem>
            )}
        </ListGroup>
      </Jumbotron>);
    return (carmakerNode);
  }
}


export default CarMakerDetails;
