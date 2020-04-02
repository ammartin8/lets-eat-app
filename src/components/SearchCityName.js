import React, { Component } from "react";

import { InputGroup, FormControl, Button } from "react-bootstrap";

class SearchCityName extends Component {
  state = {
    value: "",
    results: []
  };

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
      `https://developers.zomato.com/api/v2.1/cities?q=${this.state.value}&count=5`
    )
      .then(this.checkStatus)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ results: data });
      })
      .catch(error => console.log("Uh oh! You gotta error: ", error));
  };

  handleValueChange = () => {
    this.setState({ value: this.search.value }, () => {
      if (this.state.value && this.state.value > 3) {
        if (this.state.value.length % 2 === 0) {
          this.getCityInfo()
        }
      }
    })
  }

  render() {
    console.log(this.state.value);
    return (
      <InputGroup size="md" className="search-box-container mx-auto py-3">
        <FormControl
          type="text"
          id="cityName"
          ref={input => (this.search = input)}
          value={this.state.value}
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
