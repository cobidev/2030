import React from 'react';
import GameContext from '../../context/gameContext';

import Timer from '../../components/Timer/Timer';
import australiaStyles from './australia.module.scss';

const AustraliaLevel = ({ history }) => {
  const context = React.useContext(GameContext);

  React.useEffect(() => {
    if (context.australia === 'failed') {
      history.push('/worldmap');
    }
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (!context.australia) {
        context.handleCompleteLevel('australia', 'failed');
        history.push('/worldmap');
      }
      return;
    }, 6000);
  }, []);

  return (
    <>
      {(context.isGameStarted && context.australia === 'completed') ||
      (context.isGameStarted && context.australia === ' failed') ? (
        history.push('/worldmap')
      ) : context.isGameStarted ? (
        <div className={australiaStyles.australia}>
          <Timer />
        </div>
      ) : (
        history.push('/')
      )}
    </>
  );
};

export default AustraliaLevel;
