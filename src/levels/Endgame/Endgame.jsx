import React from 'react';
import { withRouter } from 'react-router-dom';
import GameContext from '../../context/gameContext';

import endgameStyles from './endgame.module.scss';

const Endgame = ({ history }) => {
  const context = React.useContext(GameContext);

  React.useEffect(() => {
    if (context.seconds <= 0) {
      context.setTime({ seconds: null });
    }
  }, []);

  const handleBackToHome = () => {
    context.handleClearState();
    history.push('/menu');
  };

  return (
    <>
      {context.isGameStarted && context.isWorldOver ? (
        <div className={endgameStyles.endGameWrapper}>
          <div className={endgameStyles.gameOverGif}></div>
          <div className={endgameStyles.dontWorryText}></div>
          <div className={endgameStyles.tryAgainButton} onClick={handleBackToHome}></div>
        </div>
      ) : (
        history.push('/menu')
      )}
    </>
  );
};

export default withRouter(Endgame);
