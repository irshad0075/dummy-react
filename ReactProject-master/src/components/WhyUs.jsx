import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import imageslide from "../slide-1.png";
const WhyUs = () => {
    return (
      <section style={{ background: 'linear-gradient(180deg, #f2f6fa 0%, #fff 100%)' }}>
        <Container id="about" className="pb-5">
          <Row className="d-flex pt-5">
            <Col md={6}>
            <img src={imageslide} alt="" className="w-90" />
            </Col>
            <Col md={6}>
              <h2 style={{ color: '#203e59' }} data-aos="fade-zoom-in">Why You Choose Us?</h2>
              <p data-aos="fade-zoom-in">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p>
  
              <Row>
                <Col sm={6} mb={3} mb-sm={0} data-aos="fade-up">
                  <Card>
                    <Card.Body>
                      <div className="card-text">
                        <h5 style={{ color: '#203e59' }}>Corporis voluptates sit</h5>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} mb={3} mb-sm={0} data-aos="fade-up">
                  <Card>
                    <Card.Body>
                      <div className="card-text">
                        <h5 style={{ color: '#203e59' }}>Corporis voluptates sit</h5>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col sm={6} mb={3} mb-sm={0} data-aos="fade-up" data-aos-duration="2500">
                  <Card>
                    <Card.Body>
                      <div className="card-text">
                        <h5 style={{ color: '#203e59' }}>Corporis voluptates sit</h5>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col sm={6} mb={3} mb-sm={0} data-aos="fade-up" data-aos-duration="2500">
                  <Card>
                    <Card.Body>
                      <div className="card-text">
                        <h5 style={{ color: '#203e59' }}>Corporis voluptates sit</h5>
                        <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    );
  };
  export default WhyUs;
  