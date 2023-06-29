import React from "react";
import { Container, Row, Col } from "reactstrap";
// import "../styles/about-section.css";
import imageslide from "../about.png";

const AboutSection = ({ AboutSec }) => {
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about-section-content" style={{ color: "#e1997e" }}>
              <h4 className="section-subtitle">About Us</h4>
              <h2 className="section-title">Welcome to Our Shopping Store</h2>
              <p className="section-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus, ut vitae officia, nihil reprehenderit necessitatibus
                ipsum consequuntur, ratione voluptatibus amet culpa? Ipsum
                distinctio delectus, voluptate hic autem magnam dicta
                dolore?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem officia, facilis repellendus quod, laborum iure enim
                dicta doloremque magni vitae aut odit quisquam blanditiis
                laudantium consequatur libero expedita voluptates soluta.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about-image">
              <img src={imageslide} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
