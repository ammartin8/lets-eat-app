# Project Title: Let's Eat\!

***

> Author: Amah Martin
>
> Last Updated: 3-11-2020

## Table of Contents

* Project Summary
* Technical Summary
* Features
* Milestones
* Requirements to Run the Application

## Project Summary

This is a React application that will allow users to search for resturants by various criteria such as city, type of restaurant and more.

## Technical Summary

The following technologies are used to build this application:

* React JS
  * This project was bootstrapped with [Create React App](https://github.com/facebook/create*react*app).
* Node JS
* Bootstrap
* Zomato API
  * Background: The Zomato API can be used to access over 1.5 million restaurants across 10,000 cities. Learn more about the Zomato API [here.](https://developers.zomato.com/)
  * The following endpoints that will be used in this project include:
    * GET cities
    * GET cuisines
    * GET establishments
  * Learn more about the various optional endpoints that can be used [here.](https://developers.zomato.com/documentation)

## Features

* Core Features will include the following\:
    1. User will have the ability to type in any city in the search bar and see list of restaurants available based on user's input. 
    2. User will have the ability to click on a restaurant and see additional details about the selected restaurant 
    3. User will have the ability to filter list of results by restaurant type (establishment), cuisine type, restaurant category (ex. Nightlife)

* Additional Features based upon time\:
    1. User will have the ability to type in any city location in the search bar and have the option to see a map of where restaurants are located in selected city 
    2. User will have the ability to filter results in map mode.

## Milestones

1. Fetch data from Zomato API (Week 4)
2. Create a function that will display list of restaurants based on user's input (City Name/State/Country and type of cuisine) on click.
3. Render data in the DOM (Week 5)
4. Create a function that will filter results based on user input (Week 6)
5. Work on styling, UX and UI (Week 7)

## Requirements to Run Application

* Make a pull request or download the files from the GitHub respository.
* Create an .env file and save it in the lets-eat-restaurant-app main folder.
* In the .env file type (without the quotation marks) "REACT_APP_API_KEY =" and enter your actual API KEY then save.
* Be sure to have npm or yarn install on your computer.
  * Once installed\:
    * Open your terminal
    * Change directory or cd into the folder containing the files.
    * `npm start` to start the application.
