import React from "react";
import "./Header.css";
import { Row, Col} from "react-bootstrap"

const Points = ({setTotal}) => (
        <Col xs={12} md={6}>
            <Row>
                <h3>Choose Points Limit</h3>
                <Col xs={4} md={4}>
                    <div onClick={event => setTotal(event, 30)}>
                        <div class="position-relative">
                            <img src="./Images/General/PointCounter-Container2-30PTS.png" class="header-logo mx-auto" />
                        </div>
                    </div>
                </Col>
                <Col xs={4} md={4}>
                    <div onClick={event => setTotal(event, 40)}>
                        <div class="position-relative">
                            <img src="./Images/General/PointCounter-Container2-40PTS.png" class="header-logo mx-auto" />
                        </div>
                    </div>
                </Col>
                <Col xs={4} md={4}>
                    <div onClick={event => setTotal(event, 50)}>
                        <div class="position-relative">
                            <img src="./Images/General/PointCounter-Container2-50PTS.png" class="header-logo mx-auto" />
                        </div>
                    </div>
                </Col>
            </Row>
        </Col>
);

export default Points;