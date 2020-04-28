import React, { Component } from "react";

// React Boostrap Components
import { Form, Row, InputGroup } from "react-bootstrap";

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`
};

class Sidebar extends Component {
  state = {
    cuisineId: "",
    cuisineList: {
      cuisines: []
    },
    cityId: ""
  };

  componentDidMount() {
    this.getCuisineList();
  }

  checkStatus(response) {
    if (response.ok === true) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  /*Making API Call Here for List of Cuisines*/
  /*TODO: Need to pass city ID in here as prop 
   - Add cuisine id variable*/
  getCuisineList = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/cuisines?city_id=${this.props.cityId}`,
      {
        method: "GET",
        headers: {
          "user-key": config.apiKey
        }
      }
    )
      .then(this.checkStatus)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ cuisineList: data });
      })
      .catch(error => console.log("Uh oh! You gotta error: ", error));
  };

  handleFilterGroup1 = cuisineId => {
    console.log(cuisineId);
    // input.preventDefault();
    this.setState(
      {
        cuisineId: cuisineId
      },
      () => {
        this.props.updateCuisineRestaurantList(this.state.cuisineId);
      }
    );
    // console.log(this.state.cityId);
  };

  render() {
    return (
      <>
        <Row>
          <p className="filterLabel mx-1 px-auto">
            <strong>Popular Cuisines</strong>
          </p>
        </Row>
        <ul className="cuisine-suggestions px-auto">
          {this.state.cuisineList.cuisines.map(cuisine => (
            <Row>
              <li
                key={cuisine.cuisine.cuisine_id}
                altid={cuisine.cuisine.cuisine_id}
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
          ))}
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
