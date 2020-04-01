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
import { Grid, Row, Col, Checkbox } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton"
import RenderUnits from "../components/renderUnits"
import RenderNCUs from "../components/renderNCUs"
import Img from 'react-image';

export default function Home(props) {

  const [commander, setCommander] = useState(false);
  const [units, setUnits] = useState([]);
  const [NCUs, setNCUs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pointsLeft, setPointsLeft] = useState(40);
  const [faction, setFaction] = useState(0);
  const [pickedFaction, setPickedFaction] = useState(false);
  const [neutrals, setNeutrals] = useState(false);

  function addCommander(event) {
    event.preventDefault();
    // var newcommander;
    if (neutrals == false) {
      var newcommander = pickRandom(commanders[faction].items);
    } else {
      var newcommander = pickRandom(commanders[faction].items.concat(commanders[0].items));
    }
    // var newcommander = pickRandom(commanders[faction].items);
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
  };

  function addCombatUnit(event) {
    event.preventDefault();
    if (neutrals == false) {
      var filteredData = filterPoints(combatUnits[faction].items, pointsLeft);
    } else {
      var filteredData = filterPoints(combatUnits[faction].items.concat(combatUnits[0].items), pointsLeft);
    }
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
    }
  };

  function addNCU(event) {
    event.preventDefault();
    if (neutrals == false) {
      var filteredData = filterPoints(nonCombatUnits[faction].items, pointsLeft);
    } else {
      var filteredData = filterPoints(nonCombatUnits[faction].items.concat(nonCombatUnits[0].items), pointsLeft);
    }
    filteredData = noRepeats(filteredData, commander, NCUs, units, attachments);
    if (filteredData.length > 0) {
    const NCU = NCUs.concat(pickRandom(filteredData));
    setNCUs (NCU);
    setPointsLeft(pointsLeft-(NCU[NCU.length-1].cost));
    }
  };

  function addAttachment(event, i) {
    event.preventDefault();
    console.log(units[i].name);
    if (units[i].name === "Stormcrow Mercenaries") {
      console.log("Im a Stormcrow");
      var tempPoints = pointsLeft + 1;
    } else if (units[i].name === "Stormcrow Archers") {
      console.log("Im a Stormcrow");
      var tempPoints = pointsLeft + 1;
    } else {
      console.log("Im not a Stormcrow");
      var tempPoints = pointsLeft;
    }
    if (neutrals == false) {
      var filteredData = filterPoints(attachments[faction].items, tempPoints);
    } else {
      var filteredData = filterPoints(attachments[faction].items.concat(attachments[0].items), tempPoints);
    }
    filteredData = noRepeats(filteredData, commander, NCUs, units, attachments)
    filteredData = attachmentMatch(filteredData, units[i].type);
    if (filteredData.length > 0) {
    const attachment = pickRandom(filteredData);
    units[i].attachment = JSON.parse(JSON.stringify(attachment));
    setPointsLeft(tempPoints-(attachment.cost)); 
    }
  };

  function clearAll(event) {
    return
    // event.preventDefault();
    // setCommander();
    // setUnits();
    // setNCUs();
    // setPointsLeft(40);
  };

  const DrawImage = ({location}) => <Img width="200" height="275" src={location} />

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
            <div key={i}>
              <DrawImage location={units[i].attachment.imgFile}/>
            </div>
            {units[i].attachment.name}
          </h4>
      )))
  }

  function chooseNeutral (event) {
    event.preventDefault();
    setFaction(0);
    setPickedFaction(true);
  }

  function chooseLannister (event) {
    event.preventDefault();
    setFaction(1);
    setPickedFaction(true);
  }

  function renderPage() {
    return (
    <div className="Home">
      <Grid>
        <Row>
          {!pickedFaction && <form onSubmit={chooseNeutral}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              isLoading={isLoading}
              // disabled={!validateAdd()}
              text="Neutral"
              loadingText="Adding…"
            />     
          </form>}
          {!pickedFaction && <form onSubmit={chooseLannister}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              isLoading={isLoading}
              // disabled={!validateAdd()}
              text="Lannister"
              loadingText="Adding…"
            />       
          </form>}
          {faction != 0 && !commander && <Checkbox checked={neutrals} onChange={() => setNeutrals(!neutrals)}>
            <p>Include Neutrals</p>
          </Checkbox>}          
          <Col xs={12} md={3}>
            {/* {commander && <h4>{commander[0].name}</h4>} */}
            {!commander && pickedFaction && <form onSubmit={addCommander}>
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
        </Row>
        <Row>
          <Col xs={12} md={3}>
            <h3>NCUs</h3>
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
          <Col xs={12} md={6}>
            <h3>Combat Units</h3>
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
            <h3>Attachments</h3>
            {units.length>0 && renderAttachments(units)}
          </Col>
        </Row>
        <Row>
          <h4><b>{pointsLeft}</b></h4>
          {commander && <form onSubmit={clearAll}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              isLoading={isLoading}
              // disabled={!validateAdd()}
              text="Clear All"
              loadingText="Adding…"
            />     
            </form>}
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