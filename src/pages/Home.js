import React, { useState } from "react";
import "./Home.css";
import commanders from "../units/commanders"
import combatUnits from "../units/combatUnits"
import nonCombatUnits from "../units/nonCombatUnits"
import attachments from "../units/attachments"
import pickRandom from "../functions/pickRandom"
import filterPoints from "../functions/filterPoints"
import noRepeats from "../functions/noRepeats"
import attachmentMatch from "../functions/attachmentMatch"
import { Grid, Row, Col } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton"
import RenderUnits from "../components/renderUnits"
import RenderNCUs from "../components/renderNCUs"


export default function Home(props) {

  const [commander, setCommander] = useState(false);
  const [units, setUnits] = useState([]);
  const [NCUs, setNCUs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pointsLeft, setPointsLeft] = useState(40);

  function addCommander(event) {
    event.preventDefault();
    const newcommander = pickRandom(commanders[0].items);
    console.log(newcommander);
    if (newcommander.type == ("Infantry" || "Cavalry")) {
      if (newcommander.name == "Joffrey Baratheon") {
        units[0] = {name: "Kingsguard", cost: 6, type: "Infantry", attachment: newcommander, unique: true};
      } else {
        units[0] = {name: "", attachment: newcommander};
      }
    }
    if (newcommander.type == ("NCU")) {
      NCUs[0] = newcommander;
    }
    setPointsLeft(pointsLeft-(newcommander.cost));
    setCommander(true);
    console.log(commander);
  };

  function addCombatUnit(event) {
    event.preventDefault();
    var filteredData = filterPoints(combatUnits[0].items, pointsLeft);
    filteredData = noRepeats(filteredData, commander, NCUs, units, attachments);
    if (filteredData.length > 0) {
      if (units.length>0 && units[0].name == "") {
        filteredData = attachmentMatch(filteredData, units[0].attachment.type);
      }
    }
    var newUnit = JSON.parse(JSON.stringify(pickRandom(filteredData)));
    if (filteredData.length > 0) {
      if (units.length>0 && units[0].name == "") {
        newUnit.attachment = units[0].attachment;
        units[0] = newUnit;
      }
      else {
        const unit = units.concat(newUnit);
        setUnits (unit);
      }
      setPointsLeft(pointsLeft-(newUnit.cost));
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

  function addAttachment(event, i) {
    event.preventDefault();
    var filteredData = filterPoints(attachments[0].items, pointsLeft);
    filteredData = noRepeats(filteredData, commander, NCUs, units, attachments)
    filteredData = attachmentMatch(filteredData, units[i].type);
    if (filteredData.length > 0) {
    const attachment = pickRandom(filteredData);
    units[i].attachment = JSON.parse(JSON.stringify(attachment));
    setPointsLeft(pointsLeft-(attachment.cost));
    }
  };

  function renderAttachments (units) {
    return [].concat(units.map((unit, i) =>
      (units[i].attachment === "None" ?
        <form onSubmit={event => addAttachment(event, i)}>
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
          {units[i].attachment.name}<br></br>
          {units[i].attachment.cost}
        </h4>
      )))
  }

  function renderPage() {
    return (
    <div className="Home">
      <Grid>
        <Row>
          <Col xs={12} md={3}>
            {/* {commander && <h4>{commander[0].name}</h4>} */}
            {!commander && <form onSubmit={addCommander}>
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
            {commander && <form onSubmit={addNCU}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              isLoading={isLoading}
              // disabled={!validateAdd()}
              text="Add NCU"
              loadingText="Adding…"
            />     
            </form>}        
          </Col>
          <Col xs={12} md={3}>
            {units.length>0 && (units[0].name != "") &&<RenderUnits
              combatUnits={combatUnits}
              units={units}
            />}
            {commander && <form onSubmit={addCombatUnit}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              isLoading={isLoading}
              // disabled={!validateAdd()}
              text="Add Combat Unit"
              loadingText="Adding…"
            />     
            </form>}  
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