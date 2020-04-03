import React from "react";
import Img from 'react-image';
import { Panel } from "react-bootstrap";

const DrawImage = ({location}) => <Img width="84%" height="auto" src={location} />

function renderUnits (data) {
    return [].concat(data.NCUs.map((NCU, i) =>
    (
        
            <Panel>
                <DrawImage location={data.NCUs[i].imgFile}/>
                {/* <h4>{data.NCUs[i].name}</h4> */}
            </Panel>
        
    )))
}

export default renderUnits;