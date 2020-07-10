import React from "react";
import { Row, Col} from "react-bootstrap"

const Factions = ({pickedFaction, chooseFaction, chooseChaos}) => (
    <Row>
        {!pickedFaction && <h3>Now Choose Faction</h3>}
        <Col xs={12} md={6} class="half-width">
            <Col xs={3}>
                <div onClick={event => chooseFaction(event, 0)}>
                    <div class="position-relative">
                        <img src="./Images/General/Neutral.png" class="header-logo mx-auto" />
                    </div>
                </div>
            </Col>
            <Col xs={3}>
                <div onClick={event => chooseFaction(event, 1)}>
                    <div class="position-relative">
                        <img src="./Images/General/Lannister.png" class="header-logo mx-auto" />
                    </div>
                </div>
            </Col>
            <Col xs={3}>
                <div onClick={event => chooseFaction(event, 2)}>
                    <div class="position-relative">
                        <img src="./Images/General/Stark.png" class="header-logo mx-auto" />
                    </div>
                </div>        
            </Col>
            <Col xs={3}>
                <div onClick={event => chooseFaction(event, 3)}>
                    <div class="position-relative">
                        <img src="./Images/General/NightsWatch.png" class="header-logo mx-auto" />
                    </div>
                </div>     
            </Col>
        </Col>
        <Col xs={12} md={6} class="half-width">
            <Col xs={3}>
                <div onClick={event => chooseFaction(event, 4)}>
                    <div class="position-relative">
                        <img src="./Images/General/FreeFolk.png" class="header-logo mx-auto" />
                    </div>
                </div>
            </Col>
            <Col xs={3}>
                <div onClick={event => chooseFaction(event, 5)}>
                    <div class="position-relative">
                        <img src="./Images/General/Baratheon.png" class="header-logo mx-auto" />
                    </div>
                </div>
            </Col>
            <Col xs={3}>
                <div onClick={event => chooseFaction(event, 6)}>
                    <div class="position-relative">
                        <img src="./Images/General/Targaryen.png" class="header-logo mx-auto" />
                    </div>
                </div>
            </Col>
            <Col xs={3}>
                <div onClick={chooseChaos}>
                    <div class="position-relative">
                        <img src="./Images/General/CHAOS.png" class="header-logo mx-auto" />
                    </div>
                </div>
            </Col>
        </Col>
    </Row>
);

export default Factions;