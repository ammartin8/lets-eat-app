import React from "react";
import { Modal, Button, Row, Col, Image } from "react-bootstrap";

function RestaurantDetails(props) {
  return (
    <Modal.Dialog className="w-100 mx-0 flex-fill" size="lg">
      <Modal.Header>
        <Col>
          <Row xs={12} className="mx-auto justify-content-center">
            {props.featured_image !== "" ? (
              <Image
                src={props.restaurantObj.featured_image}
                fluid
                rounded
                className="mx-0"
                style={{
                  width: "auto",
                  maxHeight: "100%",
                  maxheight: "100%",
                  flexShrink: "0",
                }}
                alt=""
              />
            ) : (
              <>
                <hr />
                <p className="h3 text-center">Image Coming Soon</p>
              </>
            )}
          </Row>
        </Col>
      </Modal.Header>

      <Modal.Body>
        <Row className="mx-0">
          <Col className="px-2">
            <Row className="mx-0">
              <Modal.Title>{props.restaurantObj.name}</Modal.Title>
            </Row>
            <Row className="mx-0">
              <p>
                <strong>{"Address: "}</strong>
                {props.restaurantObj.location.address}
              </p>
            </Row>
            <Row className="mx-0">
              <p>
                <strong>{"Phone Number: "}</strong>
                {props.restaurantObj.phone_numbers}
              </p>
            </Row>
            <Row className="mx-0">
              <p>
                <strong>{"Hours: "}</strong>
                {props.restaurantObj.timings}
              </p>
            </Row>
          </Col>
          <Col className="px-2">
            <Row className="mx-0">
              <p>
                <strong>{"Rating: "}</strong>
              </p>
            </Row>
            <Row className="mx-0">
              <p>
                <strong>{"Cost Range: "}</strong>
              </p>
            </Row>
            <Row className="mx-0">
              <p>
                <strong>{"Currency: "}</strong>
              </p>{" "}
              {props.restaurantObj.currency}
            </Row>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default RestaurantDetails;
