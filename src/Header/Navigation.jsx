import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <header className="page-header bg-white sticky-top border-bottom">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/" title="Your Company Home">Your Company</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <Nav className="me-auto gap-4">
              <Nav.Link title="Featured" href="/">Home</Nav.Link>
              <Nav.Link title="About" href="about">About</Nav.Link>
              <Nav.Link title="Testimonials" href="service">Testimonials</Nav.Link>
              <Nav.Link title="Download" href="download">Download</Nav.Link>
              <Nav.Link title="Contact us" href="contact">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
