import React from "react";

function RenderAttachOptions ({units, addAttachment, j, handleClose}) {
    return [].concat(units.map((unit, i) =>
    (
        <div onClick={event => (handleClose, addAttachment(event, i, j))}>
            <img src={units[i].imgFile} width="100%" height="auto" responsive/>
        </div>
    )))
}

export default RenderAttachOptions;