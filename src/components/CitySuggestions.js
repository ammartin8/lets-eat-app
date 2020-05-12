import React from "react";

function CitySuggestions(props) {
  return (
    <ul className="city-suggestions">
    {props.results.map((cities) => (
      <li key={cities.id} altid={cities.id}>
          <button
            className="city-option-button"
            onClick={props.handleClick(cities.id)}
          >
            {cities.name}
          </button>
      </li>
    ))}
  </ul>
  )
};

export default CitySuggestions;

/* TODO:
        1. map the list of options  based on user input
        2. Move search option below search bar (if possible)
        3. Show or hide option display based on handleValueChange
        4. Onclick output id and send to fetchRestaurants method in App.js*/
