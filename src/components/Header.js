import React from "react";

var style = {
    backgroundColor: "Grey",
    // borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    top: "0",
    height: "120px",
    width: "100%",
    opacity: "0.5",
};

var phantom = {
    display: 'block',
    padding: '0px',
    height: '120px',
    width: '100%',
  }

function Header () {
        return (
            <div>
                <div style={phantom}>
                </div>
                <div style={style}>
                    Header
                </div>
            </div>
        );
    };

export default Header;