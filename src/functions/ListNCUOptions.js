import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./listOptions.css";
import RenderNCUOptions from '../components/RenderNCUOptions';
import filterPoints from './filterPoints';
import noRepeats from './noRepeats';

function ListNCUOptions ({options, faction, neutral, addNCU, points, NCUs, units, haveArya}) {
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
    filteredUnits = noRepeats(filteredUnits, NCUs, units, haveArya);
    console.log('filteredUnits', filteredUnits);
  
    return (
        <div>
            <div className="unit" onClick={handleShow}>
                <img src={"./Images/General/NonCombat-Unit.png"} width="100%" height="auto"/>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose NCU
                        <Button onClick={handleToggle} bsStyle="primary">Show Full Cards</Button>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <RenderNCUOptions units={filteredUnits} addNCU={addNCU} handleClose={handleClose} toggle={toggle}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
  }
  
export default ListNCUOptions;