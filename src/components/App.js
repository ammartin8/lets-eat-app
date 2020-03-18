import React, { Component } from "react";

const config = {
    apiKey: `${process.env.REACT_APP_API_KEY}`
};   

/*TODOS:
1. Fetch data from Zomato API
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


    fetchRestaurants = () => {
        fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=59&entity_type=city&apikey=${config.apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data); //map through dat!
            })
            .catch(error => {console.log("You have an error ", error)});
    };
    
    render() {
        return (
            <div>
                <h1>Hello, World</h1>
                <ul>
                    {this.state.restaurantObj.restaurants.map(restaurant => (
                        <li>
                            {restaurant.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

