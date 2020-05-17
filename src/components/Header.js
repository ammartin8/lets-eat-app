import React from "react";
import SearchCityName from "./SearchCityName";

import { Jumbotron } from "react-bootstrap";

function Header(props) {
  return (
    <>
      <Jumbotron
        id="main-header"
        className="text-center header-background"
        style={{ height: "75vh" }}
      >
        <h1 className="header">Let's Eat!</h1>
        <p className="subtitle">Discover Your New Favorite Restaurant</p>

        <SearchCityName
          cityId={props.cityId}
          cuisineId={props.cuisineId}
          resultsStart={props.results_start}
          updateRestaurantList={props.updateRestaurantList} //updates list of restaurant by city
          updateCuisineID={props.updateCuisineID} // updates cuisine ID selected onClick
          updateEstablishmentID={props.updateEstablishmentID} // updates establishment ID selected onClick
          resetResultStart={props.resetResultStart} // resets result start number to zero onClick
        />
      </Jumbotron>
    </>
  );
};

export default Header;
