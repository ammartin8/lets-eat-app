import React from "react";

function CitySuggestions(props) {
  return (
    <>
      {props.query !== "" ? (
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
      ) : (
        <ul className="d-none"></ul>
      )}
      ;
    </>
  );
}

export default CitySuggestions;
