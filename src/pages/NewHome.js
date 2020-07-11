import React, { useState, useEffect } from "react";
import "./NewHome.css";
import ReactGA, { set } from 'react-ga';
import commanders from "../units/commanders"
import combatUnits from "../units/combatUnits"
import nonCombatUnits from "../units/nonCombatUnits"
import attachments from "../units/attachments"
import pickRandom from "../functions/pickRandom"
import filterPoints from "../functions/filterPoints"
import noRepeats from "../functions/noRepeats"
import chaosOptions from "../functions/chaosOptions"
import attachmentMatch from "../functions/attachmentMatch"
import { Row, Col, Button } from "react-bootstrap"
import RenderUnits from "../components/renderUnits"
import RenderNCUs from "../components/renderNCUs"
import Img from 'react-image';
import FactionRow from "../components/ChooseFaction"
import PointsRow from "../components/ChoosePoints"
import Footer from "../components/Footer.js"
import Header from "../components/Header.js";
import HeaderSpacer from "../components/HeaderSpacer.js";
import CreatedBy from "../components/CreatedBy.js"
import ListCUOptions from "../functions/ListCUOptions"
import ListNCUOptions from "../functions/ListNCUOptions"
import ListAttachOptions from "../functions/ListAttachOptions"

export default function Home(props) {
  useEffect(() => {
    ReactGA.pageview('/home');
  },[]);

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
  const [chaos, setChaos] = useState(false);

  function addCommander(event) {
    event.preventDefault();
    if (chaos === true) {
      var newcommander = pickRandom(chaosOptions(commanders));
    } else if (neutrals === false) {
      newcommander = pickRandom(commanders[faction].items);
    } else {
      newcommander = pickRandom(commanders[faction].items.concat(commanders[0].items));
    }
    if ((newcommander.type === "Infantry") || (newcommander.type === "Cavalry")) {
      if (newcommander.name === "Joffrey Baratheon") {
        units[0] = {name: "Kingsguard", cost: 6, type: "Infantry", attachment: newcommander, attachment2: "None", unique: true, imgFile: "./Images/Lannister/CombatUnit-Cards/LAN-CombatUnit-Kingsguard.png"};
      } else if (newcommander.name === "Eddard Stark") {
        units[0] = {name: "Eddard's Honor Guard", cost: 7, type: "Infantry", attachment: newcommander, attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-HonorGuard.png"};
      } else if (newcommander.name === "Rattleshirt") {
        units[0] = { name: "Bonelords Chosen", cost: 8, type:"Infantry", attachment: newcommander, attachment2: "None", unique: true, imgFile: "./Images/FreeFolk/CombatUnit-Cards/FF-CombatUnit-Chosen.png" };
      } else if (newcommander.name === "Robb Stark") {
        units[0] = {name: "", attachment: newcommander};
        units[1] = {name: "Greywind", cost: 0, type: "Solo", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Greywind.png"};
      } else if (newcommander.name === "Jon Snow") {
        units[0] = {name: "", attachment: newcommander};
        units[1] = {name: "Ghost", cost: 0, type: "Solo", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/NightsWatch/CombatUnit-Cards/NW-CombatUnit-Ghost.png"};
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
    if (chaos === true) {
      var filteredData = filterPoints(chaosOptions(combatUnits), pointsLeft)
    } else if (neutrals === false) {
      filteredData = filterPoints(combatUnits[faction].items, pointsLeft);
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
        var unit = units.concat(newUnit);
        if(newUnit.name === "Free Folk Raiders") {
          var newUnit2 = JSON.parse(JSON.stringify(newUnit));
          unit = units.concat(newUnit).concat(newUnit2);
        }
        setUnits (unit);
      }
      if (newUnit.neutral === true) {
        setNeutralPoints(neutralPoints-(newUnit.cost));
      }
      setPointsLeft(pointsLeft-(newUnit.cost));
    }
  };

  function addCU(event, i) {
    event.preventDefault();
    var newUnit = JSON.parse(JSON.stringify(combatUnits[faction].items[i]));
    if (units.length>0 && units[0].name === "") {
      newUnit.attachment = units[0].attachment;
      units[0] = newUnit;
    }
    else {
      var unit = units.concat(newUnit);
      if(newUnit.name === "Free Folk Raiders") {
        var newUnit2 = JSON.parse(JSON.stringify(newUnit));
        unit = units.concat(newUnit).concat(newUnit2);
      }
      setUnits (unit);
    }
    if (newUnit.neutral === true) {
      setNeutralPoints(neutralPoints-(newUnit.cost));
    }
    setPointsLeft(pointsLeft-(newUnit.cost));
  };

  function removeCU(event, i) {
    event.preventDefault();
    removeAttach(event,i);
    if (units[i].neutral === true) {
      setNeutralPoints(neutralPoints+(units[i].cost));
    }
    setPointsLeft(pointsLeft+(units[i].cost));
    const removedCU = units.splice(i,1);
    setUnits (units);
    setForceUpdate(forceUpdate + 1);
  };

  function addNCU(event, i) {
    event.preventDefault();
    var newUnit = JSON.parse(JSON.stringify(nonCombatUnits[faction].items[i]));
    var NCU = NCUs.concat(newUnit);
    if (newUnit.name === "Arya Stark") {
      setHaveArya(true);
    }
    if (newUnit.neutral === true) {
      setNeutralPoints(neutralPoints-(newUnit.cost));
    }
    setPointsLeft(pointsLeft-(newUnit.cost));
    setNCUs(NCU);
  };

  function removeNCU(event, i) {
    event.preventDefault();
    console.log(NCUs, i)
    if (NCUs[i].name === "Arya Stark") {
      setHaveArya(false);
    }
    if (NCUs[i].neutral === true) {
      setNeutralPoints(neutralPoints+(NCUs[i].cost));
    }
    setPointsLeft(pointsLeft+(NCUs[i].cost));
    const removedNCU = NCUs.splice(i,1);
    console.log(removedNCU)
    setNCUs (NCUs);
  };

  function addAttachment(event, i, j) {
    event.preventDefault();
    if (units[j].name === "Stormcrow Mercenaries") {
      var tempPoints = pointsLeft + 1;
      var tempNeutralPoints = neutralPoints + 1;
    } else if (units[j].name === "Stormcrow Archers") {
      tempPoints = pointsLeft + 1;
      tempNeutralPoints = neutralPoints + 1;
    } else {
      tempPoints = pointsLeft;
      tempNeutralPoints = neutralPoints;
    }
    const attachment = attachments[faction].items[i];
    if (attachment.name === "Robb Stark") {
      units.splice((j+1), 0, {name: "Greywind", cost: 0, type: "Solo", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Greywind.png"});
    } else if (attachment.name === "Rickon Stark") {
      units.splice((j+1), 0, {name: "Shaggydog", cost: 0, type: "Solo", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Shaggydog.png"});
    } else if (attachment.name === "Bran and Hodor") {
      units.splice((j+1), 0, {name: "Summer", cost: 0, type: "Solo", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/STARK-CombatUnit-Summer.png"});
    } else if (attachment.name === "Jon Snow") {
      units.splice((j+1), 0, {name: "Ghost", cost: 0, type: "Solo", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/NightsWatch/CombatUnit-Cards/NW-CombatUnit-Ghost.png"});
    }
    units[j].attachment = JSON.parse(JSON.stringify(attachment));
    setUnits(units);
    if (attachment.neutral === true) {
      setNeutralPoints(tempNeutralPoints-(attachment.cost));
    }
    setPointsLeft(tempPoints-(attachment.cost));
    setForceUpdate(forceUpdate + 1);
  };

  function removeAttach(event, i) {
    event.preventDefault();
    if (units[i].attachment.name === "Robb Stark" && units[i+1] !== undefined && units[i+1].name === "Greywind") {
      units.splice((i+1), 1);
    } else if (units[i].attachment.name === "Rickon Stark" && units[i+1] !== undefined && units[i+1].name === "Shaggydog") {
      units.splice((i+1), 1);
    } else if (units[i].attachment.name === "Bran and Hodor" && units[i+1] !== undefined && units[i+1].name === "Summer") {
      units.splice((i+1), 1);
    } else if (units[i].attachment.name === "Jon Snow" && units[i+1] !== undefined && units[i+1].name === "Ghost") {
      units.splice((i+1), 1);
    }  
    if (units[i].attachment.neutral === true) {
      setNeutralPoints(neutralPoints+(units[i].attachment.cost));
    }
    setPointsLeft(pointsLeft+(units[i].attachment.cost));
    console.log(pointsLeft);
    units[i].attachment = "None";
    setUnits(units);
    setForceUpdate(forceUpdate + 1);
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
    setChaos(false);
  };

  const DrawImage = ({location}) => {return<Img width="93%" height="auto" src={location} />}
  const DrawImage2 = ({location}) => {return<Img width="100%" height="auto" src={location} />}
  const DrawImage3 = ({location}) => {return<Img width="200" height="100" src={location} />}
  const DrawToken = ({location}) => {console.log (location); return<Img width="45%" height="auto" src={location} />}
  const DrawTrash = ({location}) => {console.log (location); return<Img width="20%" height="auto" src={location} />}
  const DrawTokenSmall = ({location}) => {console.log (location); return<Img width="40%" height="auto" src={location} class="mx-auto"/>}
  const DrawTokenCommander = ({location}) => {return<Img class="header-logo mx-auto" src={location} />}
  const DrawTokenFaction = ({location}) => {console.log (location); return<Img width="80%" height="auto" src={location} />}

  function renderAttachments (units) {
    return [].concat(units.map((unit, j) =>
      <Row>
        <Col xs={6}>
          {units[j].attachment === "None" ?
            <div>
              <ListAttachOptions units={attachments[faction]} addAttachment={addAttachment} j={j}/>
            </div>
            :
            <div>
              <div>
                <DrawImage location={units[j].attachment.imgFile}/>
              </div>
              <div onClick={event => removeAttach(event, j)}>
                  <Button bsStyle="primary">Remove</Button>
              </div>
            </div>
          }
        </Col>
        <Col xs={6}>
          {units[j].attachment === "None" || units[j].attachment.attachment2 === "None" ?
            <div>
              <DrawImage location={""}/>
            </div>
            :
            <div>
              <DrawImage location={units[j].attachment.attachment2.imgFile}/>
            </div>
          }
        </Col>
      </Row>
      ))
  }

  function chooseChaos (event) {
    event.preventDefault();
    console.log(commanders.length);
    const faction = (Math.floor(Math.random()*commanders.length));
    console.log(faction);
    setFaction(faction);
    setPickedFaction(true);
    setChaos(true);
    setNeutralPoints(pointsLeft);
    addCommander(event);
  }

  const chooseFaction = (event, faction) => {
    event.preventDefault();
    setFaction(faction);
    setPickedFaction(true);
    if (event.value === 0) {
      setNeutralPoints(pointsLeft);
    } else {
      setNeutralPoints(pointsLeft/2);
    }
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
    <div class="background-100">
      <Header block />
      <HeaderSpacer/>
      {!pointsSet && <PointsRow setTotal={setTotal}/>}
      {pointsSet && <FactionRow pickedFaction={pickedFaction} chooseFaction={chooseFaction} chooseChaos={chooseChaos}/>}

      <Row>
        <Col xs={12} md={6}>
          {!commander && pickedFaction && <div onClick={addCommander}>
            <h3>Lets Get Started</h3>
              <img src="./Images/General/ASOIAF-RANDOMBUILDER-ADD-COMMANDER.png" class="header-logo mx-auto"/>
            <h3>Add Commander</h3>
          </div>}
        </Col>
        <Col xs={12} md={6}>
        {faction !== 0 && faction !== 4 && !commander &&<h3>Include Neutrals</h3>}
        {faction !== 0 && faction !== 4 && !commander && (neutrals === false) && <div onClick={event => setNeutral(event)}>
          <img src="./Images/General/ASOIAF-RANDOMBUILDER-SWITCH-OFF.png" class="header-logo mx-auto"/>
        </div>}
        {faction !== 0 && faction !== 4 && !commander && (neutrals === true) && <div onClick={event => setNeutral(event)}>
          <img src="./Images/General/ASOIAF-RANDOMBUILDER-SWITCH-ON.png" class="header-logo mx-auto"/>     
        </div>}
        </Col>
        <Col xs={3} md={3}>
          {chaos && commander && <h3>Tactics Deck</h3>}
          {!chaos && commander && <h3>Faction</h3>}
          {commander && faction === 0 && <img src="./Images/General/Neutral.png" class="header-logo mx-auto" />}
          {commander && faction === 1 && <img src="./Images/General/Lannister.png" class="header-logo mx-auto" />}
          {commander && faction === 2 && <img src="./Images/General/Stark.png" class="header-logo mx-auto" />}
          {commander && faction === 3 && <img src="./Images/General/NightsWatch.png" class="header-logo mx-auto" />}
          {commander && faction === 4 && <img src="./Images/General/FreeFolk.png" class="header-logo mx-auto" />}
          {commander && faction === 5 && <img src="./Images/General/Baratheon.png" class="header-logo mx-auto" />}
          {commander && faction === 6 && <img src="./Images/General/Targaryen.png" class="header-logo mx-auto" />}
        </Col>
        <Col xs={3} md={3}>
          <div class="image">
            {commander && <h3>Total Army Size</h3>}
              {max === 30 && commander && <img src="./Images/General/PointCounter-Container2-30PTS.png" class="header-logo mx-auto"/>}
              {max === 40 && commander && <img src="./Images/General/PointCounter-Container2-40PTS.png" class="header-logo mx-auto"/>}
              {max === 50 && commander && <img src="./Images/General/PointCounter-Container2-50PTS.png" class="header-logo mx-auto"/>}
          </div>
        </Col>
        <Col xs={3} md={3}>
          {commander && <h3>Commander</h3>}
          {NCUs.length>0 && NCUs[0].token && RenderNCUCommander()}
          {units.length>0 && units[0].attachment.token && RenderCUCommander()}
        </Col>
        <Col xs={3} md={3}>
          {commander && neutrals && <div>
            <h3>Neutrals On</h3>
            <img src="./Images/General/ASOIAF-RANDOMBUILDER-SWITCH-ON.png" class="header-logo mx-auto"/>
          </div>}
          {commander && !neutrals && <div>
            <h3>Neutrals Off</h3>
            <img src="./Images/General/ASOIAF-RANDOMBUILDER-SWITCH-OFF.png" class="header-logo mx-auto"/>
          </div>}
          <div class="image2">
          {commander && <div onClick={clearAll}>
            <h3>Clear All</h3>
            <img src="./Images/General/Clear-All.png" class="header-logo mx-auto"/>
          </div>}
          </div>
        </Col>
      </Row>

          <Row>
          <Col xs={12} md={2}>
          </Col>
          <Col xs={12} md={2}>
          {commander && <h3>NCUs</h3>}
            {NCUs.length>0 &&<RenderNCUs
              // nonCombatUnits={nonCombatUnits}
              NCUs={NCUs}
              removeNCU={removeNCU}
            />}
            {commander && <h4>
              <div>
                <ListNCUOptions units={nonCombatUnits[faction]} addNCU={addNCU}/>
              </div>
            </h4>}
          </Col>
          <Col xs={12} md={4}>
            {commander && <h3>Combat Units</h3>}
            {units.length>0 && (units[0].name !== "") &&<RenderUnits
              units={units}
              removeCU={removeCU}
            />}
            {commander && <h4>
              <div>
                <ListCUOptions units={combatUnits[faction]} addCU={addCU}/>
              </div>
            </h4>}
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <Col xs={12}>
                {commander && <h3>Attachments</h3>}
                {units.length>0 && renderAttachments(units)}
              </Col>
            </Row>
          </Col>
        </Row>
        {commander && <div class="image4">
        {commander && <img src="./Images/General/PointCounter-Container.png" width="auto" height="120px"/>}
        {commander && <h1>{pointsLeft}</h1>}
        </div>}
    </div>
  );
  }

  return (
  <div className="Home">
    {renderPage()}
  </div>
  )
}
