import React, { Component } from "react";
import Header from './Header';

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
            <div>
                <Header 
                    title="Let's Eat!" 
                    subtitle="Your New Favorite Restaurant Awaits"
                />
                <ul>
                    {this.state.restaurantObj.restaurants.map(restaurant => (
                        <li className="restaurant-card">
                            {restaurant.restaurant.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

