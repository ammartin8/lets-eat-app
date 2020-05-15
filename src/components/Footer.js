import React from "react";

// Importing React Bootstrap Elements
import { Container, Col, Row } from "react-bootstrap";

// Importing Icons
import { IconContext } from "react-icons";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaChevronUp
} from "react-icons/fa";

//FOOTER COMPONENT
const Footer = props => {
  return (
    <>
      <Container
        className="upper-footer-container"
        style={{ maxWidth: "100%" }}
      >
        <Col className="top-cities" sm={3}>
          <Row>
            <strong>{props.title}</strong>
          </Row>
          <ul>
          <li>New York</li>
          <li>San Francisco</li>
          <li>Miami</li>
          <li>Amesterdam</li>
          <li>London</li>
          <li>Los Angeles</li>
          <li>Houston</li>
          </ul>
        </Col>
        <Col className="cuisine-container" sm={3}>
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
        <Col className="illustration-container" sm={3}>
          <strong>Illustration Here</strong>
        </Col>
        <Col sm={1}>
          <a href="#main-header"><FaChevronUp className="chevron-top-page float-right"/></a>
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
          <span className="mx-auto py-3">
            &copy; Copyright 2020. All Rights Reserved
          </span>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
