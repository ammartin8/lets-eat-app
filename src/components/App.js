import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";

// Importing React Bootstrap Elements
import { Container, Col, Row, Card } from "react-bootstrap";

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`
};

/*TODOS:
1. Fetch data from Zomato API
2. Map list of restaurants and show in DOM
*/

export default class App extends Component {
  state = {
    restaurantObj: {
      restaurants: [],
      location: {}
    }
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

  //FETCH FUNCTIONS
  fetchRestaurants = () => {
    fetch(
      `https://developers.zomato.com/api/v2.1/search?entity_id=59&entity_type=city&apikey=${config.apiKey}`
    )
      .then(this.checkStatus)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ restaurantObj: data });
      })
      .catch(error => console.log("You got error: ", error));
  };

  render() {
    return (
      <>
        <Header
          title="Let's Eat!"
          subtitle="Discover Your New Favorite Restaurant"
        />

        <Container>
          <Row>
          <Col className="border">Look Another Column!</Col>
          
          <Col sm={9} className="border">
          <h4>Explore New Restaurants in Istanbul</h4>
            <ul>
              {this.state.restaurantObj.restaurants.map(restaurant => (
                <Card
                  className="restaurant-card my-2"
                  style={{ height: "16em" }}
                >
                  <Card.Header>
                    <p className="m-0 h4">{restaurant.restaurant.name}</p>
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
                          {restaurant.restaurant.user_rating.aggregate_rating}
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
          </Col>
          </Row>
        </Container>
        <Gallery title="Here will Lie a Gallery" />
        <Footer title="Top Cities to Visit" />
      </>
    );
  }
}
