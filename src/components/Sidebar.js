import React, { Component } from "react";
import CuisineOptions from "./CuisineOptions";
import EstablishmentOptions from "./EstablishmentOptions";
// import styles from "../styles.scss"

// React Boostrap Components
import { Row } from "react-bootstrap";

class Sidebar extends Component {
  state = {
    cuisineId: "",
    establishmentId: "",
    filter1Clicked: false,
    filter2Clicked: false,
    moreCuisineOptions: false,
    moreEstablishmentOptions: false
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
              <Row
                key={cuisine.cuisine.cuisine_id}
                altid={cuisine.cuisine.cuisine_id}
              >
                <li className="cuisine-item">
                  <button
                    //Work on this
                    className={
                      ["cuisine-option-button"]
                    }
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
            moreCuisineOptions={this.moreCuisineOptions}
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
              <Row
                key={establishments.establishment.id}
                altid={establishments.establishment.id}
              >
                <li className="cuisine-item">
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
            handleFilterGroup2={this.handleFilterGroup2}
            establishmentList={this.props.establishmentList}
          />
        </ul>
      </>
    );
  }
}

export default Sidebar;
