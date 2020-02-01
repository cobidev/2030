import React from 'react';
import { withRouter } from 'react-router-dom';
import worldMapStyles from './worldmap.module.scss';

const WorldMap = ({ history }) => {
  return (
    <div className={worldMapStyles.worldMapContainer}>
      <h1>WORLD MAP</h1>
      <div className={worldMapStyles.countryButtonUsa} onClick={() => history.push('usa')}>
        usa
      </div>
      <div className={worldMapStyles.countryButtonChina} onClick={() => history.push('china')}>
        china
      </div>
      <div className={worldMapStyles.countryButtonEurope} onClick={() => history.push('europe')}>
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
      <div>Endgame</div>
    </div>
  );
};

export default WorldMap;
