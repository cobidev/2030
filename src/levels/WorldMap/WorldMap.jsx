import React from 'react';
import GameContext from '../../context/gameContext';

import worldMapStyles from './worldmap.module.scss';

const WorldMap = ({ history }) => {
  const context = React.useContext(GameContext);

  return (
    <>
      {!context.isGameStarted ? (
        history.push('/')
      ) : context.isWorldOver ? (
        history.push('/end')
      ) : (
        <div className={worldMapStyles.worldMapContainer}>
          <div className={worldMapStyles.countryButtonUsa} onClick={() => history.push('usa')}>
            usa
          </div>
          <div className={worldMapStyles.countryButtonChina} onClick={() => history.push('china')}>
            china
          </div>
          <div
            className={worldMapStyles.countryButtonEurope}
            onClick={() => history.push('europe')}
          >
            europe
          </div>
          <div
            className={worldMapStyles.countryButtonAustralia}
            onClick={() => history.push('australia')}
          >
            australia
          </div>
          <div className={worldMapStyles.countryButtonOcean} onClick={() => history.push('ocean')}>
            ocean
          </div>
        </div>
      )}
    </>
  );
};

export default WorldMap;
