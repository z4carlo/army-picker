import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./listOptions.css";
import RenderCUOptions from '../components/RenderCUOptions';
import filterPoints from './filterPoints';
import noRepeats from './noRepeats';
import attachmentMatch from './attachmentMatch';

function ListCUOptions ({options, faction, neutral, addCU, points, NCUs, units, haveArya, j, type, commander}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    var filteredunits = filterPoints(options.items, points);
    filteredunits = noRepeats(filteredunits, NCUs, units, haveArya, commander);
    if (type !== undefined) {
        filteredunits = attachmentMatch(filteredunits, type);
    }

    return (
        <div>
            <div className="unit" onClick={handleShow}>
                <img src={"./Images/General/Combat-Unit.png"} width="100%" height="auto"/>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Combat Unit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div onClick={handleClose}>
                        <RenderCUOptions units={filteredunits} addCU={addCU} j={j}/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
  }
  
export default ListCUOptions;