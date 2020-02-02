import React from 'react';
import GameContext from '../../context/gameContext';

import Timer from '../../components/Timer/Timer';
import usaStyles from './usa.module.scss';

const UsaLevel = ({ history }) => {
  const context = React.useContext(GameContext);

  React.useEffect(() => {
    if (context.usa === 'failed') {
      history.push('/worldmap');
    }
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (!context.usa) {
        context.handleCompleteLevel('usa', 'failed');
        history.push('/worldmap');
      }
      return;
    }, 6000);
  }, []);

  return (
    <>
      {(context.isGameStarted && context.usa === 'completed') ||
      (context.isGameStarted && context.usa === ' failed') ? (
        history.push('/worldmap')
      ) : context.isGameStarted ? (
        <div className={usaStyles.usa}>
          <Timer />
        </div>
      ) : (
        history.push('/')
      )}
    </>
  );
};

export default UsaLevel;
