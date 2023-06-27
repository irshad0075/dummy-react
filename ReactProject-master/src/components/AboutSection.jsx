import React from "react";
import { Container, Row, Col } from "reactstrap";
// import "../styles/about-section.css";
import imageslide from "../slide-3.png";

const AboutSection = ({ AboutSec }) => {
  return (
    <section className="AbtSec">
      <Container>
        <Row>
          <Col lg="5" md="5">
            <div className="about__img">
              <img src={imageslide} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="5" md="5">
            <div className="AbtSec-content text-white">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to our Shopping Store</h2>
              <p className="section__description">
                We are dedicated to providing the best shopping experience for our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat eros nec enim consectetur, in hendrerit nunc sagittis.
              </p>

              <div className="AbtSec-item">
                <div className="item-icon">
                  <i className="ri-checkbox-circle-line"></i>
                </div>
                <p className="item-description">Wide Range of Products</p>
              </div>

              <div className="AbtSec-item">
                <div className="item-icon">
                  <i className="ri-checkbox-circle-line"></i>
                </div>
                <p className="item-description">High-Quality Standards</p>
              </div>

              <div className="AbtSec-item">
                <div className="item-icon">
                  <i className="ri-checkbox-circle-line"></i>
                </div>
                <p className="item-description">Secure and Fast Delivery</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
