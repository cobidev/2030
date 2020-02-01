import React from "react";
import { Switch, Route } from "react-router-dom";

import UsaLevel from "./levels/Usa/Usa";
import AustraliaLevel from "./levels/Australia/Australia";
import ChinaLevel from "./levels/China/China";
import EuropeLevel from "./levels/Europe/Europe";
import OceanLevel from "./levels/Ocean/Ocean";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/usa" component={UsaLevel} />
        <Route exact path="/australia" component={AustraliaLevel} />
        <Route exact path="/china" component={ChinaLevel} />
        <Route exact path="/europe" component={EuropeLevel} />
        <Route exact path="/ocean" component={OceanLevel} />
      </Switch>
    </div>
  );
}

export default App;
