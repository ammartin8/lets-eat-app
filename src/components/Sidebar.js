import React, { Component } from "react";

// React Boostrap Components
import { Form, Row } from "react-bootstrap";

class Sidebar extends Component {
  state = {
    cuisineId: "",
    filter1Clicked: false
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

  render() {
    return (
      <>
        <Row>
          <p className="filterLabel mx-1 px-auto">
            <strong>Popular Cuisines</strong>
          </p>
        </Row>
        <ul className="cuisine-suggestions px-0">
          {this.props.cuisineList
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
                    } //work on this!
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
            ))
            .slice(1, 15)}
          <li className="cuisine-item">
            <button className="cuisine-more-button">More Cuisines</button>
          </li>
        </ul>

        <Row>
          <p className="filterLabel mx-1 px-auto">
            <strong>Restaurant Establishment</strong>
          </p>
          <Form.Group
            controlId="formBasicCheckbox"
            className="px-4 filter-checkboxes"
          >
            <Form.Check type="checkbox" label="Casual Dining" />
            <Form.Check type="checkbox" label="Cafe" />
            <Form.Check type="checkbox" label="Quick Bites" />
            <Form.Check type="checkbox" label="Bakeries" />
            <Form.Check type="checkbox" label="Fast Food" />
            <Form.Check type="checkbox" label="Bars" />
            <Form.Check type="checkbox" label="Pizzerias" />
            <Form.Check type="checkbox" label="Coffee Shop" />
            <Form.Check type="checkbox" label="Deli" />
            <Form.Check type="checkbox" label="Dessert Shop" />
          </Form.Group>
        </Row>
      </>
    );
  }
}

export default Sidebar;
