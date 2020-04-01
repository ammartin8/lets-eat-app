import React, { Component } from "react";

import { InputGroup, FormControl, Button } from "react-bootstrap";


class SearchCityName extends Component {
  state = {
    value: "",
  };

  handleValueChange = () => {
    this.setState({ value: this.search.value })
  }

  /*Making API Call Here for Cities*/


  render() {
    console.log(this.state.value);
    return (
      <InputGroup size="md" className="search-box-container mx-auto py-3">
        <FormControl
          type="text"
          id="cityName"
          ref={input => this.search = input}
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter City Name"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
        <datalist option="{this.state.cities}"></datalist>
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
