import React from "react";
import { Switch, Route } from "react-router-dom";

import UsaLevel from "./levels/UsaLevel";
import AustraliaLevel from "./levels/AustraliaLevel";
import ChinaLevel from "./levels/ChinaLevel";
import EuropeLevel from "./levels/EuropeLevel";
import OceanLevel from "./levels/OceanLevel";

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
