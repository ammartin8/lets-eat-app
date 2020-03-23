import React from "react";

// Importing React Bootstrap Elements
import { Container, Col, Row } from "react-bootstrap";

//HEADER COMPONENT
const Footer = (props) => {
    return (
        <Container>
            <p>{props.title}</p>
            <Row>
                <Col>Column 1</Col>
                <Col>Column 2</Col>
                <Col>Column 3</Col>
            </Row>
        </Container>
    )
} 

export default Footer;