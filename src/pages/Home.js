import React, { useState } from "react";
import "./Home.css";
import commanders from "../units/commanders"
import combatUnits from "../units/combatUnits"
import nonCombatUnits from "../units/nonCombatUnits"
import attachments from "../units/attachments"
import pickRandom from "../functions/pickRandom"
import filterPoints from "../functions/filterPoints"
import noRepeats from "../functions/noRepeats"
import { Grid, Row, Col } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton"
import RenderUnits from "../components/renderUnits"
import RenderNCUs from "../components/renderNCUs"


export default function Home(props) {

  const [commander, setCommander] = useState([]);
  const [units, setUnits] = useState([]);
  const [NCUs, setNCUs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pointsLeft, setPointsLeft] = useState(40);

  function addCommander(event) {
    event.preventDefault();
    const newcommander = pickRandom(commanders[0].items);
    console.log(newcommander);
    units[0] = {name: "", attachment: newcommander};
    setPointsLeft(pointsLeft-(newcommander.cost));
    setCommander(newcommander);
    console.log(units);
  };

  function addCombatUnit(event) {
    event.preventDefault();
    var filteredData = filterPoints(combatUnits[0].items, pointsLeft);
    filteredData = noRepeats(filteredData, commander, NCUs, units, attachments);
    if (filteredData.length > 0) {
      if (units[0].name == "") {
        let newUnit = pickRandom(filteredData);
        newUnit.attachment = units[0].attachment 
        units[0] = newUnit;
      }
      else {
        const unit = units.concat(pickRandom(filteredData));
        setUnits (unit);
      }
      setPointsLeft(pointsLeft-(units[units.length-1].cost));
      console.log(units);
    }
  };

  function addNCU(event) {
    event.preventDefault();
    var filteredData = filterPoints(nonCombatUnits[0].items, pointsLeft);
    filteredData = noRepeats(filteredData, commander, NCUs, units, attachments);
    if (filteredData.length > 0) {
    const NCU = NCUs.concat(pickRandom(filteredData));
    setNCUs (NCU);
    setPointsLeft(pointsLeft-(NCU[NCU.length-1].cost));
    }
  };

  function addAttachment(event) {
    event.preventDefault();
    var filteredData = filterPoints(attachments[0].items, pointsLeft);
    filteredData = noRepeats(filteredData, commander, NCUs, units, attachments)
    if (filteredData.length > 0) {
    const attachment = pickRandom(filteredData);
    units[0].attachment = attachment;
    setPointsLeft(pointsLeft-(attachment.cost));
    }
  };

  function renderAttachments (units) {
    return [].concat(units.map((unit, i) =>
      (units[i].attachment === "None" ?
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
          :
        <h4>
          {units[i].attachment.name}
        </h4>
      )))
  }

  function renderPage() {
    return (
    <div className="Home">
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            {commander.length>0 && <h4>{commander.name}</h4>}
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
            {units.length>0 && renderAttachments(units)}
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