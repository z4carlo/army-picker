import React from "react";
import Img from 'react-image';

const DrawImage = ({location}) => {console.log(location); return<Img width="550" height="275" src={location} />};

function renderUnits (data) {
    console.log(data.units[0].imgFile);
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