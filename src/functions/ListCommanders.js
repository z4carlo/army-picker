import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./listOptions.css";
import RenderCommanders from '../components/RenderCommanders';

function ListCUOptions ({units, addCommander}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <div>
            <div className="unit" onClick={handleShow}>
                <img src="./Images/General/ASOIAF-RANDOMBUILDER-ADD-COMMANDER.png" class="header-logo mx-auto"/>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Combat Unit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div onClick={handleClose}>
                        <RenderCommanders units={units.items} addCommander={addCommander}/>
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