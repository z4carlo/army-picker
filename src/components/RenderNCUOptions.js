import React from "react";

function RenderNCUOptions ({units, addNCU, handleClose}) {
    console.log(units);
    return [].concat(units.map((unit, i) =>
    (
        <div onClick={event => (handleClose, addNCU(event, i))}>
            <img src={units[i].imgFile} width="100%" height="auto" responsive/>
        </div>
    )))
}

export default RenderNCUOptions;