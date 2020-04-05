import React from "react";

var style = {
    backgroundColor: "Grey",
    // borderTop: "1px solid #E7E7E7",
    textAlign: "right",
    padding: "20px",
    position: "fixed",
    left: "20%",
    bottom: "0",
    height: "100px",
    width: "60%",
    opacity: "0.4",
    color: "White",
};

var phantom = {
    display: 'block',
    padding: '0px',
    height: '150px',
    width: '100%',
  }

function Footer () {
        return (
            <div>
            <div style={phantom}>
            </div>
            <div style={style}>
            This site is 100% unofficial and is not supported by or affiliated with CMON Games. <br></br>
                All Rights Reserved. <br></br>
                A Song of Ice and Fire: Tabletop Miniatures Game logo, CMON, and CMON logo are registered trademarks of CMON Global Limited.
            </div>
            </div>
        );
    };

export default Footer;