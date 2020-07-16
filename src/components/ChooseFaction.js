import React from "react";
import { Row, Col} from "react-bootstrap"

const Factions = ({faction, chooseFaction}) => (
        <Col xs={12} md={6}>
        {<h3>Choose Faction</h3>}
            <Row>
                <Col xs={3}>
                    <div onClick={event => chooseFaction(event, 0)}>
                        <div class="position-relative">
                            {faction === 0 && <img src="./Images/General/Neutral.png" class="header-logo mx-auto" />}
                            {faction !== 0 && <img src="./Images/General/NeutralOff.png" class="header-logo mx-auto" />}
                        </div>
                    </div>
                </Col>
                <Col xs={3}>
                    <div onClick={event => chooseFaction(event, 1)}>
                        <div class="position-relative">
                            {faction === 1 && <img src="./Images/General/Lannister.png" class="header-logo mx-auto" />}
                            {faction !== 1 && <img src="./Images/General/LannisterOff.png" class="header-logo mx-auto" />}
                        </div>
                    </div>
                </Col>
                <Col xs={3}>
                    <div onClick={event => chooseFaction(event, 2)}>
                        <div class="position-relative">
                            {faction === 2 && <img src="./Images/General/Stark.png" class="header-logo mx-auto" />}
                            {faction !== 2 && <img src="./Images/General/StarkOff.png" class="header-logo mx-auto" />}
                        </div>
                    </div>        
                </Col>
                <Col xs={3}>
                    <div onClick={event => chooseFaction(event, 3)}>
                        <div class="position-relative">
                            {faction === 3 && <img src="./Images/General/NightsWatch.png" class="header-logo mx-auto" />}
                            {faction !== 3 && <img src="./Images/General/NightsWatchOff.png" class="header-logo mx-auto" />}
                        </div>
                    </div>     
                </Col>
            </Row>
            <Row>
                <Col xs={3}>
                    <div onClick={event => chooseFaction(event, 4)}>
                        <div class="position-relative">
                            {faction === 4 && <img src="./Images/General/FreeFolk.png" class="header-logo mx-auto" />}
                            {faction !== 4 && <img src="./Images/General/FreeFolkOff.png" class="header-logo mx-auto" />}
                        </div>
                    </div>
                </Col>
                <Col xs={3}>
                    <div onClick={event => chooseFaction(event, 5)}>
                        <div class="position-relative">
                            {faction === 5 && <img src="./Images/General/Baratheon.png" class="header-logo mx-auto" />}
                            {faction !== 5 && <img src="./Images/General/BaratheonOff.png" class="header-logo mx-auto" />}
                        </div>
                    </div>
                </Col>
                <Col xs={3}>
                    <div onClick={event => chooseFaction(event, 6)}>
                        <div class="position-relative">
                            {faction === 6 && <img src="./Images/General/Targaryen.png" class="header-logo mx-auto" />}
                            {faction !== 6 && <img src="./Images/General/TargaryenOff.png" class="header-logo mx-auto" />}
                        </div>
                    </div>
                </Col>
                <Col xs={3}>
                    {/* <div onClick={chooseChaos}>
                        <div class="position-relative">
                            <img src="./Images/General/CHAOS.png" class="header-logo mx-auto" />
                        </div>
                    </div> */}
                </Col>
            </Row>
        </Col>
);

export default Factions;