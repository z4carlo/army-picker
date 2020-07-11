import React from "react";

function RenderCUOptions ({units, addCU, handleClose}) {
    return [].concat(units.map((unit, i) =>
    (
        <div onClick={event => (handleClose, addCU(event, i))}>
            <img src={units[i].imgFile} width="100%" height="auto" responsive/>
        </div>
    )))
}

export default RenderCUOptions;