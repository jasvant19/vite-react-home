import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <>
      <footer
        style={{
          backgroundColor: "rgb(24, 49, 83)",
          borderTop: "4px solid rgb(116, 192, 252)",
        }}
        className="page-footer py-4"
      >
        {/* Footer Navigation */}

        <Container>
          <Navbar className="justify-content-center">
            <Nav>
              <Nav.Link
                title="About"
                href="about"
                style={{
                  fontSize: '0.875rem',
                  color: "#fff"
                }}
              >
                About
              </Nav.Link>
              <Nav.Link
                title="Testimonials"
                href="service"
                style={{
                  fontSize: '0.875rem',
                  color: "#fff"
                }}
              >
                Testimonials
              </Nav.Link>
              <Nav.Link
                title="Download"
                href="download"
                style={{
                  fontSize: '0.875rem',
                  color: "#fff"
                }}
              >
                Download
              </Nav.Link>
              <Nav.Link
                title="Contact us"
                href="contact"
                style={{
                  fontSize: '0.875rem',
                  color: "#fff"
                }}
              >
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>

        {/* Copyright */}

        <div className="text-center text-white" 
          style={{
            fontSize: '0.875rem'
          }}
        >
          &copy; 2025 Copyright :
          <a
            title="Rock technolabs"
            className="text-reset fw-semibold ms-1"
            href="#"
          >
            Rock technolabs
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
