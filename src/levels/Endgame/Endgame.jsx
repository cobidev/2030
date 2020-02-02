import React from 'react';
import { withRouter } from 'react-router-dom';
import GameContext from '../../context/gameContext';

import endgameStyles from './endgame.module.scss';

const Endgame = ({ history }) => {
  const context = React.useContext(GameContext);

  const handleBackToHome = () => {
    context.handleClearState();
    history.push('/');
  };

  return (
    <>
      {context.isGameStarted && context.isWorldOver ? (
        <div>
          <h1>You lose!</h1>
          <div className={endgameStyles.countryButton} onClick={handleBackToHome}>
            Back to menu
          </div>
        </div>
      ) : (
        history.push('/')
      )}
    </>
  );
};

export default withRouter(Endgame);
