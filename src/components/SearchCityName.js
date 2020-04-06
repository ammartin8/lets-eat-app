import React, { Component } from "react";

import { InputGroup, FormControl, Button } from "react-bootstrap";

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
    this.getCityInfo();
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
      if (this.state.query && this.state.query > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getCityInfo()
        }
      }
    })
  };

  render() {
    console.log(this.state.query);
    return (
      <InputGroup size="md" className="search-box-container mx-auto py-3">
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
    );
  }
}

export default SearchCityName;
