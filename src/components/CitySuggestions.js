import React from "react";

// Generate Dropdown box
const CitySuggestions = props => {
  /* TODO:
        1. map the list of options  based on user input
        2. Move search option below search bar (if possible)
        3. Show or hide option display based on handleValueChange*/
  const options = props.results.map(cities => (
    <li key={cities.id}>{cities.name}</li>
  ));
  return <ul className="city-suggestions">{options}</ul>;
};

export default CitySuggestions;
