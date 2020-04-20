import React, { Component } from "react";
// import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Gallery from "./Gallery";
import SearchCityName from "./SearchCityName";

// Importing React Bootstrap Elements
import { Container, Col, Row, Card, Modal, Jumbotron } from "react-bootstrap";

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`
};

/*TODOS:
1. Fetch data from Zomato API
2. Map list of restaurants and show in DOM
3. Filter list
*/

export default class App extends Component {
  state = {
    restaurantObj: {
      restaurants: []
    },
    cityId: "",
    isCardOpen: false
  };

  componentDidMount() {
    this.fetchRestaurants();
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

  handleListUpdate = cityId => {
    console.log(cityId);
    this.setState(
      {
        cityId: cityId
      },
      () => {
        this.fetchRestaurants();
      }
    );
  };

  //FETCH FUNCTIONS
  fetchRestaurants = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.cityId}&entity_type=city&apikey=${config.apiKey}`
    )
      .then(this.checkStatus)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ restaurantObj: data });
      })
      .catch(error => console.log("Uh oh! You gotta error: ", error));
  };

  fetchRestaurantsDetails = () => {
    //put city id in paratheses to replace 58
    fetch(
      `https://developers.zomato.com/api/v2.1/search?entity_id=${this.state.cityId}&entity_type=city&apikey=${config.apiKey}`
    )
      .then(this.checkStatus)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ restaurantObj: data });
        this.setState({ isCardOpen: true });
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
            // query={this.state.query}
            // handleValueChange={this.handleValueChange}
            updateRestaurantList={this.handleListUpdate} //call function
          />
        </Jumbotron>

        <Container>
          <Row>
            <Col>
              <Sidebar />
            </Col>

            <Col sm={9}>
              <div id="main-content">
                {this.state.isCardOpen ? (
                  <Modal.Dialog>
                    <Modal.Header closeButton>
                      <Modal.Title>Restaurant Name</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <div>
                        Why Hello There!
                        <button onClick={() => this.handleClose()}>X</button>
                      </div>
                    </Modal.Body>
                  </Modal.Dialog>
                ) : (
                  <>
                    <ul>
                      {/*Restaurant List*/}
                      {this.state.restaurantObj.restaurants.map(restaurant => (
                        <Card
                          className="restaurant-card my-2"
                          style={{ height: "16em" }}
                          key={restaurant.restaurant.id}
                          onClick={() => this.fetchRestaurantsDetails()}
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
                                  style={{ width: "auto", maxHeight: "150px" }}
                                  src={restaurant.restaurant.featured_image}
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
                                    {restaurant.restaurant.location.address}
                                  </Card.Text>
                                  <Card.Text>
                                    <strong>Phone Number</strong>:{" "}
                                    {restaurant.restaurant.phone_numbers}
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
                      ))}
                    </ul>
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
