import React, { Component } from "react";
import CuisineOptions from "./CuisineOptions";
import EstablishmentOptions from "./EstablishmentOptions";

// React Boostrap Components
import { Row, Accordion, Card, Button, Container } from "react-bootstrap";

class Sidebar extends Component {
  state = {
    cuisineId: "",
    establishmentId: "",
    filter1Clicked: false,
    filter2Clicked: false,
    moreCuisineOptions: false,
    moreEstablishmentOptions: false,
    selectedEstablishmentId: "",
    isEstablishmentSelected: false,
    selectedCuisineId: "",
    isCuisineSelected: false,
  };

  // HELPER FUNCTIONS
  handleFilterGroup1 = (cuisineId) => {
    if (cuisineId !== "" || cuisineId !== undefined) {
      this.setState(
        {
          cuisineId: cuisineId,
          isCuisineSelected: true,
          selectedCuisineId: cuisineId,
        },
        () => {
          this.props.updateCuisineID(this.state.cuisineId);
        }
      );
      this.setState({ filter1Clicked: true });
    } else {
      this.setState({ cuisineId: cuisineId }, () => {
        this.props.updateCuisineID(this.state.cuisineId);
      });
      this.setState({ filter1Clicked: false });
    }
  };

  handleFilterGroup2 = (establishmentId) => {
    if (establishmentId !== "" || establishmentId !== undefined) {
      this.setState(
        {
          establishmentId: establishmentId,
          isEstablishmentSelected: true,
          selectedEstablishmentId: establishmentId,
        },
        () => {
          this.props.updateEstablishmentID(this.state.establishmentId);
        }
      );
      this.setState({ filter2Clicked: true });
    } else {
      this.setState(
        {
          establishmentId: establishmentId,
          isEstablishmentSelected: false,
          selectedEstablishmentId: establishmentId,
        },
        () => {
          this.props.updateEstablishmentID(this.state.establishmentId);
        }
      );
      this.setState({ filter2Clicked: false });
    }
  };

  moreCuisineOptions = () => {
    if (this.state.moreCuisineOptions === false) {
      this.setState({ moreCuisineOptions: !false });
    } else if (this.state.moreCuisineOptions === true) {
      this.setState({ moreCuisineOptions: !true });
    }
  };

  moreEstablishmentOptions = () => {
    if (this.state.moreEstablishmentOptions === false) {
      this.setState({ moreEstablishmentOptions: !false });
    } else if (this.state.moreEstablishmentOptions === true) {
      this.setState({ moreEstablishmentOptions: !true });
    }
  };

  togglefilterHighlight = (filterId) => {
    if (filterId === this.state.establishmentId) {
      this.isEstablishmentSelected = !this.isEstablishmentSelected;
    };  
    if (filterId === this.state.cuisineId) {
      this.isCuisineSelected = !this.isCuisineSelected;
    }
  };

  render() {
    return (
      <>
        <Container
          className="sticky-top pt-4"
          style={{ maxWidth: "280px", minWidth: "190px" }}
        >
          <Container>
            <Row
              className="justify-content-left"
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <p className="filterLabel mx-1 px-auto ">
                <strong>Filters</strong>
              </p>
              <button
                className="reset-options px-auto mx-0"
                onClick={() => {
                  this.selectedCuisineId = 0;
                  this.selectedEstablishmentId = 0;
                  this.handleFilterGroup1("");
                  this.handleFilterGroup2("");
                }}
              >
                Reset All Filters
              </button>
            </Row>
          </Container>

          <Accordion>
            <Card>
              <Card.Header className="filter-card-header d-flex justify-content-center p-1">
                <Accordion.Toggle
                  as={Button}
                  variant=""
                  eventKey="0"
                  className="p-0"
                  style={{ height: "3em", width: "100%" }}
                >
                  <strong style={{ fontSize: ".9em" }}>Popular Cuisines</strong>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="d-flex justify-content-center">
                  <ul className="cuisine-suggestions px-0 mx-auto">
                    {this.props.cuisineList
                      .filter(function (cuisine) {
                        let initialList = cuisine.cuisine.cuisine_id;
                        return (
                          initialList === 1 ||
                          initialList === 3 ||
                          initialList === 193 ||
                          initialList === 177 ||
                          initialList === 18 ||
                          initialList === 83 ||
                          initialList === 182
                        );
                      })
                      .map((cuisine) => (
                        <Row
                          key={cuisine.cuisine.cuisine_id}
                          altid={cuisine.cuisine.cuisine_id}
                          style={{ justifyContent: "center" }}
                        >
                          <li className="cuisine-item">
                            <button
                              className={`cuisine-option-button ${
                                this.selectedCuisineId ===
                                cuisine.cuisine.cuisine_id
                                  ? "activeSelection"
                                  : ""
                              }`}
                              onClick={() => {
                                this.selectedCuisineId =
                                  cuisine.cuisine.cuisine_id;
                                this.togglefilterHighlight(
                                  cuisine.cuisine.cuisine_id
                                );
                                this.handleFilterGroup1(
                                  cuisine.cuisine.cuisine_id
                                );
                              }}
                            >
                              {cuisine.cuisine.cuisine_name}
                            </button>
                            <button
                              className={`cuisine-option-clear ${
                                this.selectedCuisineId ===
                                cuisine.cuisine.cuisine_id
                                  ? "activeSelection"
                                  : ""
                              }`}
                              onClick={() => {
                                this.selectedCuisineId = 0;
                                this.handleFilterGroup1("");
                              }}
                            >
                              X
                            </button>
                          </li>
                        </Row>
                      ))}
                    <CuisineOptions
                      moreCuisineOptions={this.moreCuisineOptions}
                      handleFilterGroup1={this.handleFilterGroup1}
                      cuisineList={this.props.cuisineList}
                      moreCuisineOptionsState={this.state.moreCuisineOptions}
                      togglefilterHighlight={this.togglefilterHighlight}
                      selectedCuisineId={this.state.selectedCuisineId}
                    />
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>

          <Accordion>
            <Card>
              <Card.Header className="filter-card-header d-flex justify-content-center p-1">
                <Accordion.Toggle
                  as={Button}
                  variant=""
                  eventKey="1"
                  className="mx-auto"
                  style={{ height: "3em", width: "100%" }}
                >
                  <strong style={{ fontSize: ".9em" }}>
                    Restaurant Establishments
                  </strong>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="d-flex justify-content-center">
                  <ul className="establishment-suggestions px-0 mx-auto">
                    {this.props.establishmentList
                      .filter(function (establishments) {
                        let initialEstabList = establishments.establishment.id;
                        return (
                          initialEstabList === 16 ||
                          initialEstabList === 7 ||
                          initialEstabList === 21 ||
                          initialEstabList === 1 ||
                          initialEstabList === 31 ||
                          initialEstabList === 272 ||
                          initialEstabList === 31
                        );
                      })
                      .map((establishments) => (
                        <Row
                          key={establishments.establishment.id}
                          altid={establishments.establishment.id}
                          style={{ justifyContent: "center" }}
                        >
                          <li className="cuisine-item">
                            <button
                              className={`cuisine-option-button ${
                                this.selectedEstablishmentId ===
                                establishments.establishment.id
                                  ? "activeSelection"
                                  : ""
                              }`}
                              onClick={() => {
                                this.selectedEstablishmentId =
                                  establishments.establishment.id;
                                this.togglefilterHighlight(
                                  establishments.establishment.id
                                );
                                this.handleFilterGroup2(
                                  establishments.establishment.id
                                );
                              }}
                            >
                              {establishments.establishment.name}
                            </button>
                            <button
                              className={`cuisine-option-clear ${
                                this.selectedEstablishmentId ===
                                establishments.establishment.id
                                  ? "activeSelection"
                                  : ""
                              }`}
                              onClick={() => {
                                this.selectedEstablishmentId = 0;
                                this.handleFilterGroup2("");
                              }}
                            >
                              x
                            </button>
                          </li>
                        </Row>
                      ))}
                    <EstablishmentOptions
                      moreEstablishmentOptions={this.moreEstablishmentOptions}
                      handleFilterGroup2={this.handleFilterGroup2}
                      establishmentList={this.props.establishmentList}
                      moreEstablishmentOptionsState={this.state.moreEstablishmentOptions}
                      togglefilterHighlight={this.togglefilterHighlight}
                      selectedEstablishmentId={this.state.selectedEstablishmentId}
                    />
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </>
    );
  }
}

export default Sidebar;
