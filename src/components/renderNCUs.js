import React from "react";
import Img from 'react-image';

const DrawImage = ({location}) => {console.log(location); return<Img width="200" height="275" src={location} />};

function renderUnits (data) {
    return [].concat(data.NCUs.map((NCU, i) =>
    (
        <h4>
            <div key={i}>
                <DrawImage location={data.NCUs[i].imgFile}/>
            </div>
        </h4>
    )))
}

export default renderUnits;