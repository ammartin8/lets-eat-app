import React, { useState } from "react";

import { Modal, Button, Row } from "react-bootstrap";

function CuisineOptions(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <li className="cuisine-item">
        <button
          className="cuisine-more-button"
          onClick={() => {
            handleShow();
            props.moreCuisineOptions();
          }}
        >
          More Cuisines
        </button>
      </li>
      <Modal size="lg" show={show} onHide={handleClose} onExited={props.moreCuisineOptions}>
        <Modal.Header closeButton={handleClose}>
          <Modal.Title>List of Cuisines</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="modalList">
            {props.cuisineList.map((cuisine) => (
              <Row
                className="d-inline modalListItems mx-auto"
                key={cuisine.cuisine.cuisine_id}
                altid={cuisine.cuisine.cuisine_id}
              >
                <li className="cuisine-item cuisineModalItem">
                  <button
                    className={`cuisine-option-button ${
                      props.selectedCuisineId ===
                      cuisine.cuisine.cuisine_id
                        ? "activeSelection"
                        : ""
                    }`}
                    onClick={() => {
                      props.togglefilterHighlight(
                        cuisine.cuisine.cuisine_id
                      );
                      props.handleFilterGroup1(
                        cuisine.cuisine.cuisine_id
                      );
                    }}
                  >
                    {cuisine.cuisine.cuisine_name}
                  </button>
                  <button
                    className={`cuisine-option-clear ${
                      props.selectedCuisineId ===
                      cuisine.cuisine.cuisine_id
                        ? "activeSelection"
                        : ""
                    }`}
                    onClick={() => {
                      props.handleFilterGroup1("");
                    }}
                  >
                    X
                  </button>
                </li>
              </Row>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
              props.moreCuisineOptions();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CuisineOptions;
