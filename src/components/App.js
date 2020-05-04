import React, { Component } from "react";
// import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Gallery from "./Gallery";
import SearchCityName from "./SearchCityName";

// Importing React Bootstrap Elements
import {
  Container,
  Col,
  Row,
  Card,
  Modal,
  Jumbotron,
  Button,
  Image
} from "react-bootstrap";

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`
};

/*TODOS:
1. Fetch data from Zomato API
2. Map list of restaurants and show in DOM
3. Filter list
*/

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      restaurantList: {
        restaurants: []
      },
      restaurantObj: {
        name: "",
        id: "",
        user_rating: {
          aggregate_rating: ""
        },
        location: {
          address: "",
          city: ""
        },
        highlights: [],
        cuisines: "",
        currency: "",
        establishment: [],
        average_cost_for_two: 0,
        phone_numbers: "",
        photos: [],
        featured_image: "",
        timings: ""
      },
      cuisineList: {
        cuisines: []
      },
      cityId: "33",
      cuisineId: "",
      isCardOpen: false
    }
  };
  

  componentDidMount() {
    this.fetchRestaurants();
    this.getCuisineList();
  }

  //HELPER FUNCTIONS
  checkStatus(response) {
    if (response.ok === true) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  handleClose = () => {
    this.setState({ isCardOpen: false });
    this.fetchRestaurants();
  };

  handleRestaurantListUpdate = cityId => {
    this.setState(
      {
        cityId: cityId
      },
      () => {
        this.fetchRestaurants();
        this.getCuisineList();
      }
    );
  };
  
  handleCuisineIdUpdate = (cuisineId) => {
    console.log(cuisineId);
    this.setState(
      {
        cuisineId: cuisineId,
      },
      () => {
        this.fetchRestaurants();
      }
    );
  };

  //FETCH FUNCTIONS
  fetchRestaurants = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.cityId}&entity_type=city&cuisines=${this.state.cuisineId}&apikey=${config.apiKey}`
    )
      .then(this.checkStatus)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ restaurantList: data });
      })
      .catch(error => console.log("Uh oh! You gotta error: ", error));
  };

  fetchRestaurantsList = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.cityId}&entity_type=city&cuisines=${this.state.cuisines}&apikey=${config.apiKey}`
    )
      .then(this.checkStatus)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({ restaurantList: data });
        this.setState({ isCardOpen: true });
      })
      .catch(error => console.log("Uh oh! You gotta error: ", error));
  };

  fetchRestaurantsDetails = restaurantId => {
    fetch(
      `https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurantId}&apikey=${config.apiKey}`
    )
      .then(this.checkStatus)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.setState({ restaurantObj: data });
        this.setState({ isCardOpen: true });
      })
      .catch(error => console.log("Uh oh! You gotta error: ", error));
  };

  getCuisineList = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/cuisines?city_id=${this.state.cityId}`,
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
        this.setState({ cuisineList: data });
      })
      .catch(error => console.log("Uh oh! You gotta error: ", error));
  };

  render() {
    return (
      <>
        <Jumbotron
          id="main-header"
          className="text-center header-background"
          style={{ height: "75vh" }}
        >
          <h1 className="header">Let's Eat</h1>
          <p className="subtitle">Discover Your New Favorite Restaurant</p>

          <SearchCityName
            cityId={this.state.cityId}
            cuisineId={this.state.cuisineId}
  
            updateRestaurantList={this.handleRestaurantListUpdate} //updates list of restaurant by city
            updateCuisineID={this.handleCuisineIdUpdate} // updates cuisine ID selected onClick
          />
        </Jumbotron>

        <Container>
          <Row>
            <Col>
              <Sidebar
                passCityId={this.state.cityId}
                cuisineList={this.state.cuisineList.cuisines}

                updateCuisineList={this.handleUpdateCuisineList}
                updateCuisineID={this.handleCuisineIdUpdate}
              />
            </Col>

            <Col sm={9}>
              <div id="main-content" className="container d-flex">
                {this.state.isCardOpen ? (
                  <Modal.Dialog className="w-100 mx-0 flex-fill" size="lg">
                    <Modal.Header>
                      <Col>
                        <Row xs={12}>
                          <Image
                            src={this.state.restaurantObj.featured_image}
                            fluid
                            rounded
                            className="mx-0"
                            style={{ width: "auto", maxHeight: "550px" }}
                            alt=""
                          />
                        </Row>
                      </Col>
                    </Modal.Header>

                    <Modal.Body>
                      <Row className="mx-0">
                        <Col className="px-2">
                          <Row className="mx-0">
                            <Modal.Title>
                              {this.state.restaurantObj.name}
                            </Modal.Title>
                          </Row>
                          <Row className="mx-0">
                            <p>
                              <strong>{"Address: "}</strong>
                              {this.state.restaurantObj.location.address}
                            </p>
                          </Row>
                          <Row className="mx-0">
                            <p>
                              <strong>{"Phone Number: "}</strong>
                              {this.state.restaurantObj.phone_numbers}
                            </p>
                          </Row>
                          <Row className="mx-0">
                            <p>
                              <strong>{"Hours: "}</strong>
                              {this.state.restaurantObj.timings}
                            </p>
                          </Row>
                        </Col>
                        <Col className="px-2">
                          <Row className="mx-0">
                            <p>
                              <strong>{"Rating: "}</strong>
                            </p>
                          </Row>
                          <Row className="mx-0">
                            <p>
                              <strong>{"Cost Range: "}</strong>
                            </p>
                          </Row>
                          <Row className="mx-0">
                            <p>
                              <strong>{"Currency: "}</strong>
                            </p>{" "}
                            {this.state.restaurantObj.currency}
                          </Row>
                        </Col>
                      </Row>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={this.handleClose}>
                        Back
                      </Button>
                    </Modal.Footer>
                  </Modal.Dialog>
                ) : (
                  <>
                    <Row>
                      <div className="w-100 d-block text-right">
                        <p>Results: {this.state.restaurantList.results_found}</p>
                      </div>
                      <div className="d-block">
                        <ul className="px-0">
                          {/*Restaurant List*/}
                          {this.state.restaurantList.restaurants.map(
                            restaurant => (
                              <Card
                                className="restaurant-card my-2"
                                style={{ height: "16em" }}
                                key={restaurant.restaurant.id}
                                restaurantId={restaurant.restaurant.id}
                                onClick={() =>
                                  this.fetchRestaurantsDetails(
                                    restaurant.restaurant.id
                                  )
                                }
                              >
                                <Card.Header>
                                  <p className="m-0 h4">
                                    {restaurant.restaurant.name}
                                  </p>
                                </Card.Header>
                                <Card.Body>
                                  <Row>
                                    <Col>
                                      <img
                                        className="img-fluid round"
                                        style={{
                                          width: "auto",
                                          maxHeight: "150px"
                                        }}
                                        src={
                                          restaurant.restaurant.featured_image
                                        }
                                        alt=""
                                      />
                                    </Col>
                                    <Col sm={8}>
                                      <Card.Title className="">
                                        <strong>Rating</strong>:{" "}
                                        {
                                          restaurant.restaurant.user_rating
                                            .aggregate_rating
                                        }
                                      </Card.Title>
                                      <div className="restaurant-general-info">
                                        <Card.Text>
                                          <strong>Address</strong>:{" "}
                                          {
                                            restaurant.restaurant.location
                                              .address
                                          }
                                        </Card.Text>
                                        <Card.Text>
                                          <strong>Price Range</strong>:{" "}
                                          {restaurant.restaurant.price_range}
                                        </Card.Text>
                                        <Card.Text>
                                          <strong>Hours Open</strong>:{" "}
                                          {restaurant.restaurant.timings}
                                        </Card.Text>
                                      </div>
                                    </Col>
                                  </Row>
                                </Card.Body>
                              </Card>
                            )
                          )}
                        </ul>
                      </div>
                    </Row>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </Container>
        <Gallery title="Here will Lie a Gallery" />
        <Footer title="Top Cities to Visit" />
      </>
    );
  }
}
