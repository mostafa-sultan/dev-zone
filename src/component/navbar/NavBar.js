import React, { Component } from "react";
import "./NavBar.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar
        
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
          
        >
          <Navbar.Brand href="#home">Dev Zone</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Exploer</Nav.Link>
              <NavDropdown title="Program Cheat Cheet" id="collasible-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  C++
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Javasctipt
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Python
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Login</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Regestration
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
