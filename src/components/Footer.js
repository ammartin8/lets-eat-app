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
          <ul className="p-0 footer-city-list">
            <strong>{props.cityTitle}</strong>
            <li>
              <a
                href="#main-header"
                onClick={() => {
                  props.handleRestaurantListUpdate(280);
                }}
              >
                New York
              </a>
            </li>
            <li>
              <a
                href="#main-header"
                onClick={() => {
                  props.handleRestaurantListUpdate(306);
                }}
              >
                San Francisco
              </a>
            </li>
            <li>
              <a
                href="#main-header"
                onClick={() => {
                  props.handleRestaurantListUpdate(291);
                }}
              >
                Miami
              </a>
            </li>
            <li>
              <a
                href="#main-header"
                onClick={() => {
                  props.handleRestaurantListUpdate(288);
                }}
              >
                Atlanta
              </a>
            </li>
            <li>
              <a
                href="#main-header"
                onClick={() => {
                  props.handleRestaurantListUpdate(61);
                }}
              >
                London
              </a>
            </li>
            <li>
              <a
                href="#main-header"
                onClick={() => {
                  props.handleRestaurantListUpdate(281);
                }}
              >
                Los Angeles
              </a>
            </li>
            <li>
              <a
                href="#main-header"
                onClick={() => {
                  props.handleRestaurantListUpdate(52);
                }}
              >
                Singapore
              </a>
            </li>
          </ul>
        </Col>
        <Col
          className="cuisine-container d-flex"
          style={{ flexDirection: "column" }}
          xs={5}
        >
          <ul className="p-0 footer-city-list">
            <strong>{props.cuisineTitle}</strong>
            <li><a href="#main-header" onClick={()=> {props.handleCuisineIdUpdate(152)}}>African</a></li>
            <li><a href="#main-header" onClick={()=> {props.handleCuisineIdUpdate(3)}}>Asian</a></li>
            <li><a href="#main-header" onClick={()=> {props.handleCuisineIdUpdate(1)}}>American</a></li>
            <li><a href="#main-header" onClick={()=> {props.handleCuisineIdUpdate(73)}}>Mexican</a></li>
            <li><a href="#main-header" onClick={()=> {props.handleCuisineIdUpdate(55)}}>Italian</a></li>
            <li><a href="#main-header" onClick={()=> {props.handleCuisineIdUpdate(70)}}>Mediterranean</a></li>
            <li><a href="#main-header" onClick={()=> {props.handleCuisineIdUpdate(308)}}>Vegetarian</a></li>
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
            &copy; Copyright 2020 | All Rights Reserved
          </span>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
