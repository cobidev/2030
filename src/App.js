import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GameProvider } from './context/gameContext';
import MainMenu from './levels/MainMenu/MainMenu';
import Credits from './levels/Credits/Credits';
import UsaLevel from './levels/Usa/Usa';
import AustraliaLevel from './levels/Australia/Australia';
import ChinaLevel from './levels/China/China';
import EuropeLevel from './levels/Europe/Europe';
import OceanLevel from './levels/Ocean/Ocean';
import WorldMap from './levels/WorldMap/WorldMap';
import Endgame from './levels/Endgame/Endgame';
import MainVideo from './levels/MainVideo/MainVideo';

import './App.css';

const App = () => {
  const [levelStatus, setLevelStatus] = React.useState({
    australia: null,
    usa: null,
    china: null,
    ocean: null,
    europe: null,
  });
  const [gameStatus, setGameStatus] = React.useState({
    isWorldOver: false,
    isGameStarted: false,
  });
  const [time, setTime] = React.useState({ seconds: 20 });

  React.useEffect(() => {
    if (time.seconds <= 0) {
      if (gameStatus.isWorldOver === false) {
        setGameStatus({ ...gameStatus, isWorldOver: true });
        setTime({ seconds: null });
      }

      if (window.location.pathname.includes('menu')) {
        setGameStatus({ ...gameStatus, isWorldOver: false });
        setTime({ seconds: null });
      }
    }
  }, [time.seconds]);

  const handleCompleteLevel = (level, isCompleted) => {
    setLevelStatus({
      ...levelStatus,
      [level]: isCompleted,
    });
  };

  const handleStartGlobalTime = () => {
    if (gameStatus.isWorldOver) return;

    setGameStatus({ ...gameStatus, isGameStarted: true });
    setTime({ seconds: 20 });

    let interval = setInterval(() => {
      if (time.seconds > 0) {
        setTime(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }

      if (time.seconds <= 0) {
        clearInterval(interval);
      }
    }, 1000);
  };

  const handleClearState = () => {
    setGameStatus({ ...gameStatus, isGameStarted: false, isWorldOver: false });
    setLevelStatus({
      ...levelStatus,
      australia: null,
      usa: null,
      china: null,
      ocean: null,
      europe: null,
    });
  };

  return (
    <GameProvider
      value={{
        ...levelStatus,
        ...gameStatus,
        ...time,
        setTime,
        setGameStatus,
        handleCompleteLevel,
        handleStartGlobalTime,
        handleClearState,
      }}
    >
      <div className="App">
        {window.location.pathname.includes('worldmap') ? (
          <audio autoPlay="autoplay">
            <source src="assets/music/doom.mp3" />
          </audio>
        ) : null}

        <Switch>
          <Route exact path="/" component={MainVideo} />
          <Route exact path="/menu" component={MainMenu} />
          <Route exact path="/worldmap" component={WorldMap} />
          <Route exact path="/worldmap/usa" component={UsaLevel} />
          <Route exact path="/worldmap/australia" component={AustraliaLevel} />
          <Route exact path="/worldmap/china" component={ChinaLevel} />
          <Route exact path="/worldmap/europe" component={EuropeLevel} />
          <Route exact path="/worldmap/ocean" component={OceanLevel} />
          <Route exact path="/worldmap/end" component={Endgame} />
          <Route exact path="/credits" component={Credits} />
        </Switch>
      </div>
    </GameProvider>
  );
};

export default App;
