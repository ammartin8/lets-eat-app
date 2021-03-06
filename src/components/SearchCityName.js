import React, { Component } from "react";
import CitySuggestions from "./CitySuggestions";

import {
  Row,
  Container,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
};

class SearchCityName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      cityObj: {
        location_suggestions: [],
      },
    };
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
          "user-key": config.apiKey,
        },
      }
    )
      .then(this.checkStatus)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cityObj: data });
      })
      .catch((error) => console.log("Uh oh! You gotta error: ", error));
  };

  //HELPER FUNCTIONS
  handleValueChange = () => {
    this.setState({ query: this.search.value }, () => {
      // calls fetch method
      this.getCityList();
    });
  };

  // Upon onSubmit automatically assigns the first listed suggestion's city Id number if user doesn't select an option
  handleSubmit = (input) => {
    input.preventDefault();
    if (this.state.query.length >= 2 && this.state.cityObj.location_suggestions[0] !== undefined) {
      this.setState(
        {
          cityId: this.state.cityObj.location_suggestions[0].id,
          query: "",
          results_start: 0,
        },
        () => {
          this.props.updateRestaurantList(this.state.cityId);
          this.props.resetResultStart();
          this.props.updateCuisineID("");
          this.props.updateEstablishmentID("");
        }
      );
    } else if (this.state.cityObj.location_suggestions[0] === undefined) {
      return false;
    } else {
      return false;
    }
  };

  handleClick = (cityId) => (input) => {
    input.preventDefault();
    this.setState(
      {
        cityId: cityId,
        query: "",
        results_start: 0,
      },
      () => {
        this.props.updateRestaurantList(this.state.cityId);
        this.props.resetResultStart();
        this.props.updateCuisineID("");
        this.props.updateEstablishmentID("");
      }
    );
  };

  render() {
    return (
      <>
        <Container className="search-box-container">
          <Row className="mx-0">
            <Form
              onSubmit={this.handleSubmit}
              className="search-bar-entry flex-fill"
            >
              <InputGroup size="md">
                <FormControl
                  type="text"
                  id="cityName"
                  ref={(input) => (this.search = input)}
                  value={this.state.query}
                  onChange={this.handleValueChange}
                  placeholder="Enter City Name"
                />
                <InputGroup.Append>
                  <Button
                    type="submit"
                    variant="success"
                    onClick={this.handleSubmit}
                    className={(this.state.query.length < 2 ? ["disabled"] : [""])}
                  >
                    Explore
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Row>

          <Row>
            <CitySuggestions
              results={this.state.cityObj.location_suggestions}
              handleClick={this.handleClick}
              query={this.state.query}
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default SearchCityName;
