import React, { useState } from "react";

import { Modal, Button, Row } from "react-bootstrap";

function EstablishmentOptions(props) {
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
            props.moreEstablishmentOptions();
          }}
        >
          More Establishments
        </button>
      </li>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton={handleClose}>
          <Modal.Title>List of Restaurant Establishments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="modalList">
            {props.establishmentList.map(establishments => (
              <Row
                className="d-inline modalListItems mx-auto"
                key={establishments.establishment.id}
                altid={establishments.establishment.id}
              >
                <li className="cuisine-item cuisineModalItem">
                  <button
                    className="cuisine-option-button"
                    onClick={() => {
                      props.handleFilterGroup2(establishments.establishment.id);
                      handleClose();
                    }
                    }
                  >
                    {establishments.establishment.name}
                  </button>
                  <button
                    className="cuisine-option-clear"
                    onClick={() => props.handleFilterGroup2("")}
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
              props.moreEstablishmentOptions();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EstablishmentOptions;
