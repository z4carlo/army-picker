import React from "react";

function RenderCUOptions ({units, addCU, j}) {
    return [].concat(units.map((unit, i) =>
    (
        <div onClick={event => addCU(event, i, j)}>
            <img src={units[i].thumb} width="100%" height="auto" responsive/>
        </div>
    )))
}

export default RenderCUOptions;