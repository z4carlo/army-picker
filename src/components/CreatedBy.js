import React from "react";

var style = {
    // borderTop: "1px solid #E7E7E7",
    textAlign: "left",
    padding: "20px",
    position: "fixed",
    left: "20%",
    bottom: "0",
    height: "100px",
    width: "60%",
    // opacity: "0.4",
    color: "White",
};


function CreatedBy () {
        return (
            <div style={style}>
                Brought to you by <a href="//mythicosstudios.com" target="_blank"><b>Mythicos Studios</b></a> and <a href="//asoiaf-stats.com" target="_blank"><b>asoiaf-stats.com</b></a>
            </div>
        );
    };

export default CreatedBy;