import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';

// Importing React Bootstrap Elements
import {Container, Col, Row, Card} from 'react-bootstrap';

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
            restaurants: []
        }
    }

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

    generateList(data) {
        
    }

    //FETCH FUNCTIONS
    fetchRestaurants = () => {
        fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=59&entity_type=city&apikey=${config.apiKey}`)
            .then(this.checkStatus)
            .then(res => res.json())
            .then(data => {
                    console.log(data);
                    this.setState({restaurantObj: data});
                }
            )
            .catch(error => console.log('You got error: ', error))
    }
    

    

    render() {
        return (
                <>
                <Header 
                    title="Let's Eat!" 
                    subtitle="Your New Favorite Restaurant Awaits"
                />
                
                <Container>
                    <Col>
                        <ul>
                            {this.state.restaurantObj.restaurants.map(restaurant => (
                                <Card className="restaurant-card my-4">
                                    <Card.Header >
                                            <p className="m-0 h4">{restaurant.restaurant.name}</p>
                                    </Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col>
                                                <img className="img-fluid width: auto max-height: 100px" src={restaurant.restaurant.featured_image} alt="" />
                                            </Col> 
                                            <Col>
                                                <Card.Title>Average Rating: {restaurant.restaurant.user_rating.aggregate_rating}</Card.Title> 
                                                <Card.Text>Address</Card.Text>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            ))}
                        </ul>
                    </Col>
                </Container>
                <Gallery title="Here will Lie a Gallery" />
                <Footer title="Here will Lie A Footer" />
                </>
        )
    }
}

