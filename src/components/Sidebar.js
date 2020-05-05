import React, { Component } from "react";
import CuisineOptions from "./CuisineOptions";
import EstablishmentOptions from "./EstablishmentOptions";

// React Boostrap Components
import { Row } from "react-bootstrap";

class Sidebar extends Component {
  state = {
    cuisineId: "",
    establishmentId: "",
    filter1Clicked: false,
    filter2Clicked: false,
    moreCuisineOptions: false,
    moreEstablishmentOptions: false,
  };

  // HELPER FUNCTIONS
  handleFilterGroup1 = cuisineId => {
    if (cuisineId !== "") {
      this.setState({ cuisineId: cuisineId }, () => {
        this.props.updateCuisineID(this.state.cuisineId);
      });
      this.setState({ filter1Clicked: true });
    } else {
      this.setState({ cuisineId: cuisineId }, () => {
        this.props.updateCuisineID(this.state.cuisineId);
      });
      this.setState({ filter1Clicked: false });
    }
  };

  handleFilterGroup2 = establishmentId => {
    if (establishmentId !== "") {
      this.setState({ establishmentId: establishmentId }, () => {
        this.props.updateEstablishmentID(this.state.establishmentId);
      });
      this.setState({ filter2Clicked: true });
    } else {
      this.setState({ establishmentId: establishmentId }, () => {
        this.props.updateEstablishmentID(this.state.establishmentId);
      });
      this.setState({ filter2Clicked: false });
    }
  };

  openCuisineOptions = () => {
    this.setState({ moreCuisineOptions: !false });
  };

  closeCuisineOptions = () => {
    this.setState({ moreCuisineOptions: !true });
  };

  moreEstablishmentOptions = () => {
    this.setState({ moreEstablishmentOptions: !false });
  };

  closeEstablishmentOptions = () => {
    this.setState({ moreEstablishmentOptions: !true });
  };

  render() {
    return (
      <>
        <Row>
          <p className="filterLabel mx-1 px-auto">
            <strong>Popular Cuisines</strong>
          </p>
        </Row>
        {/* {this.state.moreCuisineOptions ? ( */}
        <ul className="cuisine-suggestions px-0">
          {this.props.cuisineList
            .filter(function(cuisine) {
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
            .map(cuisine => (
              <Row>
                <li
                  key={cuisine.cuisine.cuisine_id}
                  altid={cuisine.cuisine.cuisine_id}
                  className="cuisine-item"
                >
                  <button
                    className="cuisine-option-button"
                    onClick={() =>
                      this.handleFilterGroup1(cuisine.cuisine.cuisine_id)
                    }
                  >
                    {cuisine.cuisine.cuisine_name}
                  </button>
                  <button
                    className="cuisine-option-clear"
                    onClick={() => this.handleFilterGroup1("")}
                  >
                    X
                  </button>
                </li>
              </Row>
            ))}
          <CuisineOptions
            moreCuisineOptions={this.openCuisineOptions}
            closeCuisineOptions={this.closeCuisineOptions}
            handleFilterGroup1={this.handleFilterGroup1}
            cuisineList={this.props.cuisineList}
          />
        </ul>

        <Row>
          <p className="filterLabel mx-1 px-auto">
            <strong>Restaurant Establishments</strong>
          </p>
        </Row>
        <ul className="establishment-suggestions px-0">
          {this.props.establishmentList
            .filter(function(establishments) {
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
            .map(establishments => (
              <Row>
                <li
                  key={establishments.establishment.id}
                  altid={establishments.establishment.id}
                  className="cuisine-item"
                >
                  <button
                    className="cuisine-option-button"
                    onClick={() =>
                      this.handleFilterGroup2(establishments.establishment.id)
                    }
                  >
                    {establishments.establishment.name}
                  </button>
                  <button
                    className="cuisine-option-clear"
                    onClick={() => this.handleFilterGroup2("")}
                  >
                    x
                  </button>
                </li>
              </Row>
            ))}
          <EstablishmentOptions
            moreEstablishmentOptions={this.moreEstablishmentOptions}
            closeEstablishmentOptions={this.closeEstablishmentOptions}
            handleFilterGroup2={this.handleFilterGroup2}
            establishmentList={this.props.establishmentList}
          />
        </ul>
      </>
    );
  }
}

export default Sidebar;
