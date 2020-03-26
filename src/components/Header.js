import React from "react";

// Importing React Bootstrap Elements
import { Jumbotron, FormControl, Button, Form} from "react-bootstrap/";

//HEADER COMPONENT
const Header = props => {
  return (
    <Jumbotron
      className="text-center header-background"
      style={{ height: "75vh" }}
    >
      <h1 className="header">{props.title}</h1>
      <p className="subtitle">{props.subtitle}</p>

      <Form className="p-5 search-box-container mx-auto">
        <FormControl inline type="text" placeholder="Search" />
        <Button inline type="submit" variant="success" className="">Search</Button>
      </Form>
    </Jumbotron>
  );
};

export default Header;
