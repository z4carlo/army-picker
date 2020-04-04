import React from "react";

var style = {
    backgroundImage: "url('./Images/General/Header-1.png')",
    backgroundSize: "100% 120%",
    position: "fixed",
    left: "20%",
    top: "0px",
    height: "200px",
    width: "60%",
};

function Header () {
        return (
            <div>
                <div style={style}>
                </div>
            </div>
        );
    };

export default Header;