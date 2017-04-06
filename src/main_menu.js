import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

export class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state={items: this.props.items};
  }
  render() {
    return (
      <Navbar>
        <Nav>
        {this.state.items.map((item, index) =>
          <NavItem key={index} className="focused">
            <Link to={"/" + this.props.name} activeStyle={{ color: 'red' }}>{this.props.name}</Link>
          </NavItem>
         )}
        </Nav>
      </Navbar>
    );
  }
}
