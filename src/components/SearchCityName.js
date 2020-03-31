import React, { Component } from "react";
import ReactDOM from 'react-dom';

import { InputGroup, FormControl, Button } from "react-bootstrap";


class SearchCityName extends Component {
  state = {
    value: "",
    cities: []
  };

  handleValueChange = e => {
    this.setState({ value: e.target.value });
  };

  

  render() {
    console.log(this.state.value);
    return (
      <InputGroup size="md" className="search-box-container mx-auto py-3">
        <FormControl
          type="text"
          id="cityName"
          list="city-list"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter City Name"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
        <datalist id="city-list"></datalist>
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
