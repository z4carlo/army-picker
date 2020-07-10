import React from "react";
import { Row, Col} from "react-bootstrap"

const Factions = ({commander, addCommander, pickedFaction, neutrals, setNeutral, faction, chaos}) => (
    <Row>
        <Col xs={12} md={6}>
        {!commander && pickedFaction && <div onClick={addCommander}>
            <h3>Lets Get Started</h3>
                <img src="./Images/General/ASOIAF-RANDOMBUILDER-ADD-COMMANDER.png" width="20%" height="auto"/>
            <h3>Add Commander</h3>
        </div>}
        </Col>
        <Col xs={12} md={6}>
        {faction !== 0 && faction !== 4 && !commander &&<h3>Include Neutrals</h3>}
        {faction !== 0 && faction !== 4 && !commander && (neutrals === false) && <div onClick={event => setNeutral(event)}>
        <div class="image3">
        <DrawImage3 location={"./Images/General/ASOIAF-RANDOMBUILDER-SWITCH-OFF.png"}/>
        </div>
        </div>}
        {faction !== 0 && faction !== 4 && !commander && (neutrals === true) && <div onClick={event => setNeutral(event)}>
        <div class="image3">
        <DrawImage3 location={"./Images/General/ASOIAF-RANDOMBUILDER-SWITCH-ON.png"}/>
        </div>          
        </div>}
        </Col>
        <Col xs={3} md={3}>
        {chaos && commander && <h3>Tactics Deck</h3>}
        {!chaos && commander && <h3>Faction</h3>}
        {commander && faction === 0 && <DrawToken location={"./Images/General/NEUTRAL-SIGIL.png"}/>}
        {commander && faction === 1 && <DrawToken location={"./Images/General/SIGIL-LANNISTER.png"}/>}
        {commander && faction === 2 && <DrawToken location={"./Images/General/STARK-SIGIL.png"}/>}
        {commander && faction === 3 && <DrawToken location={"./Images/General/NW-SIGIL.png"}/>}
        {commander && faction === 4 && <DrawToken location={"./Images/General/FF-SIGIL.png"}/>}
        </Col>
        <Col xs={3} md={3}>
        <div class="image">
            {commander && <h3>Total Army Size</h3>}
            {max === 30 && commander && <img src="./Images/General/PointCounter-Container2-30PTS.png" width="50%" height="auto"/>}
            {max === 40 && commander && <img src="./Images/General/PointCounter-Container2-40PTS.png" width="50%" height="auto"/>}
            {max === 50 && commander && <img src="./Images/General/PointCounter-Container2-50PTS.png" width="50%" height="auto"/>}
        </div>
        </Col>
        <Col xs={3} md={3}>
        {commander && <h3>Commander</h3>}
        {NCUs.length>0 && NCUs[0].token && RenderNCUCommander()}
        {units.length>0 && units[0].attachment.token && RenderCUCommander()}
        </Col>
        <Col xs={3} md={3}>
        {commander && neutrals && <h3>Neutrals On</h3>}
        {/* {commander && neutrals &&  <DrawImage3 location={"./Images/General/ASOIAF-RANDOMBUILDER-SWITCH-ON.png"}/>} */}
        {commander && !neutrals && faction !== 0 && <h3>Neutrals Off</h3>}
        {/* {commander && !neutrals &&  <DrawImage3 location={"./Images/General/ASOIAF-RANDOMBUILDER-SWITCH-OFF.png"}/>} */}
        <div class="image2">
        {commander && <div onClick={clearAll}>
            <h3>Clear All</h3>
            <DrawTrash location={"./Images/General/Clear-All.png"}/>
        </div>}
        </div>
        </Col>
    </Row>
);

export default Factions;