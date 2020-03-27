import React from "react";

function renderUnits (data) {
    return [].concat(data.units.map((unit, i) =>
    (
        <h4>
        {data.combatUnits[0].items[unit.id].name}
        </h4>
    )))
}

export default renderUnits;