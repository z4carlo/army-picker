import React from "react";

function renderUnits (data) {
    return [].concat(data.NCUs.map((NCU, i) =>
    (
        <h4>
        {data.nonCombatUnits[0].items[NCU.id].name}
        </h4>
    )))
}

export default renderUnits;