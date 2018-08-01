import React, {Component} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, NavItem} from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Students</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/">
              Home
            </NavItem>
            <NavItem eventKey={2} href="/create">
              Create Student
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
