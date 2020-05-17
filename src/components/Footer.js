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
  FaChevronUp,
} from "react-icons/fa";

//FOOTER COMPONENT
const Footer = (props) => {
  return (
    <>
      <Row
        className="upper-footer-container justify-content-center"
        style={{ flexDirection: "row" }}
      >
        <Col
          className="top-cities d-flex"
          style={{ flexDirection: "column" }}
          xs={5}
        >
          <ul className="p-0">
            <li>
              <strong>{props.cityTitle}</strong>
            </li>
            <li>New York</li>
            <li>San Francisco</li>
            <li>Miami</li>
            <li>Amesterdam</li>
            <li>London</li>
            <li>Los Angeles</li>
            <li>Houston</li>
          </ul>
        </Col>
        <Col
          className="cuisine-container d-flex justify-content-center"
          style={{ flexDirection: "column" }}
          xs={5}
        >
          <ul className="p-0">
            <li>
              <strong>{props.cuisineTitle}</strong>
            </li>
            <li>African</li>
            <li>Asian</li>
            <li>American</li>
            <li>Mexican</li>
            <li>Italian</li>
            <li>Mediterranean</li>
            <li>Vegetarian</li>
          </ul>
        </Col>

        <Col xs={2} className="d-flex justify-content-end">
          <div className="pr-3">
            <a href="#main-header">
              <FaChevronUp className="chevron-top-page" />
            </a>
          </div>
        </Col>
      </Row>

      <Container
        className="lower-footer-container"
        style={{ maxWidth: "100%" }}
      >
        <Row
          className="social-media-container"
          style={{ flexDirection: "row" }}
        >
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
