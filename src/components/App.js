import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';

// Importing React Bootstrap Elements
import {Container, Col, Card, Button} from 'react-bootstrap';

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
            .then(data => this.setState({restaurantObj: data}))
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
                                    <Card className="restaurant-card">
                                        <Card.Header >
                                                {restaurant.restaurant.name}
                                        </Card.Header>
                                        <Card.Body> 
                                           <Card.Title>Average Rating: {restaurant.restaurant.user_rating.aggregate_rating}</Card.Title> 
                                           <Card.Text>Address</Card.Text>
                                           <Button>Details</Button>
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

