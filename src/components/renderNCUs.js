import React from "react";
import { Button } from "react-bootstrap"
import Img from 'react-image';

const DrawImage = ({location}) => <Img width="100%" height="auto" src={location} />

function renderUnits ({NCUs, removeNCU}) {
    console.log(NCUs);
    return [].concat(NCUs.map((NCU, i) =>
    (
        <div>
            <DrawImage location={NCUs[i].imgFile}/>
            <div onClick={event => removeNCU(event, i)}>
                <Button bsStyle="primary">Remove</Button>
            </div>
        </div>
    )))
}

export default renderUnits;