import React from 'react';
import { withRouter } from 'react-router-dom';
import GameContext from '../../context/gameContext';

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
      <div>
        <audio autoPlay="autoplay" loop>
          <source src="assets/music/home.mp3" />
        </audio>
        <div className={mainMenuStyles.menuWrapper}>
          <div className={mainMenuStyles.menuButtonWrapper}>
            <div className={mainMenuStyles.menuButton} onClick={startGame}>
              <img
                src="/assets/menu/play.png"
                alt="Play"
                onMouseOver={e => (e.currentTarget.src = '/assets/menu/play-hover.png')}
                onMouseLeave={e => (e.currentTarget.src = '/assets/menu/play.png')}
              />
            </div>
            <div className={mainMenuStyles.menuButton} onClick={() => history.push('/credits')}>
              <img
                src="/assets/menu/credits.png"
                alt="Credits"
                onMouseOver={e => (e.currentTarget.src = '/assets/menu/credits-hover.png')}
                onMouseLeave={e => (e.currentTarget.src = '/assets/menu/credits.png')}
              />
            </div>
          </div>
        </div>
      </div>
      )
    </>
  );
};

export default withRouter(MainMenu);
