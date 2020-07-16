import React from "react";

function RenderCommanders ({units, addCommander}) {
    return [].concat(units.map((unit, i) =>
    (
        <div onClick={event => addCommander(event, i)}>
            <img src={units[i].thumb} width="100%" height="auto" responsive/>
        </div>
    )))
}

export default RenderCommanders;