import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainMenu from './levels/MainMenu/MainMenu';
import Instructions from './levels/Instructions/Instructions';
import Credits from './levels/Credits/Credits';
import UsaLevel from './levels/Usa/Usa';
import AustraliaLevel from './levels/Australia/Australia';
import ChinaLevel from './levels/China/China';
import EuropeLevel from './levels/Europe/Europe';
import OceanLevel from './levels/Ocean/Ocean';
import WorldMap from './levels/WorldMap/WorldMap';
import Endgame from './levels/Endgame/Endgame';

import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainMenu} />
        <Route exact path="/instructions" component={Instructions} />
        <Route exact path="/credits" component={Credits} />
        <Route exact path="/usa" component={UsaLevel} />
        <Route exact path="/australia" component={AustraliaLevel} />
        <Route exact path="/china" component={ChinaLevel} />
        <Route exact path="/europe" component={EuropeLevel} />
        <Route exact path="/ocean" component={OceanLevel} />
        <Route exact path="/worldmap" component={WorldMap} />
        <Route exact path="/endgame" component={Endgame} />
      </Switch>
    </div>
  );
}

export default App;
