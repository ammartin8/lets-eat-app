import React from "react";

import { Container, Button, Row, Col, Card } from "react-bootstrap";

function RestaurantList(props) {
  return (
    <Row>
      <Container className="">
        <div className="w-100  text-right">
          <p>Results: {props.restaurantList.results_found}</p>
        </div>
        {props.restaurantList.restaurants.length === 0 ? (
          <p className="text-center">No Results Found :/</p>
        ) : (
          <ul className="px-0">
            {props.restaurantList.restaurants.map((restaurant) => (
              <Card
                className="restaurant-card my-2"
                key={restaurant.restaurant.id}
                restaurantid={restaurant.restaurant.id}
                onClick={() =>
                  props.fetchRestaurantsDetails(restaurant.restaurant.id)
                }
              >
                <Row className="d-flex ">
                  <Col
                    sm={5}
                    className="d-flex"
                    style={{
                      height: "12rem",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                    }}
                  >
                    {restaurant.restaurant.featured_image !== "" ? (
                      <Card.Img
                        className="img-fluid d-flex p-0"
                        style={{
                          flexShrink: "0",
                          minHeight: "100%",
                          minWidth: "100%",
                        }}
                        src={restaurant.restaurant.featured_image}
                        alt=""
                      />
                    ) : (
                      <>
                        <p className="h3 text-center">Image Coming Soon</p>
                      </>
                    )}
                  </Col>

                  <Col sm={7} className="p-0">
                    <Card.Body>
                      <Card.Text className="m-0">
                        <strong>{restaurant.restaurant.name}</strong>
                        <p>{restaurant.restaurant.location.city}</p>
                      </Card.Text>
                      <Card.Text className="m-0">
                        <strong>Rating</strong>:{" "}
                        {restaurant.restaurant.user_rating.aggregate_rating} (
                        {restaurant.restaurant.all_reviews_count})
                      </Card.Text>
                      <div className="restaurant-general-info">
                        <Card.Text className="d-none d-sm-block">
                          <strong>Address</strong>:{" "}
                          {restaurant.restaurant.location.address}
                        </Card.Text>
                        <Card.Text className="d-none d-sm-block">
                          <strong>Price</strong>:{" "}
                          {props.generateCostLevel(
                            restaurant.restaurant.price_range
                          )}
                        </Card.Text>
                        <Card.Text>{restaurant.restaurant.cuisines}</Card.Text>
                      </div>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </ul>
        )}

        <div className="d-flex justify-content-center">
          <div>
            <a href="#main-content" className="mx-auto restaurantPage">
              <Button
                className={
                  props.resultsStart === 0
                    ? ["d-none"]
                    : ["mx-auto"] + " " + ["restaurantPage"]
                }
                onClick={() => props.updateRestaurantList(-20)}
                variant="success"
              >
                Previous
              </Button>
            </a>
          </div>
          <div>
            <a href="#main-content" className="mx-auto restaurantPage">
              <Button
                className={
                  props.resultsShown < 20 ||
                  props.resultsFound === props.resultsShown
                    ? ["d-none"]
                    : ["mx-auto"] + " " + ["restaurantPage"]
                }
                onClick={() => props.updateRestaurantList(20)}
                variant="success"
              >
                Next
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </Row>
  );
}

export default RestaurantList;
