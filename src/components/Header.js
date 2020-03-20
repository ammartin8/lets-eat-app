import React from "react";


//HEADER COMPONENT
const Header = (props) => {
    return (
        <div className="header-bg">
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
            <img src={require("../images/headerImg.jpg")} alt=""/>
        </div>
    )
} 

export default Header;