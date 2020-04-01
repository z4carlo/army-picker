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
import { Grid, Row, Col, Checkbox, Table } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton"
import RenderUnits from "../components/renderUnits"
import RenderNCUs from "../components/renderNCUs"
import Img from 'react-image';

export default function Home(props) {

  const [commander, setCommander] = useState(false);
  const [units, setUnits] = useState([]);
  const [NCUs, setNCUs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pointsLeft, setPointsLeft] = useState(0);
  const [pointsSet, setPointsSet] = useState(false);
  const [faction, setFaction] = useState(0);
  const [pickedFaction, setPickedFaction] = useState(false);
  const [neutrals, setNeutrals] = useState(false);
  const [neutralPoints, setNeutralPoints] = useState(0);
  const [haveArya, setHaveArya] = useState(false);

  function addCommander(event) {
    event.preventDefault();
    // var newcommander;
    if (neutrals == false) {
      var newcommander = pickRandom(commanders[faction].items);
    } else {
      var newcommander = pickRandom(commanders[faction].items.concat(commanders[0].items));
    }
    // var newcommander = pickRandom(commanders[faction].items);
    if ((newcommander.type == "Infantry") || (newcommander.type == "Cavalry")) {
      if (newcommander.name == "Joffrey Baratheon") {
        units[0] = {name: "Kingsguard", cost: 6, type: "Infantry", attachment: newcommander, attachment2: "None", unique: true};
      } else if (newcommander.name == "Eddard Stark") {
        units[0] = {name: "Eddard's Honor Guard", cost: 7, type: "Infantry", attachment: newcommander, attachment2: "None", unique: true};
      } else if (newcommander.name == "Robb Stark") {
        units[0] = {name: "", attachment: newcommander};
        units[1] = {name: "Greywind", cost: 0, type: "Monster", attachment: "None", attachment2: "None", unique: true};
      } else {
        units[0] = {name: "", attachment: newcommander, attachment2: "None",};
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
      var neutralUnits = filterPoints(combatUnits[0].items, neutralPoints);
      var filteredData = filterPoints(combatUnits[faction].items.concat(neutralUnits), pointsLeft);
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
      if (newUnit.neutral == true) {
        setNeutralPoints(neutralPoints-(newUnit.cost));
      }
      setPointsLeft(pointsLeft-(newUnit.cost));
    }
  };

  function addNCU(event) {
    event.preventDefault();
    if (neutrals == false) {
      var filteredData = filterPoints(nonCombatUnits[faction].items, pointsLeft);
    } else {
      var neutralUnits = filterPoints(nonCombatUnits[0].items, neutralPoints);
      var filteredData = filterPoints(nonCombatUnits[faction].items.concat(neutralUnits), pointsLeft);
    }
    filteredData = noRepeats(filteredData, commander, NCUs, units, attachments);
    if (filteredData.length > 0) {
    const NCU = NCUs.concat(pickRandom(filteredData));
    setNCUs (NCU);
    if (NCU[NCU.length-1].name == "Arya Stark") {
      setHaveArya(true);
    }
    if (NCU[NCU.length-1].neutral == true) {
      setNeutralPoints(neutralPoints-(NCU[NCU.length-1].cost));
    }
    setPointsLeft(pointsLeft-(NCU[NCU.length-1].cost));
    }
  };

  function addAttachment(event, i) {
    event.preventDefault();
    if (units[i].name === "Stormcrow Mercenaries") {
      var tempPoints = pointsLeft + 1;
      var tempNeutralPoints = neutralPoints + 1;
    } else if (units[i].name === "Stormcrow Archers") {
      var tempPoints = pointsLeft + 1;
      var tempNeutralPoints = neutralPoints + 1;
    } else {
      var tempPoints = pointsLeft;
      var tempNeutralPoints = neutralPoints;
    }
    if (neutrals == false) {
      var filteredData = filterPoints(attachments[faction].items, tempPoints);
    } else {
      var neutralUnits = filterPoints(attachments[0].items, tempNeutralPoints);
      var filteredData = filterPoints(attachments[faction].items.concat(neutralUnits), tempPoints);
    }
    filteredData = noRepeats(filteredData, commander, NCUs, units, haveArya)
    filteredData = attachmentMatch(filteredData, units[i].type);
    if (filteredData.length > 0) {
    const attachment = pickRandom(filteredData);
    if (attachment.name == "Robb Stark") {
      units[units.length] = {name: "Greywind", cost: 0, type: "Monster", attachment: "None", attachment2: "None", unique: true};
    } else if (attachment.name == "Rickon Stark") {
      units[units.length] = {name: "Shaggydog", cost: 0, type: "Monster", attachment: "None", attachment2: "None", unique: true};
    } else if (attachment.name == "Bran Stark") {
      units[units.length] = {name: "Summer", cost: 0, type: "Monster", attachment: "None", attachment2: "None", unique: true};
    }
    units[i].attachment = JSON.parse(JSON.stringify(attachment));
    if (attachment.neutral == true) {
      setNeutralPoints(tempNeutralPoints-(attachment.cost));
    }
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

  const DrawImage = ({location}) => <Img width="140" height="200" src={location} />

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

  function renderAttachments2 (units) {
    return [].concat(units.map((unit, i) =>
      (units[i].attachment === "None" || units[i].attachment.attachment2 === "None" ?
          <h4>None</h4>
          :
          <h4>
            <div key={i}>
              <DrawImage location={units[i].attachment.attachment2.imgFile}/>
            </div>
            {units[i].attachment.attachment2.name}
          </h4>
      )))
  }

  // function renderTable(NCUs) {
  //   return(
  //     <Table condensed responsive>
  //       <tbody>
  //       <RenderNCUs
  //             nonCombatUnits={nonCombatUnits}
  //             NCUs={NCUs}
  //           />
  //       </tbody>
  //       <tbody>
  //       {units.length>0 && (units[0].name != "") &&<RenderUnits
  //             units={units}
  //           />}
  //       </tbody>
  //     </Table>
  //   );
  // }

  function chooseNeutral (event) {
    event.preventDefault();
    setFaction(0);
    setPickedFaction(true);
    setNeutralPoints(pointsLeft);
  }

  function chooseLannister (event) {
    event.preventDefault();
    setFaction(1);
    setPickedFaction(true);
    setNeutralPoints(pointsLeft/2);
  }

  function chooseStark (event) {
    event.preventDefault();
    setFaction(2);
    setPickedFaction(true);
    setNeutralPoints(pointsLeft/2);
  }

  function setTotal (event, points) {
    event.preventDefault();
    setPointsLeft(points);
    setPointsSet(true);
  }

  function renderPage() {
    return (
    <div className="Home">
      <Grid>
        <Row>
          <Col xs={4} md={4}>
            {!pointsSet && <form onSubmit={event => setTotal(event, 30)}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              text="30 Points"
            />     
            </form>}
          </Col>
          <Col xs={4} md={4}>
          {!pointsSet && <form onSubmit={event => setTotal(event, 40)}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              text="40 Points"
            />     
            </form>}
          </Col>
          <Col xs={4} md={4}>
          {!pointsSet && <form onSubmit={event => setTotal(event, 50)}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              text="50 Points"
            />
            </form>}
          </Col>
          {!pickedFaction && pointsSet && <form onSubmit={chooseNeutral}>
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
          {!pickedFaction && pointsSet && <form onSubmit={chooseLannister}>
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
          {!pickedFaction && pointsSet && <form onSubmit={chooseStark}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              isLoading={isLoading}
              // disabled={!validateAdd()}
              text="Stark"
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
        {/* <Row>
          {renderTable(NCUs)}
        </Row> */}
        <Row>
          <Col xs={12} md={2}>
          {commander && <h3>NCUs</h3>}
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
          <Col xs={12} md={4}>
            {commander && <h3>Combat Units</h3>}
            {units.length>0 && (units[0].name != "") &&<RenderUnits
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
          <Col xs={12} md={4}>
            <Col xs={6} md={6}>
            {commander && <h3>Attachment 1</h3>}
            {units.length>0 && renderAttachments(units)}
            </Col>
            <Col xs={6} md={6}>
            {commander && <h3>Attachment 2</h3>}
            <h3></h3>
            {units.length>0 && renderAttachments2(units)}
            </Col>
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