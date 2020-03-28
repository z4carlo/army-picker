import React from "react";

function renderUnits (data) {
    console.log(data);
    return [].concat(data.NCUs.map((NCU, i) =>
    (
        <h4>
        {data.NCUs[i].unitInfo.name}
        </h4>
    )))
}

export default renderUnits;