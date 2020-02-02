import React from 'react';
import GameContext from '../../context/gameContext';

import Timer from '../../components/Timer/Timer';
import europeStyles from './europe.module.scss';

const EuropeLevel = ({ history }) => {
  const context = React.useContext(GameContext);

  React.useEffect(() => {
    if (context.europe === 'failed') {
      history.push('/worldmap');
    }
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (!context.europe) {
        context.handleCompleteLevel('europe', 'failed');
        history.push('/worldmap');
      }
      return;
    }, 6000);
  }, []);

  return (
    <>
      {(context.isGameStarted && context.europe === 'completed') ||
      (context.isGameStarted && context.europe === ' failed') ? (
        history.push('/worldmap')
      ) : context.isGameStarted ? (
        <div className={europeStyles.europe}>
          <Timer />
        </div>
      ) : (
        history.push('/')
      )}
    </>
  );
};

export default EuropeLevel;
