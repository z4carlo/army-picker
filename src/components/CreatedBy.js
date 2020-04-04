import React from "react";

var style = {
    // borderTop: "1px solid #E7E7E7",
    textAlign: "left",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "100px",
    width: "100%",
    // opacity: "0.4",
    color: "White",
};


function CreatedBy () {
        return (
            <div style={style}>
                Brought to you by <b>Mythicos Studios</b> and <a href="//asoiaf-stats.com" ><b>asoiaf-stats.com</b></a>
            </div>
        );
    };

export default CreatedBy;