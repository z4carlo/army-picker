import React from "react";

function renderUnits (data) {
    return [].concat(data.units.map((unit, i) =>
    (
        <h4>
        {data.units[i].unitInfo.name}
        </h4>
    )))
}

export default renderUnits;