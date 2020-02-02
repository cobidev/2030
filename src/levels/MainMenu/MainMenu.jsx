import React from 'react';
import { withRouter } from 'react-router-dom';
import GameContext from '../../context/gameContext';

import Endgame from '../Endgame/Endgame';
import mainMenuStyles from './mainmenu.module.scss';

const MainMenu = ({ history }) => {
  const context = React.useContext(GameContext);

  React.useEffect(() => {
    context.handleClearState();
  }, []);

  const startGame = () => {
    context.handleStartGlobalTime();
    history.push('/worldmap');
  };

  return (
    <>
      {context.isWorldOver ? (
        <Endgame />
      ) : (
        <div>
          <audio autoPlay="autoplay" loop>
            <source src="assets/music/home.mp3" />
          </audio>
          <h1>Main Menu</h1>
          <div className={mainMenuStyles.countryButton} onClick={startGame}>
            Start Game
          </div>
          <div className={mainMenuStyles.countryButton} onClick={() => history.push('credits')}>
            Credits
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(MainMenu);
