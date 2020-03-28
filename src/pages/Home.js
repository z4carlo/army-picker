import React, { useState } from "react";
import "./Home.css";
import commanders from "../units/commanders"
import combatUnits from "../units/combatUnits"
import nonCombatUnits from "../units/nonCombatUnits"
import attachments from "../units/attachments"
import pickRandom from "../functions/pickRandom"
import { Grid, Row, Col } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton"
import RenderUnits from "../components/renderUnits"
import RenderNCUs from "../components/renderNCUs"
import RenderAttachments from "../components/renderAttachments"


export default function Home(props) {

  const [commander, setCommander] = useState([]);
  const [units, setUnits] = useState([]);
  const [NCUs, setNCUs] = useState([]);
  const [attachment, setAttachment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pointsLeft, setPointsLeft] = useState(40);

  function addCommander(event) {
    event.preventDefault();
    const newcommander = commander.concat(pickRandom(commanders[0].items));
    setCommander(newcommander);
    console.log(newcommander[0]);
  };

  function addCombatUnit(event) {
    event.preventDefault();
    const unit = units.concat(pickRandom(combatUnits[0].items));
    setUnits (unit);
    const empty = {name: "None"}
    const attach = attachment.concat(empty);
    setAttachment(attach);
    setPointsLeft(pointsLeft-(unit[unit.length-1].unitInfo.cost));
    console.log(attachment)
  };

  function addNCU(event) {
    event.preventDefault();
    const NCU = NCUs.concat(pickRandom(nonCombatUnits[0].items));
    setNCUs(NCU);
    setPointsLeft(pointsLeft-(NCU[NCU.length-1].unitInfo.cost));
  };

  function addAttachment(event) {
    event.preventDefault();
    const attach = attachment.concat(pickRandom(attachments[0].items));
    setAttachment(attach);
    console.log(attach);
    setPointsLeft(pointsLeft-(attach[attach.length-1].unitInfo.cost));
  };


  function renderPage() {
    return (
    <div className="Home">
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            {commander.length>0 && <h4>{commander[0].unitInfo.name}</h4>}
            {commander.length == 0 && <form onSubmit={addCommander}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              isLoading={isLoading}
              // disabled={!validateAdd()}
              text="Add Commander"
              loadingText="Adding…"
            />     
            </form>} 
          </Col>
          <Col xs={12} md={3}>
            {NCUs.length>0 &&<RenderNCUs
              nonCombatUnits={nonCombatUnits}
              NCUs={NCUs}
            />}            
            <form onSubmit={addNCU}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              isLoading={isLoading}
              // disabled={!validateAdd()}
              text="Add NCU"
              loadingText="Adding…"
            />     
            </form>        
          </Col>
          <Col xs={12} md={3}>
            {units.length>0 &&<RenderUnits
              combatUnits={combatUnits}
              units={units}
            />}
            <form onSubmit={addCombatUnit}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              isLoading={isLoading}
              // disabled={!validateAdd()}
              text="Add Combat Unit"
              loadingText="Adding…"
            />     
            </form>       
          </Col>
          <Col xs={12} md={3}>
            {attachment.length>0 &&<RenderAttachments
              attachment={attachment}
            />}
            <form onSubmit={addAttachment}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              isLoading={isLoading}
              // disabled={!validateAdd()}
              text="Add Attachment"
              loadingText="Adding…"
            />     
            </form>       
          </Col>
        </Row>
        <Row>
          <h4><b>{pointsLeft}</b></h4>
        </Row>
      </Grid>
    </div>
  );
  }
  
  return (
    <div className="Home">
    {renderPage()}
  </div>
  )
}