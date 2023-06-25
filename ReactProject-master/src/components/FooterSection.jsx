import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaTwitter, FaFacebookSquare, FaInstagram, FaSkype, FaLinkedinIn } from 'react-icons/fa';

function FooterSection() {
  return (
    <>
  <Card className="text-center text-white pt-5 pb-5 border-0" style={{ overflow: "hidden", backgroundColor: '#6e0211' }}>
  <Card.Title className="card-title p-4">IRFAH</Card.Title>
  <Card.Text className="card-text">Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</Card.Text>
  <Container className="mt-4 pb-4">
    <FaTwitter className="fa-xl m-1" />
    <FaFacebookSquare className="fa-xl m-1" />
    <FaInstagram className="fa-xl m-1" />
    <FaSkype className="fa-xl m-1" />
    <FaLinkedinIn className="fa-xl m-1" />
  </Container>
  <Row>
    <Col><small>© Copyright Bocor. All Rights Reserved</small></Col>
  </Row>
</Card>

    </>
  )
}

export default FooterSection