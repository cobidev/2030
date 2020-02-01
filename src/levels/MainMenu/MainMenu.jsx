import React from 'react';
import { withRouter } from 'react-router-dom';
import mainMenuStyles from './mainmenu.module.scss';

const MainMenu = ({ history }) => {
  return (
    <div>
      <h1>Main Menu</h1>
      <div className={mainMenuStyles.countryButton} onClick={() => history.push('worldmap')}>
        Start Game
      </div>
      <div className={mainMenuStyles.countryButton} onClick={() => history.push('instructions')}>
        Instructions
      </div>
      <div className={mainMenuStyles.countryButton} onClick={() => history.push('credits')}>
        Credits
      </div>
    </div>
  );
};

export default MainMenu;
