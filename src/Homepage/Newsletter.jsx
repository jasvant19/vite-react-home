import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Newsletter = () => {
  return (
    <>
      <section className="py-5">
      <form action="" method="post">
        <Container className="text-center">
          <h2 className="mb-3">Get In Touch</h2>
          <p
            className="mx-auto"
            style={{
              maxWidth: "500px",
            }}
          >
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus.
          </p>
          
            <Row className="w-50 mx-auto">
              <Col md={5}>
                <input
                  className="newsletter-firstname form-control"
                  type="text"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  required
                />
              </Col>
              <Col md={5}>
                <input
                  className="newsletter-email form-control"
                  type="email"
                  placeholder="Enter email"
                  aria-label="Enter email"
                  required
                />
              </Col>
              <Col md={2}>
                <button className="newsletter-submit btn btn-secondary" aria-label="Subscribe" type="button">
                  <i className="fa fa-paper-plane"></i> Subscribe
                </button>
              </Col>
            </Row>          
        </Container>
        </form>
      </section>
    </>
  );
};

export default Newsletter;
