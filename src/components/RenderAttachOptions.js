import React, { useState } from "react";
import { Row, Col, Button} from "react-bootstrap"

function RenderAttachOptions ({units, addAttachment, j, handleClose, toggle}) {
    return [].concat(units.map((unit, i) =>
    (
        <div>
            <div onClick={event => addAttachment(event, i, j)}>
                <div onClick={handleClose}>
                    <Row>
                        <Col xs={3}>
                            <img src={units[i].thumb} width="100%" height="auto" responsive rounded/>
                        </Col>
                        <Col>
                            <p>{units[i].name} {units[i].Loyalty !== undefined && <span>- (Loyalty: {units[i].Loyalty})</span>}</p>{units[i].subName && <p> - {units[i].subName}</p>} <p>({units[i].cost})</p> <p>{units[i].type}</p>
                        </Col>
                    </Row>
                </div>
            </div>
            {toggle && <Row>
                <Col xs={6}>
                    <img src={units[i].imgFile} width="100%" height="auto" responsive/>
                </Col>
                <Col xs={6}>
                    <img src={units[i].imgFile2} width="100%" height="auto" responsive/>
                </Col>
            </Row>}
        </div>
    )))
}

export default RenderAttachOptions;