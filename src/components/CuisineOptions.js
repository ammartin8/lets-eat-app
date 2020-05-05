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
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>List of Cuisines</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="">
            {props.cuisineList.map(cuisine => (
              <Row className="d-inline modalListItems">
                  <li
                    key={cuisine.cuisine.cuisine_id}
                    altid={cuisine.cuisine.cuisine_id}
                    className="cuisine-item cuisineModalItem"
                  >
                    <button
                      className="cuisine-option-button"
                      onClick={() =>
                        props.handleFilterGroup1(cuisine.cuisine.cuisine_id)
                      }
                    >
                      {cuisine.cuisine.cuisine_name}
                    </button>
                    <button
                      className="cuisine-option-clear"
                      onClick={() => props.handleFilterGroup1("")}
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
              props.closeCuisineOptions();
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
