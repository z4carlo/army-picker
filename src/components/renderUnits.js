import React from "react";

function renderUnits (data) {
    return [].concat(data.units.map((unit, i) =>
    (
        <h4>
        {data.units[i].name}<br></br>
        {data.units[i].cost}
        </h4>
    )))
}

export default renderUnits;