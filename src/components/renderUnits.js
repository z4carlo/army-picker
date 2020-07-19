import React from "react";
import { Button } from "react-bootstrap"
import Img from 'react-image';
import ListCUOptions from "../functions/ListCUOptions"

const DrawImage = ({location}) => <Img 
width="100%" height="auto" 
src={location} 
responsive
/>;

function UnitCard ({unit, faction, neutral, i, options, addCU, points, NCUs, units, haveArya}) {
    if (unit.imgFile !== undefined) {
        return(
            <DrawImage location={unit.imgFile}/>
        )
    }
    if (unit.imgFile === undefined) {
        return(
            <div>
                <ListCUOptions options={options} faction={faction} neutral={neutral} addCU={addCU} points={points} NCUs={NCUs} units={units} haveArya={haveArya} j={i} type={units[i].attachment.type}/>
            </div>
        )
    }
}

function renderUnits ({units, faction, neutral, removeCU, options, addCU, points, NCUs, haveArya}) {
    return [].concat(units.map((unit, i) =>
    (
        <div>
            <UnitCard unit={unit} faction={faction} neutral={neutral} i={i} options={options} addCU={addCU} points={points} NCUs={NCUs} haveArya={haveArya} units={units}/>
            {unit.name !== "" && <div onClick={event => removeCU(event, i)}>
                <Button bsStyle="primary">Remove</Button>
            </div>}
        </div>
    )))
}

export default renderUnits;