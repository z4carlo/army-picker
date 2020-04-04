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
import LoaderButton from "../components/LoaderButton"
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
    height: '410px',
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
    return
    // event.preventDefault();
    // setCommander();
    // setUnits();
    // setNCUs();
  };

  const DrawImage = ({location}) => {console.log (location); return<Img width="84%" height="auto" src={location} />}
  const DrawImage2 = ({location}) => {console.log (location); return<Img width="100%" height="auto" src={location} />}
  const DrawImage3 = ({location}) => {console.log (location); return<Img width="200" height="100" src={location} />}
  const DrawToken = ({location}) => {console.log (location); return<Img width="45%" height="auto" src={location} />}
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
    <div className="Home"   
    // styles={{ backgroundImage:"/Images/General/Background.png"} }
    >

      <Grid>
        <Row>

          <div style={fixedTopBuffer}></div>
        </Row>
        <Row>
          <Col xs={12} md={2}>
            {/* {commander && <h3>Faction</h3>}
            {commander && faction === 1 && <DrawToken location={"./Images/General/SIGIL-LANNISTER.png"}/>}
            {commander && faction === 2 && <DrawTokenWide location={"./Images/General/STARK-SIGIL.png"}/>}
            {commander && <h3>Commander</h3>}
            {NCUs.length>0 && NCUs[0].token && RenderNCUCommander()}
            {units.length>0 && units[0].attachment.token && RenderCUCommander()}    
          
            <div class="image">
              {commander && <h3>Points Remaining</h3>}
              {commander && <img src="./Images/General/PointCounter-Container.png" width="150" height="150"/>}
              {commander && <h1><b>{pointsLeft}</b></h1>}

            </div>

            {commander && neutrals && <h3>Neutrals On</h3>}
            {commander && !neutrals && <h3>Neutrals Off</h3>}
            {commander && <form onSubmit={clearAll}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              text="Clear All"
              loadingText="Adding…"
            />     
            </form>} */}
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
            <DrawToken location={"./Images/General/PointCounter-Container.png"}/>
          </Panel>}
              {!pointsSet && <h5><b>30</b></h5>}          
          </div>
          </Col>
          <Col xs={4} md={4}>
          <div class="image2">
          {!pointsSet && <Panel onClick={event => setTotal(event, 40)}>
            <DrawToken location={"./Images/General/PointCounter-Container.png"}/>
          </Panel>}
              {!pointsSet && <h5><b>40</b></h5>}          
          </div>
          </Col>
          <Col xs={4} md={4}>
          <div class="image2">
          {!pointsSet && <Panel onClick={event => setTotal(event, 50)}>
            <DrawToken location={"./Images/General/PointCounter-Container.png"}/>
          </Panel>}
              {!pointsSet && <h5><b>50</b></h5>}          
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
          <div class="image3">
          {!pickedFaction && pointsSet && <Panel onClick={chooseStark}>
            <DrawTokenSmall location={"./Images/General/STARK-SIGIL.png"}/>
          </Panel>}          
          </div>
          </Col>
          <Col xs={12} md={6}>
          {faction !== 0 && !commander &&<h3>Include Neutrals</h3>}
          {faction !== 0 && !commander && (neutrals === false) && <Panel onClick={event => setNeutral(event)}>
            <DrawImage3 location={"./Images/General/ASOIAF-RANDOMBUILDER-SWITCH-OFF.png"}/>
          </Panel>}
          {faction !== 0 && !commander && (neutrals === true) && <Panel onClick={event => setNeutral(event)}>
            <DrawImage3 location={"./Images/General/ASOIAF-RANDOMBUILDER-SWITCH-ON.png"}/>
          </Panel>
          }
          </Col> 
          <Col xs={12} md={6}>
            {!commander && pickedFaction && <form onSubmit={addCommander}>
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              text="Add Commander"
              loadingText="Adding…"
            />     
            </form>} 
          </Col>
          <Col xs={3} md={3}>
            {commander && <h3>Faction</h3>}
            {commander && faction === 0 && <DrawToken location={"./Images/General/NEUTRAL-SIGIL.png"}/>}
            {commander && faction === 1 && <DrawToken location={"./Images/General/SIGIL-LANNISTER.png"}/>}
            {commander && faction === 2 && <DrawToken location={"./Images/General/STARK-SIGIL.png"}/>}
          </Col>
          <Col xs={3} md={3}>
            <div>
            <div class="image">
              {commander && <h3>Points Remaining</h3>}
              {commander && <img src="./Images/General/PointCounter-Container.png" width="50%" height="auto"/>}
              {commander && <h1><b>{pointsLeft}</b></h1>}
            </div>
            </div>
          </Col>
          <Col xs={3} md={3}>
            {commander && <h3>Commander</h3>}
            {NCUs.length>0 && NCUs[0].token && RenderNCUCommander()}
            {units.length>0 && units[0].attachment.token && RenderCUCommander()}
          </Col>
          <Col xs={3} md={3}>
          {commander && neutrals && <h3>Neutrals On</h3>}
            {commander && !neutrals && <h3>Neutrals Off</h3>}
            {commander && <form onSubmit={clearAll}>
              
            <LoaderButton
              block
              type="submit"
              bsSize="large"
              text="Clear All"
              loadingText="Adding…"
            />     
            </form>}
          </Col>
          </Row>
            <div class="image4">
                {commander && <img src="./Images/General/PointCounter-Container.png" width="10%" height="10%"/>}
              </div>
          </div>
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