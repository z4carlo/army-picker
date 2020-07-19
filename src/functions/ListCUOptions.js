import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./listOptions.css";
import RenderCUOptions from '../components/RenderCUOptions';
import filterPoints from './filterPoints';
import noRepeats from './noRepeats';
import attachmentMatch from './attachmentMatch';

function ListCUOptions ({options, faction, neutral, addCU, points, NCUs, units, haveArya, j, type, commander}) {
    const [show, setShow] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    var allUnits = options.items;
    if (neutral !== undefined) {
        if (faction !== 0 && faction !== 4) {
            allUnits = options.items.concat(neutral.items);
        }
    }
    let filteredUnits = filterPoints(allUnits, points);
    filteredUnits = noRepeats(filteredUnits, NCUs, units, haveArya, commander);
    if (type !== undefined) {
      filteredUnits = attachmentMatch(filteredUnits, type);
    }
    console.log('filteredUnits', filteredUnits);

    return (
        <div>
            <div className="unit" onClick={handleShow}>
                <img src={"./Images/General/Combat-Unit.png"} width="100%" height="auto"/>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Combat Unit
                        <Button onClick={handleToggle} bsStyle="primary">Show Full Cards</Button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RenderCUOptions units={filteredUnits} addCU={addCU} j={j} handleClose={handleClose} toggle={toggle}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
  }
  
export default ListCUOptions;