import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GameProvider } from './context/gameContext';
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

const App = () => {
  const [gameStatus, setGameStatus] = React.useState({
    australia: false,
    usa: false,
    china: false,
    ocean: false,
    europe: false,
  });

  const handleCompleteLevel = level => {
    setGameStatus({
      ...gameStatus,
      [level]: !gameStatus[level],
    });
  };

  return (
    <GameProvider value={{ ...gameStatus, handleCompleteLevel }}>
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
    </GameProvider>
  );
};

export default App;
