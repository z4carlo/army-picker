import React from "react";
import "./Header.css";

var style = {
    backgroundImage: "url('./Images/General/Header-Blank.jpg')",
    backgroundSize: "100% 100%",
    // position: "fixed",
    top: "0px",
    height: "200px",
    width: "auto%",
};

var center = {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "auto",
    height: "200px",
  }

function Header () {
        return (
            <div>
                <div style={style}>

                    <img src="./Images/General/LOGO.png" style={center}/>

                </div>
            </div>
        );
    };

export default Header;