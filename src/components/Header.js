import React from "react";
import "./Header.css";
import { Row, Col} from "react-bootstrap"

function Header () {
        return (
            <Row>
             <Col xs={12}>
               <div class="position-relative">
                   <div class="header-style">

                       <img src="./Images/General/LOGO.png" class="header-logo mx-auto" />

                   </div>
               </div>
             </Col>
            </Row>
        );
    };

export default Header;