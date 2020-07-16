import React from "react";

function RenderNCUOptions ({units, addNCU}) {
    console.log(units);
    return [].concat(units.map((unit, i) =>
    (
        <div onClick={event => addNCU(event, i)}>
            <img src={units[i].thumb} width="100%" height="auto" responsive/>
        </div>
    )))
}

export default RenderNCUOptions;