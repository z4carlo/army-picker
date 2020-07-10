import React from "react";
import { Button } from "react-bootstrap"
import Img from 'react-image';

const DrawImage = ({location}) => <Img 
width="100%" height="auto" 
src={location} 
responsive
/>;

function renderUnits ({units, removeCU}) {
    return [].concat(units.map((unit, i) =>
    (
        
        <div>
            <DrawImage location={units[i].imgFile}/>
            <div onClick={event => removeCU(event, i)}>
                <Button bsStyle="primary">Remove</Button>
            </div>
        </div>
        // <h4>{data.units[i].name}</h4>
    )))
}

export default renderUnits;