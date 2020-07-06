import React from "react";
// import { Link } from "react-router-dom";
// import { Navbar } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { Grid } from "react-bootstrap"

function App(props) {
  return (
    <Grid>
      <Routes />
    </Grid>
  );
}

export default App;