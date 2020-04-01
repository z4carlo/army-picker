import React from "react";
import Img from 'react-image';

const DrawImage = ({location}) => <Img width="370" height="200" src={location} />;

function renderUnits (data) {
    return [].concat(data.units.map((unit, i) =>
    (
        <h4>
            <div key={i}>
                <DrawImage location={data.units[i].imgFile}/>
            </div>
            {data.units[i].name}
        </h4>
    )))
}

export default renderUnits;