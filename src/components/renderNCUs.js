import React from "react";
import Img from 'react-image';

const DrawImage = ({location}) => <Img width="140" height="200" src={location} />

function renderUnits (data) {
    return [].concat(data.NCUs.map((NCU, i) =>
    (
        <h4>
            <div key={i}>
                <DrawImage location={data.NCUs[i].imgFile}/>
            </div>
            {data.NCUs[i].name}
        </h4>
    )))
}

export default renderUnits;