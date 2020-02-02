import React from 'react';
import { withRouter } from 'react-router-dom';
import GameContext from '../../context/gameContext';

import Endgame from '../Endgame/Endgame';
import mainMenuStyles from './mainmenu.module.scss';

const MainMenu = ({ history }) => {
  const context = React.useContext(GameContext);

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
