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
import { Grid, Row, Col, Panel } from "react-bootstrap"
import RenderUnits from "../components/renderUnits"
import RenderNCUs from "../components/renderNCUs"
import Img from 'react-image';
import Footer from "../components/Footer.js"
import Header from "../components/Header.js";
import CreatedBy from "../components/CreatedBy.js"

export default function Home(props) {

  const [commander, setCommander] = useState(false);
  const [units, setUnits] = useState([]);
  const [NCUs, setNCUs] = useState([]);
  const [pointsLeft, setPointsLeft] = useState(0);
  const [pointsSet, setPointsSet] = useState(false);
  const [faction, setFaction] = useState(0);
  const [pickedFaction, setPickedFaction] = useState(false);
  const [neutrals, setNeutrals] = useState(false);
  const [neutralPoints, setNeutralPoints] = useState(0);
  const [haveArya, setHaveArya] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);
  const [max, setMax] = useState(0);

  var fixedTop = {
    padding: "0px",
    position: "fixed",
    left: "20%",
    top: "200px",
    height: "auto",
    width: "60%",
    textAlign: "center",
  };

  var fixedBackground = {
    // backgroundColor: "Black",
    // backgroundImage: "./Images/General/Faction_Background.png",
    backgroundImage: "url('./Images/General/Faction_Background.png')",
    backgroundSize: "100% 100%",
    padding: "20px",
    position: "fixed",
    left: "20%",
    top: "200px",
    height: "200px",
    width: "60%",
    opacity: "0.8",
  };

  var fixedTopBuffer = {
    display: 'block',
    padding: '0px',
    height: '430px',
    width: '100%',
  };

  function addCommander(event) {
    event.preventDefault();
    if (neutrals === false) {
      var newcommander = pickRandom(commanders[faction].items);
    } else {
      newcommander = pickRandom(commanders[faction].items.concat(commanders[0].items));
    }
    if ((newcommander.type === "Infantry") || (newcommander.type === "Cavalry")) {
      if (newcommander.name === "Joffrey Baratheon") {
        units[0] = {name: "Kingsguard", cost: 6, type: "Infantry", attachment: newcommander, attachment2: "None", unique: true, imgFile: "./Images/Lannister/CombatUnit-Cards/LAN-CombatUnit-Kingsguard.png"};
      } else if (newcommander.name === "Eddard Stark") {
        units[0] = {name: "Eddard's Honor Guard", cost: 7, type: "Infantry", attachment: newcommander, attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-HonorGuard.png"};
      } else if (newcommander.name === "Robb Stark") {
        units[0] = {name: "", attachment: newcommander};
        units[1] = {name: "Greywind", cost: 0, type: "Monster", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Greywind.png"};
      } else {
        units[0] = {name: "", attachment: newcommander, attachment2: "None",};
      }
    }
    if (newcommander.type === ("NCU")) {
      NCUs[0] = newcommander;
    }
    setPointsLeft(pointsLeft-(newcommander.cost));
    setCommander(true);
  };

  function addCombatUnit(event) {
    event.preventDefault();
    if (neutrals === false) {
      var filteredData = filterPoints(combatUnits[faction].items, pointsLeft);
    } else {
      var neutralUnits = filterPoints(combatUnits[0].items, neutralPoints);
      filteredData = filterPoints(combatUnits[faction].items.concat(neutralUnits), pointsLeft);
    }
    filteredData = noRepeats(filteredData, commander, NCUs, units, attachments);
    if (filteredData.length > 0) {
      if (units.length>0 && units[0].name === "") {
        filteredData = attachmentMatch(filteredData, units[0].attachment.type);
      }
    }
    var newUnit = JSON.parse(JSON.stringify(pickRandom(filteredData)));
    if (filteredData.length > 0) {
      if (units.length>0 && units[0].name === "") {
        newUnit.attachment = units[0].attachment;
        units[0] = newUnit;
      }
      else {
        const unit = units.concat(newUnit);
        setUnits (unit);
      }
      if (newUnit.neutral === true) {
        setNeutralPoints(neutralPoints-(newUnit.cost));
      }
      setPointsLeft(pointsLeft-(newUnit.cost));
    }
  };

  function addNCU(event) {
    event.preventDefault();
    if (neutrals === false) {
      var filteredData = filterPoints(nonCombatUnits[faction].items, pointsLeft);
    } else {
      var neutralUnits = filterPoints(nonCombatUnits[0].items, neutralPoints);
      filteredData = filterPoints(nonCombatUnits[faction].items.concat(neutralUnits), pointsLeft);
    }
    filteredData = noRepeats(filteredData, commander, NCUs, units, attachments);
    if (filteredData.length > 0) {
    const NCU = NCUs.concat(pickRandom(filteredData));
    setNCUs (NCU);
    if (NCU[NCU.length-1].name === "Arya Stark") {
      setHaveArya(true);
    }
    if (NCU[NCU.length-1].neutral === true) {
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
      tempPoints = pointsLeft + 1;
      tempNeutralPoints = neutralPoints + 1;
    } else {
      tempPoints = pointsLeft;
      tempNeutralPoints = neutralPoints;
    }
    if (neutrals === false) {
      var filteredData = filterPoints(attachments[faction].items, tempPoints);
    } else {
      var neutralUnits = filterPoints(attachments[0].items, tempNeutralPoints);
      filteredData = filterPoints(attachments[faction].items.concat(neutralUnits), tempPoints);
    }
    filteredData = noRepeats(filteredData, commander, NCUs, units, haveArya)
    filteredData = attachmentMatch(filteredData, units[i].type);
    if (filteredData.length > 0) {
    const attachment = pickRandom(filteredData);
    if (attachment.name === "Robb Stark") {
      units[units.length] = {name: "Greywind", cost: 0, type: "Monster", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Greywind.png"};
    } else if (attachment.name === "Rickon Stark") {
      units[units.length] = {name: "Shaggydog", cost: 0, type: "Monster", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Shaggydog.png"};
    } else if (attachment.name === "Bran Stark") {
      units[units.length] = {name: "Summer", cost: 0, type: "Monster", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Summer.png"};
    }
    units[i].attachment = JSON.parse(JSON.stringify(attachment));
    setUnits(units);
    if (attachment.neutral === true) {
      setNeutralPoints(tempNeutralPoints-(attachment.cost));
    }
    setPointsLeft(tempPoints-(attachment.cost));
    setForceUpdate(forceUpdate + 1);
    }
  };

  function clearAll(event) {
    event.preventDefault();
    setCommander(false);
    setUnits([]);
    setNCUs([]);
    setPointsLeft(0);
    setPointsSet(false);
    setFaction(0);
    setPickedFaction(false);
    setNeutrals(false);
    setNeutralPoints(0);
    setHaveArya(false);
    setMax(0);
  };

  const DrawImage = ({location}) => {console.log (location); return<Img width="84%" height="auto" src={location} />}
  const DrawImage2 = ({location}) => {console.log (location); return<Img width="100%" height="auto" src={location} />}
  const DrawImage3 = ({location}) => {console.log (location); return<Img width="200" height="100" src={location} />}
  const DrawToken = ({location}) => {console.log (location); return<Img width="45%" height="auto" src={location} />}
  const DrawTrash = ({location}) => {console.log (location); return<Img width="20%" height="auto" src={location} />}
  const DrawTokenSmall = ({location}) => {console.log (location); return<Img width="40%" height="auto" src={location} />}
  const DrawTokenCommander = ({location}) => {console.log (location); return<Img width="50%" height="auto" src={location} />}

  function renderAttachments (units) {
    return [].concat(units.map((unit, i) =>
      (units[i].attachment === "None" ?
        // <h4>
          <Panel onClick={event => addAttachment(event, i)}>
            <DrawImage location={"./Images/General/NonCombat-Unit.png"}/>
          </Panel>
        // </h4>
          :
          // <h4>
            <Panel>
              <DrawImage location={units[i].attachment.imgFile}/>
            {/* {units[i].attachment.name}             */}
            </Panel>
          // </h4>
      )))
  }

  function renderAttachments2 (units) {
    return [].concat(units.map((unit, i) =>
      (units[i].attachment === "None" || units[i].attachment.attachment2 === "None" ?
            <Panel>
              <DrawImage location=""/>
              None
            </Panel>
          :
            <Panel>
              <DrawImage location={units[i].attachment.attachment2.imgFile}/>
            </Panel>
      )))
  }

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
    setMax(points);
  }

  function setNeutral (event) {
    event.preventDefault();
    setNeutrals(!neutrals);
  }

  function RenderNCUCommander() {
    console.log("Draw NCU Commander");
    return (
      <div>
        <DrawTokenCommander location={NCUs[0].token}/>
      </div>
    );
  }

  function RenderCUCommander() {
    console.log("Draw CU Commander");
    return (
      <div>
        <DrawTokenCommander location={units[0].attachment.token}/>
      </div>
    );
  }

  function renderPage() {
    return (
      <Grid>
        <Row>

          <div style={fixedTopBuffer}></div>
        </Row>
        <Row>
          <Col xs={12} md={2}>
            
          </Col>
          <Col xs={12} md={2}>
          {commander && <h3>NCUs</h3>}
            {NCUs.length>0 &&<RenderNCUs
              nonCombatUnits={nonCombatUnits}
              NCUs={NCUs}
            />}            
            {commander && <h4>
              <Panel onClick={addNCU}>
                <DrawImage location={"./Images/General/NonCombat-Unit.png"}/>
              </Panel>
            </h4>}       
          </Col>
          <Col xs={12} md={4}>
            {commander && <h3>Combat Units</h3>}
            {units.length>0 && (units[0].name !== "") &&<RenderUnits
              units={units}
            />}
            {commander && <h4>
              <Panel className="unit" onClick={addCombatUnit}>
                <DrawImage2 location={"./Images/General/Combat-Unit.png"}/>
              </Panel>
            </h4>}
          </Col>
          {/* <Col xs={12} md={4}> */}
            {/* {commander && <h3>Attachments</h3>} */}
            <Col xs={6} md={2}>
            {commander && <h3>Attachments</h3>}
            {units.length>0 && renderAttachments(units)}
            </Col>
            <Col xs={6} md={2}>
            {commander && <h6>Spacer</h6>}
            {units.length>0 && renderAttachments2(units)}
            </Col>
          {/* </Col> */}
        </Row>
        <Row>
          <Footer/>
          <CreatedBy/>
          <Header/>
        </Row>
        <div style={fixedBackground}></div>
        <div style={fixedTop}>
        <Row>
          {!pointsSet && <h3>First Choose Points Limit</h3>}
          <Col xs={4} md={4}>
          <div class="image2">
          {!pointsSet && <Panel onClick={event => setTotal(event, 30)}>
            <DrawTokenSmall location={"./Images/General/PointCounter-Container2-30PTS.png"}/>
          </Panel>}     
          </div>
          </Col>
          <Col xs={4} md={4}>
          <div class="image2">
          {!pointsSet && <Panel onClick={event => setTotal(event, 40)}>
            <DrawTokenSmall location={"./Images/General/PointCounter-Container2-40PTS.png"}/>
          </Panel>}  
          </div>
          </Col>
          <Col xs={4} md={4}>
          <div class="image2">
          {!pointsSet && <Panel onClick={event => setTotal(event, 50)}>
            <DrawTokenSmall location={"./Images/General/PointCounter-Container2-50PTS.png"}/>
          </Panel>}    
          </div>
          </Col>
          {!pickedFaction && pointsSet && <h3>Now Choose Faction</h3>}
          <Col xs={4} md={4}>
          <div class="image2">
          {!pickedFaction && pointsSet && <Panel onClick={chooseNeutral}>
            {<DrawTokenSmall location={"./Images/General/NEUTRAL-SIGIL.png"}/>}
          </Panel>}       
          </div>
          </Col>
          <Col xs={4} md={4}>
          <div class="image2">
          {!pickedFaction && pointsSet && <Panel onClick={chooseLannister}>
            <DrawTokenSmall location={"./Images/General/SIGIL-LANNISTER.png"}/>
          </Panel>}       
          </div>
          </Col>
          <Col xs={4} md={4}>
          <div class="image2">
          {!pickedFaction && pointsSet && <Panel onClick={chooseStark}>
            <DrawTokenSmall location={"./Images/General/STARK-SIGIL.png"}/>
          </Panel>}          
          </div>
          </Col>
          <Col xs={12} md={6}>
            {!commander && pickedFaction && <Panel onClick={addCommander}>
              <h3>Lets Get Started</h3>
              <img src="./Images/General/ASOIAF-RANDOMBUILDER-ADD-COMMANDER.png" width="20%" height="auto"/>
              <h3>Add Commander</h3>
            </Panel>}
          </Col>
          <Col xs={12} md={6}>
          {faction !== 0 && !commander &&<h3>Include Neutrals</h3>}
          {faction !== 0 && !commander && (neutrals === false) && <Panel onClick={event => setNeutral(event)}>
            <div class="image3">
            <DrawImage3 location={"./Images/General/ASOIAF-RANDOMBUILDER-SWITCH-OFF.png"}/>
            </div>
          </Panel>}
          {faction !== 0 && !commander && (neutrals === true) && <Panel onClick={event => setNeutral(event)}>
            <div class="image3">
            <DrawImage3 location={"./Images/General/ASOIAF-RANDOMBUILDER-SWITCH-ON.png"}/>
            </div>          
          </Panel>}
          </Col>
          <Col xs={3} md={3}>
            {commander && <h3>Faction</h3>}
            {commander && faction === 0 && <DrawToken location={"./Images/General/NEUTRAL-SIGIL.png"}/>}
            {commander && faction === 1 && <DrawToken location={"./Images/General/SIGIL-LANNISTER.png"}/>}
            {commander && faction === 2 && <DrawToken location={"./Images/General/STARK-SIGIL.png"}/>}
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
            {commander && <Panel onClick={clearAll}>
              <h3>Clear All</h3>
              <DrawTrash location={"./Images/General/Clear-All.png"}/>
            </Panel>}
            </div>
          </Col>
          </Row>
            {commander && <div class="image4">
              {commander && <img src="./Images/General/PointCounter-Container.png" width="auto" height="120px"/>}
              {commander && <h1>{pointsLeft}</h1>}
            </div>}
          </div>
      </Grid>
  );
  }
  
  return (
    <div className="Home">
    {renderPage()}
  </div>
  )
}