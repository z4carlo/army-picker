import React from "react";

var style = {
    backgroundImage: "url('./Images/General/Header-Wide.png')",
    backgroundSize: "100% 100%",
    position: "fixed",
    left: "0%",
    top: "0px",
    height: "200px",
    width: "100%",
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