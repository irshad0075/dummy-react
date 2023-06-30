import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import '../styles/OurAchievements.css';

const OurAchievements = () => {
  return (
    <section >
      <Container id="about" className="pb-5">
        <Row className="d-flex pt-5">
          <Col md={4} className="d-flex align-items-center justify-content-center">
          
            <img src="https://ads.blogherads.com/postbid/SMPN_HouseAds_160x600_V5.gif"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurAchievements;
