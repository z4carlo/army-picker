import React from "react";
import Img from 'react-image';
import { Panel } from "react-bootstrap";

const DrawImage = ({location}) => <Img 
width="100%" height="auto" 
src={location} 
// responsive
/>;

function renderUnits (data) {
    console.log(data.units[0].attachment.token);
    return [].concat(data.units.map((unit, i) =>
    (
        
        <Panel>
            <DrawImage location={data.units[i].imgFile}/>
            
        </Panel>
        // <h4>{data.units[i].name}</h4>
    )))
}

export default renderUnits;