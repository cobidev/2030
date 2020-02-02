import React from 'react';
import GameContext from '../../context/gameContext';

import Timer from '../../components/Timer/Timer';
import europeStyles from './europe.module.scss';

const EuropeLevel = ({ history }) => {
  const context = React.useContext(GameContext);

  React.useEffect(() => {
    setTimeout(() => {
      if (!context.europe) {
        context.handleCompleteLevel('europe', null);
        history.push('/worldmap');
      }
      return;
    }, 5500);
  }, []);

  return (
    <>
      {context.isGameStarted && context.europe ? (
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
