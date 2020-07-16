import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./listOptions.css";
import RenderAttachOptions from '../components/RenderAttachOptions';
import filterPoints from './filterPoints';
import noRepeats from './noRepeats';
import attachmentMatch from './attachmentMatch';

function ListAttachOptions ({options, addAttachment, points, NCUs, units, haveArya, type, j}) {
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    var filteredunits = filterPoints(options.items, points);
    filteredunits = noRepeats(filteredunits, NCUs, units, haveArya);
    filteredunits = attachmentMatch(filteredunits, type);

    return (
        <div>
            <div className="unit" onClick={handleShow}>
                <img src={"./Images/General/NonCombat-Unit.png"} width="100%" height="auto"/>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Combat Unit
                        <Button onClick={handleToggle} bsStyle="primary">Show Full Cards</Button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RenderAttachOptions units={filteredunits} addAttachment={addAttachment} j={j} handleClose={handleClose} toggle={toggle}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
  }
  
export default ListAttachOptions;