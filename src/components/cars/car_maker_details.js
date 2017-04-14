import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class CarMakerDetails extends Component {
  constructor(props) {
    super(props);

    this.state={carMaker: this.props.route.data.
                find(x => x.id == this.props.params.id),
                years: []};
  }

  render() {

    var carmakerNode = (
      <div>
        <h4>{this.state.carMaker.name}</h4>
        <h4>Models:</h4>
        <ListGroup>
            {this.state.carMaker.models.map((model, index)=>
              <ListGroupItem key={index}>
                <ModelDetails _model={model}/>
              </ListGroupItem>
            )}
        </ListGroup>
      </div>);
    return (carmakerNode);
  }
}

class ModelDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {id: this.props._model.id,
                  name: this.props._model.name,
                  years:[],
                  togglerOn: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    if(!this.state.togglerOn){
      this.setState({years: this.props._model.years});
    }else{
      this.setState({years: []});
    }

    this.setState(prevState => ({
      togglerOn: !prevState.togglerOn
    }));
    
    console.log(this.state.years);
  }

  render(){
    return(
      <p>
        <a href="#" onClick={this.handleClick} className="link">{this.state.name}</a>
          {this.state.years.map((year, i)=>
          <ListGroupItem key={i} >
            {year.year}
          </ListGroupItem>
          )}
      </p>)
  }

}

export default CarMakerDetails;
