import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function RouterLink({ to, ...props }) {
  return <Link to={to} {...props} />;
}

export function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={props => <RouterLink to="/" {...props} />}>
        Brand Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={props => <RouterLink to="/protected-page" {...props} />}
          >
            Page1
          </Nav.Link>
          <Nav.Link
            as={props => <RouterLink to="/another-protected-page" {...props} />}
          >
            Page2
          </Nav.Link>
          <Nav.Link as={props => <RouterLink to="/contact" {...props} />}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export function UnauthenticatedHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={props => <RouterLink to="/" {...props} />}>
        Brand Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={props => <RouterLink to="/contact" {...props} />}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
