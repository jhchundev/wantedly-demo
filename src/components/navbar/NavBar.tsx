import React from 'react';
import { Navbar, Container, Nav, Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="white" variant="white" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Image
            src="https://wantedly-assets.wantedly.com/static/logo/mark-color-LightBG.svg"
            alt="Wantedly"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Wantedly
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
          <Button variant="primary">Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
