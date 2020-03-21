import React from "react";


//HEADER COMPONENT
const Header = (props) => {
    return (
        <div className="header-bg">
            <img src={require("../images/headerImg.jpg")} alt="" className="header-image"/>
            <h1 className="main-title">{props.title}</h1>
            <p className="subtitle">{props.subtitle}</p>
        </div>
    )
} 

export default Header;