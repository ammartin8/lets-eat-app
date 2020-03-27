import React from "react";

// Importing React Bootstrap Elements
import { Jumbotron, FormControl, Button, InputGroup } from "react-bootstrap";

//HEADER COMPONENT
const Header = props => {
  return (
    <Jumbotron
      className="text-center header-background"
      style={{ height: "75vh" }}
    >
      <h1 className="header">{props.title}</h1>
      <p className="subtitle">{props.subtitle}</p>

      <InputGroup size="md" className="search-box-container mx-auto py-3">
        <FormControl
          type="text"
          placeholder="Enter City Name"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
        <InputGroup.Append>
          <Button type="submit" variant="success">
            Explore
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Jumbotron>
  );
};

export default Header;
