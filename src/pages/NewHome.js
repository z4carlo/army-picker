import React, { useState, useEffect } from "react";
import "./NewHome.css";
import ReactGA, { set } from 'react-ga';
import commanders from "../units/commanders"
import combatUnits from "../units/combatUnits"
import nonCombatUnits from "../units/nonCombatUnits"
import attachments from "../units/attachments"
import { Row, Col, Button, Image } from "react-bootstrap"
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
import ListCommanders from "../functions/ListCommanders"

export default function Home(props) {
  useEffect(() => {
    ReactGA.pageview('/home');
  },[]);

  const [commanderSet, setCommanderSet] = useState(false);
  const [units, setUnits] = useState([]);
  const [NCUs, setNCUs] = useState([]);
  const [commander, setCommander] = useState([]);
  const [pointsLeft, setPointsLeft] = useState(40);
  const [faction, setFaction] = useState(0);
  const [neutralPoints, setNeutralPoints] = useState(0);
  const [haveArya, setHaveArya] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0);
  const [max, setMax] = useState(40);
  const [ks, setKs] = useState(false);
  const [unreleased, setUnreleased] = useState(false);

  function addCommander(event, i) {
    event.preventDefault();
    var newcommander = {}
    if (i >= commanders[faction].items.length) {
      newcommander = JSON.parse(JSON.stringify(commanders[0].items[i-(commanders[faction].items.length)]));
    } else {
      newcommander = JSON.parse(JSON.stringify(commanders[faction].items[i]));
    }
    var unit = {};
    if ((newcommander.type === "Infantry") || (newcommander.type === "Cavalry")) {
      if (newcommander.name === "Robb Stark") {
        unit = units.concat({name: "", attachment: newcommander}).concat({name: "Greywind", cost: 0, type: "Solo", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/10204f.jpg"});
        setUnits(unit);
      } else if (newcommander.name === "Jon Snow") {
        unit = units.concat({name: "", attachment: newcommander}).concat({name: "Ghost", cost: 0, type: "Solo", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/NightsWatch/CombatUnit-Cards/10504.jpg"});
        setUnits(unit);
      } else {
        unit = units.concat({name: "", attachment: newcommander, attachment2: "None",});
        setUnits(unit);
      }
    }
    if (newcommander.type === ("NCU")) {
      var NCU = NCUs.concat(newcommander);
      setNCUs(NCU);
    }
    calculatePoints ()
    setCommander(newcommander);
    setCommanderSet(true);
    setForceUpdate(forceUpdate + 1);
  };

  function addCU(event, i, j) {
    event.preventDefault();
    var points = pointsLeft
    var newUnit = {}
    if (i >= combatUnits[faction].items.length) {
      newUnit = JSON.parse(JSON.stringify(combatUnits[0].items[i-(combatUnits[faction].items.length)]));
    } else {
      newUnit = JSON.parse(JSON.stringify(combatUnits[faction].items[i]));
    }
    if (units[j] !== undefined && units[j].name === "") {
      newUnit.attachment = units[j].attachment;
      units[j] = newUnit;
    }
    else {
      units[j] = newUnit;
    }
    if(newUnit.name === "Free Folk Raiders") {
      var newUnit2 = { name: "Free Folk Raiders", cost: 3, attachment: "None", type: "Infantry", unique: false, imgFile: "./Images/FreeFolk/CombatUnit-Cards/10303f.jpg" };
      units[units.length] = newUnit2;
      points = points-3;
    }
    if (newUnit.neutral === true) {
      setNeutralPoints(neutralPoints-(newUnit.cost));
    }
    calculatePoints ();
    setForceUpdate(forceUpdate + 1);
  };

  function removeCU(event, i) {
    event.preventDefault();
    removeAttach(event,i);
    if (units[i].neutral === true) {
      setNeutralPoints(neutralPoints+(units[i].cost));
    }
    const removedCU = units.splice(i,1);
    setUnits (units);
    calculatePoints();
    setForceUpdate(forceUpdate + 1);
  };

  function addNCU(event, i) {
    event.preventDefault();
    var newUnit = {}
    if (i >= nonCombatUnits[faction].items.length) {
      newUnit = JSON.parse(JSON.stringify(nonCombatUnits[0].items[i-(nonCombatUnits[faction].items.length)]));
    } else {
      newUnit = JSON.parse(JSON.stringify(nonCombatUnits[faction].items[i]));
    }
    var NCU = NCUs.concat(newUnit);
    if (newUnit.name === "Arya Stark") {
      setHaveArya(true);
    }
    if (newUnit.neutral === true) {
      setNeutralPoints(neutralPoints-(newUnit.cost));
    }
    setNCUs(NCU);
    calculatePoints();
    setForceUpdate(forceUpdate + 1);
  };

  function removeNCU(event, i) {
    event.preventDefault();
    console.log(NCUs, i)
    if (NCUs[i].name === "Arya Stark") {
      setHaveArya(false);
    }
    if (NCUs[i].commander === true) {
      setCommanderSet(false);
      setCommander([]);
    }
    if (NCUs[i].neutral === true) {
      setNeutralPoints(neutralPoints+(NCUs[i].cost));
    }
    const removedNCU = NCUs.splice(i,1);
    setNCUs (NCUs);
    calculatePoints();
    setForceUpdate(forceUpdate + 1);
  };

  function addAttachment(event, i, j) {
    var attachment = {}
    if (i >= attachments[faction].items.length) {
      attachment = attachments[0].items[i-(attachments[faction].items.length)];
    } else {
      attachment = attachments[faction].items[i];
    }
    if (attachment.name === "Robb Stark") {
      units.splice((j+1), 0, {name: "Greywind", cost: 0, type: "Solo", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/10204f.jpg"});
    } else if (attachment.name === "Rickon Stark") {
      units.splice((j+1), 0, {name: "Shaggydog", cost: 0, type: "Solo", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/10210f.jpg"});
    } else if (attachment.name === "Bran and Hodor") {
      units.splice((j+1), 0, {name: "Summer", cost: 0, type: "Solo", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/Stark/CombatUnit-Cards/10207f.jpg"});
    } else if (attachment.name === "Jon Snow") {
      units.splice((j+1), 0, {name: "Ghost", cost: 0, type: "Solo", attachment: "None", attachment2: "None", unique: true, imgFile: "./Images/NightsWatch/CombatUnit-Cards/10504.jpg"});
    }
    units[j].attachment = JSON.parse(JSON.stringify(attachment));
    setUnits(units);
    if (attachment.neutral === true) {
      setNeutralPoints(neutralPoints-(attachment.cost));
    }
    calculatePoints ()
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
    if (units[i].attachment.commander === true) {
      setCommanderSet(false);
      setCommander([]);
    }
    if (units[i].attachment.neutral === true) {
      setNeutralPoints(neutralPoints+(units[i].attachment.cost));
    }
    units[i].attachment = "None";
    if (units[i].name === "") {
      units.splice(i,1);
    }
    setUnits(units);
    calculatePoints ()
    setForceUpdate(forceUpdate + 1);
  };

  function clearAll(event) {
    event.preventDefault();
    setCommanderSet(false);
    setUnits([]);
    setNCUs([]);
    setCommander([]);
    setPointsLeft(max);
    setNeutralPoints(0);
    setHaveArya(false);
  };

  const DrawImage = ({location}) => {return<Img width="100%" height="auto" src={location} />}
  const DrawTokenCommander = ({location}) => {return<Img class="header-logo mx-auto" src={location} />}

  function renderAttachments (units) {
    console.log(units);
    return [].concat(units.map((unit, j) =>
      <Row>
        <Col xs={6}>
          {units[j].attachment === "None" ?
            <div>
              {commanderSet && <ListAttachOptions options={attachments[faction]} faction={faction} neutral={attachments[0]} addAttachment={addAttachment} points={pointsLeft} NCUs={NCUs} units={units} haveArya={haveArya} type={units[j].type} j={j} ks={ks} unreleased={unreleased}/>}
            </div>
            :
            <div>
              <div>
                <Image src={units[j].attachment.imgFile} width="100%" height="auto" responsive rounded/>
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

  const chooseFaction = (event, faction) => {
    event.preventDefault();
    setFaction(faction);
    if (event.value === 0) {
      setNeutralPoints(pointsLeft);
    } else {
      setNeutralPoints(pointsLeft/2);
    }
    setCommanderSet(false);
    setUnits([]);
    setNCUs([]);
  }

  function setTotal (event, points) {
    event.preventDefault();
    setPointsLeft(points);
    setMax(points);
  }

  function RenderCommander() {
    return (
      <div>
        <DrawTokenCommander location={commander.token}/>
      </div>
    );
  }

  function calculatePoints () {
    var total = 0;
    for (const n of NCUs) {
      total = total + n.cost;
    }
    for (const u of units) {
      if (u.cost !== undefined) {
        total = total + u.cost;
      }
      if (u.adaptive === true) {
        if (u.attachment.cost > 0) {
          total = total - 1;
        }
      }
      if (u.attachment.cost !== undefined) {
        total = total + u.attachment.cost;
      }
      if (u.attachment.attachment2 !== undefined && u.attachment.attachment2.cost !== undefined) {
        total = total + u.attachment.attachment2.cost;
      }
    }
    const left = max - total;
    setPointsLeft(left);
  }

  function renderPage() {
    return (
    <div class="background-100">
      {/* <Header block />
      <HeaderSpacer/> */}
      <Row>
        {<PointsRow setTotal={setTotal} ks={ks} setKs={setKs} unreleased={unreleased} setUnreleased={setUnreleased}/>}
        {<FactionRow faction={faction} chooseFaction={chooseFaction}/>}
      </Row>
      <Row>
        <Col xs={12} md={2}>
          {<h3>Faction</h3>}
          {faction === 0 && <img src="./Images/General/Neutral.png" class="header-logo mx-auto" />}
          {faction === 1 && <img src="./Images/General/Lannister.png" class="header-logo mx-auto" />}
          {faction === 2 && <img src="./Images/General/Stark.png" class="header-logo mx-auto" />}
          {faction === 3 && <img src="./Images/General/NightsWatch.png" class="header-logo mx-auto" />}
          {faction === 4 && <img src="./Images/General/FreeFolk.png" class="header-logo mx-auto" />}
          {faction === 5 && <img src="./Images/General/Baratheon.png" class="header-logo mx-auto" />}
          {faction === 6 && <img src="./Images/General/Targaryen.png" class="header-logo mx-auto" />}
          <div class="image">
            {<h3>Total Army Size</h3>}
            {max === 30 && <img src="./Images/General/PointCounter-Container2-30PTS.png" class="header-logo mx-auto"/>}
            {max === 40 && <img src="./Images/General/PointCounter-Container2-40PTS.png" class="header-logo mx-auto"/>}
            {max === 50 && <img src="./Images/General/PointCounter-Container2-50PTS.png" class="header-logo mx-auto"/>}
          </div>
          {commanderSet && <div>
            {<h3>Commander</h3>}
            {RenderCommander()}
          </div>}
          {!commanderSet && <div onClick={addCommander}>
            <h3>Add Commander</h3>
            <ListCommanders units={commanders[faction]} faction={faction} neutral={commanders[0]} addCommander={addCommander} ks={ks} unreleased={unreleased}/>
          </div>}
          <div class="image2">
          {commanderSet && <div onClick={clearAll}>
            <h3>Clear All</h3>
            <img src="./Images/General/Clear-All.png" class="header-logo mx-auto"/>
          </div>}
          </div>
        </Col>
          <Col xs={12} md={2}>
            {<h3>NCUs</h3>}
            {NCUs.length>0 &&<RenderNCUs NCUs={NCUs} removeNCU={removeNCU}/>}
            {commanderSet && <h4>
              <div>
                <ListNCUOptions options={nonCombatUnits[faction]} faction={faction} neutral={nonCombatUnits[0]} addNCU={addNCU} points={pointsLeft} NCUs={NCUs} units={units} haveArya={haveArya} ks={ks} unreleased={unreleased}/>
              </div>
            </h4>}
          </Col>
          <Col xs={12} md={4}>
            {<h3>Combat Units</h3>}
            {<RenderUnits units={units} faction={faction} neutral={combatUnits[0]} removeCU={removeCU} options={combatUnits[faction]} addCU={addCU} points={pointsLeft} NCUs={NCUs} haveArya={haveArya}/>}
            {commanderSet && <h4>
              <div>
                <ListCUOptions options={combatUnits[faction]} faction={faction} neutral={combatUnits[0]} addCU={addCU} points={pointsLeft} NCUs={NCUs} units={units} haveArya={haveArya} j={(units.length)} commander={commander} ks={ks} unreleased={unreleased}/>
              </div>
            </h4>}
          </Col>
          <Col xs={12} md={4}>
            <Row>
              <Col xs={12}>
                {<h3>Attachments</h3>}
                {renderAttachments(units, commanderSet)}
              </Col>
            </Row>
          </Col>
        </Row>
        {commanderSet && <div class="image4">
        {commanderSet && <img src="./Images/General/PointCounter-Container.png" width="auto" height="120px"/>}
        {commanderSet && <h1>{pointsLeft}</h1>}
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