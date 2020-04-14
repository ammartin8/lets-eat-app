import React from "react";
import SearchCityName from './SearchCityName';

// Importing React Bootstrap Elements
import { Jumbotron } from "react-bootstrap";

//HEADER COMPONENT
const Header = props => {
  return (
    <Jumbotron
      id="main-header"
      className="text-center header-background"
      style={{ height: "75vh" }}
    >
      <h1 className="header">{props.title}</h1>
      <p className="subtitle">{props.subtitle}</p>

    <SearchCityName 
      searchTerm={props.query}
      handleValueChange={props.handleValueChange}
      results={props.results}
      changeCity={props.changeCity}
    />
      
    </Jumbotron>
  );
};

export default Header;
