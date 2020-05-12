import React, { Component } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import RestaurantDetails from "./RestaurantDetails";
import RestaurantList from "./RestaurantList";

// Importing React Bootstrap Elements
import { Container, Col, Row } from "react-bootstrap";

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
};

/*TODOS:
1. Fetch data from Zomato API
2. Map list of restaurants and show in DOM
3. Filter list
*/

export default class App extends Component {
  state = {
    results_shown: 20,
    results_start: 0,
    restaurantList: {
      restaurants: [],
    },
    restaurantObj: {
      name: "",
      id: "",
      user_rating: {
        aggregate_rating: "",
      },
      location: {
        address: "",
        city: "",
      },
      highlights: [],
      cuisines: "",
      currency: "",
      establishment: [],
      average_cost_for_two: 0,
      phone_numbers: "",
      photos: [],
      featured_image: "",
      timings: "",
    },
    cuisineList: {
      cuisines: [],
    },
    cityId: "33",
    cuisineId: "",
    isCardOpen: false,
    establishmentList: {
      establishments: [],
    },
    establishmentId: "",
  };

  componentDidMount() {
    this.fetchRestaurants();
    this.getCuisineList();
    this.fetchEstablishmentList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.results_start !== this.state.results_start) {
      this.fetchRestaurants();
    }
  }

  //HELPER FUNCTIONS
  updateRestaurantList = (num) => {
    this.setState((prevState) => {
      return { results_start: prevState.results_start + num };
    });
  };

  checkStatus(response) {
    if (response.ok === true) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  handleClose = () => {
    this.setState((prevState) => {
      return { isCardOpen: !prevState.isCardOpen };
    });
    this.fetchRestaurants();
  };

  handleRestaurantListUpdate = (cityId) => {
    this.setState(
      {
        cityId: cityId,
      },
      () => {
        this.fetchRestaurants();
        this.getCuisineList();
        this.fetchEstablishmentList();
      }
    );
  };

  handleCuisineIdUpdate = (cuisineId) => {
    this.setState(
      {
        cuisineId: cuisineId,
        results_start: 0,
      },
      () => {
        this.fetchRestaurants();
      }
    );
  };

  handleEstablishmentIdUpdate = (establishmentId) => {
    this.setState(
      {
        establishmentId: establishmentId,
        results_start: 0,
      },
      () => {
        this.fetchRestaurants();
      }
    );
  };

  handleResultStartReset = (resultStartNum) => {
    this.setState(
      {
        results_start: 0,
      },
      () => {
        this.fetchRestaurants();
      }
    );
  };

  generateCostLevel = (priceRange) => {
    if (priceRange === 1) {
      return "$";
    } else if (priceRange === 2) {
      return "$$";
    } else if (priceRange === 3) {
      return "$$$";
    } else if (priceRange === 4) {
      return "$$$$";
    } else if (priceRange === 5) {
      return "$$$$$";
    } else {
      return "";
    }
  };

  //FETCH FUNCTIONS
  fetchRestaurants = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.cityId}&entity_type=city&cuisines=${this.state.cuisineId}&establishment_type=${this.state.establishmentId}&start=${this.state.results_start}&count=${this.state.results_shown}`,
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
        // console.log(data);
        this.setState({ restaurantList: data });
      })
      .catch((error) => console.log("Uh oh! You gotta error: ", error));
  };

  // Fetches restaurant list
  fetchRestaurantsList = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.cityId}&entity_type=city&cuisines=${this.state.cuisineId}&establishment_type=${this.state.establishmentId}&rstart=${this.state.results_start}&count=${this.state.results_shown}&apikey=${config.apiKey}`,
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
        // console.log(data);
        this.setState({ restaurantList: data });
        this.setState({ isCardOpen: true });
      })
      .catch((error) => console.log("Uh oh! You gotta error: ", error));
  };

  // Fetches additional for specific restaurant on click
  fetchRestaurantsDetails = (restaurantId) => {
    fetch(
      `https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurantId}&apikey=${config.apiKey}`,
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
        // console.log(data);
        this.setState({ restaurantObj: data });
        this.setState({ isCardOpen: true });
      })
      .catch((error) => console.log("Uh oh! You gotta error: ", error));
  };

  // Fetches cuisine list for city
  getCuisineList = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/cuisines?city_id=${this.state.cityId}`,
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
        console.log(data);
        this.setState({ cuisineList: data });
      })
      .catch((error) => console.log("Uh oh! You gotta error: ", error));
  };

  // Fetches Restaurant Types
  fetchEstablishmentList = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/establishments?city_id=${this.state.cityId}`,
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
        console.log(data);
        this.setState({ establishmentList: data });
      })
      .catch((error) => console.log("Uh oh! You gotta error: ", error));
  };

  render() {
    return (
      <>
        <Header
          cityId={this.state.cityId}
          cuisineId={this.state.cuisineId}
          resultsStart={this.state.results_start}
          updateRestaurantList={this.handleRestaurantListUpdate} //updates list of restaurant by city
          updateCuisineID={this.handleCuisineIdUpdate} // updates cuisine ID selected onClick
          updateEstablishmentID={this.handleEstablishmentIdUpdate} // updates establishment ID selected onClick
          resetResultStart={this.handleResultStartReset} // resets result start number to zero onClick
        />

        <Container className="m-0 justify-content-center d-flex px-4" fluid>
          <Row className="w-100 justify-content-center">
            {this.state.isCardOpen ? (
              <>
                <Col sm={3} lg={2} className="d-none">
                  {/*WORK ON THIS */}
                  <Sidebar
                    className="d-none"
                    passCityId={this.state.cityId}
                    cuisineList={this.state.cuisineList.cuisines}
                    establishmentList={
                      this.state.establishmentList.establishments
                    }
                    updateCuisineID={this.handleCuisineIdUpdate}
                    updateEstablishmentID={this.handleEstablishmentIdUpdate}
                  />
                </Col>

                <Col
                  id="main-content"
                  className="d-flex justify-content-center"
                  sm={12}
                  lg={10}
                >
                  <RestaurantDetails
                    restaurantObj={this.state.restaurantObj}
                    handleClose={this.handleClose}
                    isCardOpen={this.state.isCardOpen}
                  />
                </Col>
              </>
            ) : (
              <>
                <Col sm={4}>
                  <Sidebar
                    passCityId={this.state.cityId}
                    cuisineList={this.state.cuisineList.cuisines}
                    establishmentList={
                      this.state.establishmentList.establishments
                    }
                    updateCuisineID={this.handleCuisineIdUpdate}
                    updateEstablishmentID={this.handleEstablishmentIdUpdate}
                  />
                </Col>

                <Col
                  id="main-content"
                  className="d-flex justify-content-center"
                  xs={12}
                  sm={8}
                >
                  <RestaurantList
                    restaurantList={this.state.restaurantList}
                    restaurantObj={this.state.restaurantObj}
                    fetchRestaurantsDetails={this.fetchRestaurantsDetails}
                    updateRestaurantList={this.updateRestaurantList}
                    resultsStart={this.state.restaurantList.results_start}
                    resultsFound={this.state.restaurantList.results_found}
                    resultsShown={this.state.restaurantList.results_shown}
                    priceRange={this.state.restaurantObj.price_range}
                    generateCostLevel={this.generateCostLevel}
                  />
                </Col>
              </>
            )}
          </Row>
        </Container>
        <Footer title="Top Cities to Visit" />
      </>
    );
  }
}
