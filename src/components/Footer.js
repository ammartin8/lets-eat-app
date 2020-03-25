import React from "react";

// Importing React Bootstrap Elements
import { Container, Col, Row } from "react-bootstrap";

//HEADER COMPONENT
const Footer = props => {
  return (
    <>
      <Container className="upper-footer-container" style={{ maxWidth: "100%" }}>
        <Col className="top-cities">
          <Row>
            <strong>{props.title}</strong>
          </Row>
          <Row>New York</Row>
          <Row>San Francisco</Row>
          <Row>Miami</Row>
          <Row>Amesterdam</Row>
          <Row>London</Row>
          <Row>Tokyo</Row>
          <Row>Addis Abba</Row>
        </Col>
        <Col className="cuisine-container">
          <Row>
            <strong>Cuisines</strong>
          </Row>
          <Row>African</Row>
          <Row>Chinese</Row>
          <Row>American</Row>
          <Row>Japanese</Row>
          <Row>Italian</Row>
          <Row>Mexican</Row>
        </Col>
        <Col className="illustration-container"><strong>Illustration Here</strong></Col>
      </Container>
      <Container className="lower-footer-container" style={{ maxWidth: "100%" }}>
        <Row className="social-media-container">
          <Col>social media 1</Col>
          <Col>social media 2</Col>
          <Col>social media 3</Col>
          <Col>social media 4</Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
