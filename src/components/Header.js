import React from "react";

// Importing React Bootstrap Elements
import Jumbotron from 'react-bootstrap/Jumbotron';

//HEADER COMPONENT
const Header = (props) => {
    return (
        <Jumbotron className="text-center header-background text-white" style={{height: '50vh'}}>
            <h1 className="header">{props.title}</h1>
            <p className="subtitle">{props.subtitle}</p>
        </Jumbotron>
    )
} 

export default Header;