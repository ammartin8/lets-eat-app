import React, { Component } from "react";

// React Boostrap Components
import { Form, Row } from "react-bootstrap";

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`
};

class Sidebar extends Component {
  state = {
    cuisineId: "",
    cuisineList: {},
    cityId: ""
  };


componentDidMount() {
  this.getCuisineList();
}

componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.cityId !== prevProps.cityId) {
    this.setState({cityId: this.props.cityId}, () => this.getCuisineList());
  }
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

  render() {
    return (
      <>
        <Row>
          <p className="filterLabel mx-1 px-auto">
            <strong>Popular Cuisines</strong>
          </p>
          <Form onSubmit={this.handleSelection1}>
            <Form.Group
              controlId="formBasicCheckbox"
              className="px-4 filter-checkboxes"
            >
              <Form.Check type="checkbox" label="American Food" />
              <Form.Check type="checkbox" label="Asian Food" />
              <Form.Check type="checkbox" label="Chinese Food" />
              <Form.Check type="checkbox" label="Italian Food" />
              <Form.Check type="checkbox" label="Japanese Food" />
              <Form.Check type="checkbox" label="Mexican Food" />
              <Form.Check type="checkbox" label="Thai Food" />
              <Form.Check type="checkbox" label="Burger Food" />
              <Form.Check type="checkbox" label="Bar Food" />
              <Form.Check type="checkbox" label="BBQ Food" />
            </Form.Group>
          </Form>
        </Row>
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
