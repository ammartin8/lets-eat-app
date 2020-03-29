import React, { Component } from "react";

import { InputGroup, FormControl, Button } from "react-bootstrap";

class SearchCityName extends Component {
  state = {
    value: ""
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
