import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./listOptions.css";
import RenderCommanders from '../components/RenderCommanders';

function ListCUOptions ({units, faction, neutral, addCommander}) {
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var options = units.items;
    if (neutral !== undefined) {
        if (faction !== 0 && faction !== 4) {
            options = units.items.concat(neutral.items);
        }
    }
    console.log(options);
  
    return (
        <div>
            <div className="unit" onClick={handleShow}>
                <img src="./Images/General/ASOIAF-RANDOMBUILDER-ADD-COMMANDER.png" class="header-logo mx-auto"/>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Commander
                        <Button onClick={handleToggle} bsStyle="primary">Show Full Cards</Button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RenderCommanders units={options} addCommander={addCommander} handleClose={handleClose} toggle={toggle}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
  }
  
export default ListCUOptions;