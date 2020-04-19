import React, { Component } from "react";
import CitySuggestions from "./CitySuggestions";

import { Row, Container } from "react-bootstrap";

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

  handleValueChange = () => {
    this.setState({ query: this.search.value }, () => {
      // call fetch method
      this.getCityList();
    });
  };

  handleSubmit = input => {
    input.preventDefault();
    this.setState({
      cityId: this.state.cityObj.location_suggestions[0].id
    },
      () => {
        this.props.updateRestaurantList(this.state.cityId);
      });
    // console.log(this.state.cityId);
    this.setState({ query: "" });
  };

  render() {
    // console.log(this.state.query);
    return (
      <>
        <Container className="search-box-container mx-auto">
          <Row>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                id="cityName"
                ref={input => (this.search = input)}
                value={this.state.query}
                onChange={this.handleValueChange}
                placeholder="Enter City Name"
              />

              <input
                type="submit"
                value="Explore"
                onClick={this.handleSubmit}
              />
            </form>
          </Row>

          <Row>
            <CitySuggestions
              results={this.state.cityObj.location_suggestions}
            />
            {/* <ul className="city-suggestions">
              {this.state.cityObj.location_suggestions.map(cities => (
                <li key={cities.id}>
                  <button className="city-option-button" onClick={this.handleSubmit()}>
                    {cities.name}
                  </button>
                </li>
              ))}
            </ul> */}
          </Row>
        </Container>
      </>
    );
  }
}

export default SearchCityName;
