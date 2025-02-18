import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutImage from "../assets/about.jpg";
 
function Aboutsection() {
  return (
    <>
      <section className="about-section">
        <Container className="space-y-default text-center">
          <Row>
            <Col md={4}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height={24}
                className="mb-1"
              >
                <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
              <h2 className="fs-4 fw-semibold my-2 text-uppercase">Feature One</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                quis felis convallis, rhoncus leo id, scelerisque purus. Ut
                auctor gravida nulla.
              </p>
            </Col>
            <Col md={4}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height={24}
                className="mb-1"
              >
                <path d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 64 0 368 0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 64.3-16.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L64 48l0-16z" />
              </svg>
              <h2 className="fs-4 fw-semibold my-2 text-uppercase">Feature Two</h2>
              <p>
                Aliquam vel nibh iaculis, ornare purus sit amet, euismod dui.
                Cras sed tristique neque. Cras ornare dui lorem, vel rhoncus
                elit venenatis sit amet.
              </p>
            </Col>
            <Col md={4}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                height={24}
                className="mb-1"
              >
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
              </svg>
              <h2 className="fs-4 fw-semibold my-2 text-uppercase">Feature Three</h2>
              <p>
                Vestibulum ultricies erat vitae faucibus vulputate. Sed finibus
                ipsum eu nibh volutpat, in congue sapien vehicula condimentum
                ligula vitae.
              </p>
            </Col>
          </Row>
        </Container>

        <div className="border-top py-5" style={{ backgroundColor: "#F9F9F9" }}>
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <h2 className="mb-4">Our Company</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatiis.
                </p>
                <p>
                  Ut auctor gravida nulla. Nam id erat elementum, accumsan dui
                  non, porttitor lorem.
                </p>
                <Button variant="dark" className="btn-sm" aria-label="Click me">
                  Click me
                </Button>
              </Col>
              <Col md={6}>
                <img
                  src={AboutImage}
                  alt="About image"
                  loading="lazy"
                  width={636}
                  height={424}
                  className="rounded"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Aboutsection;
