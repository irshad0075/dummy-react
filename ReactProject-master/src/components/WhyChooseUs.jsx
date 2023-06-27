import React from "react";
import "../styles/Why-choose-us.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import imageslide from "../slide-2.png";

const WhyChooseUs = () => {
  return (
    <section className="join-us">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="join-us-img">
            <img src={imageslide} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title join-us-title">
              Do You Want to Earn With Us? So Don't Be Late
            </h2>
            <Link to="/login">
              <button className="btn join-us-btn mt-4">
               Join Us
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
