import React, { Component } from "react";
// import CitySuggestions from "./CitySuggestions";

import { Row, Container, InputGroup, FormControl, Button, Form } from "react-bootstrap";

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`
};

class SearchCityName extends Component {
  state = {
    query: "",
    cityObj: {
      location_suggestions: []
    }
  };

  componentDidMount() {
    this.handleValueChange();
  }

  
  checkStatus(response) {
    if (response.ok === true) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  /*Making API Call Here for List of Suggested Cities*/
  getCityList = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/cities?q=${this.state.query}&count=5`,
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
        this.setState({ cityObj: data });
      })
      .catch(error => console.log("Uh oh! You gotta error: ", error));
  };


  //HELPER FUNCTIONS
  handleValueChange = () => {
    this.setState({ query: this.search.value }, () => {
      // call fetch method
      this.getCityList();
    });
  };

  // Upon onSubmit automatically assigns the first listed suggestion's city Id number is user doesn't select an option
  handleSubmit = input => {
    input.preventDefault();
    this.setState(
      {
        cityId: this.state.cityObj.location_suggestions[0].id
      },
      () => {
        this.props.updateRestaurantList(this.state.cityId);
      }
    );
    // console.log(this.state.cityId);
    this.setState({ query: "" });
  };

  handleClick = cityId => input => {
    input.preventDefault();
    this.setState(
      {
        cityId: cityId
      },
      () => {
        this.props.updateRestaurantList(this.state.cityId);
      }
    );
    // console.log(this.state.cityId);
    this.setState({ query: "" });
  };

  render() {
    // console.log(this.state.query);
    return (
      <>
        <Container className="search-box-container">
          <Row className="mx-0">
            <Form onSubmit={this.handleSubmit} className="search-bar-entry flex-fill">
              <InputGroup size="md">
                <FormControl
                  type="text"
                  id="cityName"
                  ref={input => (this.search = input)}
                  value={this.state.query}
                  onChange={this.handleValueChange}
                  placeholder="Enter City Name"
                />
                <InputGroup.Append>
                  <Button
                    type="submit"
                    variant="success"
                    onClick={this.handleSubmit}
                  >
                    Explore
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Row>

          <Row>
            {/* <CitySuggestions
              results={this.state.cityObj.location_suggestions}
              handleClick={this.handleClick}
            /> */}
            <ul className="city-suggestions">
              {this.state.cityObj.location_suggestions.map(cities => (
                <li key={cities.id} altid={cities.id}>
                  <button
                    className="city-option-button"
                    onClick={this.handleClick(cities.id)}
                  >
                    {cities.name}
                  </button>
                </li>
              ))}
            </ul>
          </Row>
        </Container>
      </>
    );
  }
}

export default SearchCityName;
