import React, { Component } from "react";

// React Boostrap Components
import { Form, Row } from "react-bootstrap";

// const config = {
//   apiKey: `${process.env.REACT_APP_API_KEY}`
// };

class Sidebar extends Component {
  state = {
    // cuisineList: {
    //   cuisines: []
    // },
    cuisineId: "",
    filter1Clicked: false
  };

  // // HELPER FUNCTIONS
  // componentDidMount() {
  //   this.getCuisineList();
  // }

  // componentDidUpdate() {
  //   this.getCuisineList();
  // }

  // checkStatus(response) {
  //   if (response.ok === true) {
  //     return Promise.resolve(response);
  //   } else {
  //     return Promise.reject(new Error(response.statusText));
  //   }
  // }

  handleFilterGroup1 = cuisineId => {
    this.setState({ cuisineId: cuisineId }, () => {
      this.props.updateCuisineID(this.state.cuisineId);
    })
  };

  // //WORK ON THIS!
  // handleCuisineFilterList = () => {
  //   let cuisineArray = this.state.cuisineList.cuisines;
  //   this.setState({ cuisines: cuisineArray }, () => {
  //     this.props.updateCuisineList(cuisineArray);
  //   });
  // };

  // handleGetCuisineList = () => {
  //   this.props.getCuisineList();
  // }

  // API CALLS
  // getCuisineList = () => {
  //   //I don't want to pass cityID as a prop
  //   fetch(
  //     `https://developers.zomato.com/api/v2.1/cuisines?city_id=${this.props.passCityId}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "user-key": config.apiKey
  //       }
  //     }
  //   )
  //     .then(this.checkStatus)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       this.setState({ cuisineList: data });
  //     })
  //     .catch(error => console.log("Uh oh! You gotta error: ", error));
  // };

  // Might need to create a separate function to return list of cuisines!!!

  render() {
    // console.log(this.props);
    return (
      <>
        <Row>
          <p className="filterLabel mx-1 px-auto">
            <strong>Popular Cuisines</strong>
          </p>
        </Row>
        <ul className="cuisine-suggestions px-0">
          {this.props.cuisineList //this needs to passed as a state not props (read only)
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
                    onClick={() => this.handleFilterGroup1("")} //there's an error here,not clearing
                  >
                    X
                  </button>
                </li>
              </Row>
            ))
            .slice(1, 15)}
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
