import React from "react";

// Importing React Bootstrap Elements
import { Container, Col, Row } from "react-bootstrap";

// Importing Icons
import { IconContext } from "react-icons";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest
} from "react-icons/fa";

//FOOTER COMPONENT
const Footer = props => {
  return (
    <>
      <Container
        className="upper-footer-container"
        style={{ maxWidth: "100%" }}
      >
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
        <Col className="illustration-container">
          <strong>Illustration Here</strong>
        </Col>
      </Container>
      <Container
        className="lower-footer-container"
        style={{ maxWidth: "100%" }}
      >
        <Row className="social-media-container">
          <IconContext.Provider value={{ className: "social-icons" }}>
            <Col sm={1}>
              <FaTwitter />
            </Col>
            <Col sm={1}>
              <FaFacebook />
            </Col>
            <Col sm={1}>
              <FaInstagram />
            </Col>
            <Col sm={1}>
              <FaPinterest />
            </Col>
          </IconContext.Provider>
        </Row>
        <Row sm={12}>
        <span  className="mx-auto">&copy; Copyright 2020. All Rights Reserved</span>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
