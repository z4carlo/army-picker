import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./listOptions.css";
import Img from 'react-image';
import LoaderButton from "../components/LoaderButton";

function ListModal ({options}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const DrawImage2 = ({location}) => {console.log (location); return<Img width="100%" height="auto" src={location} />}
  
    return (
        <div>
            {/* <div className="unit" onClick={handleShow}>
                <DrawImage2 location={"./Images/General/Combat-Unit.png"}/>
            </div> */}
            {/* <div className="unit" onClick={handleShow}>
                <img src={"./Images/General/Combat-Unit.png"}/>
            </div> */}

            <LoaderButton
            block
            type="submit"
            bsSize="large"
            text="Upload My Tournament Lists"
            loadingText="Adding…"
            onClick={handleShow}
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Choose Combat Unit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{options}</h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
      );
  }
  
export default ListModal;