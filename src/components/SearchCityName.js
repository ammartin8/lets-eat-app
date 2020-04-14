
import React, { Component } from "react";
import CitySuggestions from "./CitySuggestions";

import { InputGroup, FormControl, Button, Row, Container } from "react-bootstrap";

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

  /*Making API Call Here for Cities*/
  checkStatus(response) {
    if (response.ok === true) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  getCityInfo = () => {
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

  handleValueChange = () => {
    this.setState({ query: this.search.value }, () => {
      // call fetch method
      this.getCityInfo();
    });
  };

  render() {
    console.log(this.state.query);
    return (
      <>
        <Container className="search-box-container mx-auto">
          <Row>
            <InputGroup size="md">
              <FormControl
                type="text"
                id="cityName"
                ref={input => (this.search = input)}
                value={this.state.query}
                onChange={this.handleValueChange}
                placeholder="Enter City Name"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
              <InputGroup.Append>
                <Button type="submit" variant="success">
                  Explore
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Row>

          <Row>
            <CitySuggestions
              results={this.state.cityObj.location_suggestions}
            />
          </Row>
        </Container>
      </>
    );
  }
}

export default SearchCityName;