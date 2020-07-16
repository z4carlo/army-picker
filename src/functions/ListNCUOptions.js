import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./listOptions.css";
import RenderNCUOptions from '../components/RenderNCUOptions';
import filterPoints from './filterPoints';
import noRepeats from './noRepeats';

function ListNCUOptions ({options, addNCU, points, NCUs, units, haveArya}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var filteredunits = filterPoints(options.items, points);
    filteredunits = noRepeats(filteredunits, NCUs, units, haveArya);
  
    return (
        <div>
            <div className="unit" onClick={handleShow}>
                <img src={"./Images/General/NonCombat-Unit.png"} width="100%" height="auto"/>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Combat Unit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div onClick={handleClose}>
                        <RenderNCUOptions units={filteredunits} addNCU={addNCU}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
  }
  
export default ListNCUOptions;