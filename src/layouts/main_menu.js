import React, { Component } from 'react';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router';


export default class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state={items: this.props.items};
  }
  render() {
    return (
      <Navbar>
        <Nav>
          {this.state.items.map((item, index) =>
            <NavItem key={index}>
              <Link to={"/" + item.replace(' ', '_')} activeStyle={{ color: 'red' }}>{item}</Link>
            </NavItem>
          )}
        </Nav>
      </Navbar>
    );
  }
}
