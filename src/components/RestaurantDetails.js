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
          <Col className="px-2" sm={6}>
            <Row className="mx-0">
              <Modal.Title>{props.restaurantObj.name}</Modal.Title>
            </Row>
            <Row className="mx-0">
              <p>{props.restaurantObj.location.city}</p>
            </Row>
            <Row className="mx-0">
              <p>
                <strong>Address:</strong> {props.restaurantObj.location.address}
              </p>
            </Row>
            <Row className="mx-0">
              <p>
                <strong>Phone Number:</strong>{" "}
                {props.restaurantObj.phone_numbers}
              </p>
            </Row>
            <Row className="mx-0">
              <p>
                <strong>Hours:</strong> {props.restaurantObj.timings}
              </p>
            </Row>
            <Row className="mx-0">
              <p>
                <strong>Highlights:</strong>
                {props.restaurantObj.highlights.map((features, index) => {
                  return (
                    <>
                      <li key={index}>{features}</li>
                    </>
                  );
                })}
              </p>
            </Row>
          </Col>
          <Col className="px-2" sm={6}>
            <Row className="mx-0">
              <p>
                <strong>Rating:</strong>{" "}
                {props.restaurantObj.user_rating.aggregate_rating} (
                {props.restaurantObj.all_reviews_count})
              </p>
            </Row>
            <Row className="mx-0">
              <div>
                <strong>Average Cost for Two:</strong>{" "}
                {props.restaurantObj.currency === "$" ? (
                  <p>
                    {props.restaurantObj.currency}{" "}
                    {props.restaurantObj.average_cost_for_two}
                  </p>
                ) : (
                  <p>
                    {props.restaurantObj.average_cost_for_two}{" "}
                    {props.restaurantObj.currency}
                  </p>
                )}
              </div>
            </Row>
            <Row className="mx-0">
              <p>
                <strong>Currency:</strong> {props.restaurantObj.currency}
              </p>
            </Row>

            <Row className="mx-0">
              <p>
                <strong>Cuisines:</strong> {props.restaurantObj.cuisines}
              </p>
            </Row>
            <Row className="mx-0">
              <p>
                <strong>
                  <a
                    href={props.restaurantObj.menu_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "tomato" }}
                  >
                    See Menu
                  </a>
                </strong>
              </p>
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
