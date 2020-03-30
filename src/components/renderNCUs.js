import React from "react";

function renderUnits (data) {
    return [].concat(data.NCUs.map((NCU, i) =>
    (
        <h4>
        {data.NCUs[i].name}<br></br>
        {data.NCUs[i].cost}
        </h4>
    )))
}

export default renderUnits;