import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import MainBannerimage from "../assets/banner-mobile.jpg";

export default function HomeBanner() {
  return (
    <section className="bg-body-tertiary border-bottom">
      <Container className="pt-5">
        <Row>
          <Col md={6} className="mt-5">
            <h1 className="mb-4">
              Tagline With Your Unique Selling Proposition
            </h1>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quam velit, vulputate eu pharetra nec, mattis ac neque.
            </p>
            <p className="mb-4">
              Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.
            </p>
            <button
              type="button"
              aria-label="Get started"
              className="btn-sm text-uppercase btn btn-dark me-2"
            >
              Get started
            </button>
            <button
              type="button"
              className="btn btn-outline-dark btn-sm text-uppercase"
              aria-label="Learn more"
            >
              Learn more
            </button>
          </Col>
          <Col md={6} className="align-content-center text-end overflow-hidden">
            <img
              src={MainBannerimage}
              alt="Banner image"
              style={{ marginBottom: "-50%" }}
              loading="lazy"
              width={350}
              height={698}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
