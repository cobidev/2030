import React from 'react';
import { withRouter } from 'react-router-dom';
import worldMapStyles from './worldmap.module.scss';

const WorldMap = ({ history }) => {
  return (
    <div>
      <h1>WORLD MAP</h1>
      <div className={worldMapStyles.countryButton} onClick={() => history.push('usa')}>
        usa
      </div>
      <div className={worldMapStyles.countryButton} onClick={() => history.push('endgame')}>
        Endgame
      </div>
    </div>
  );
};

export default WorldMap;
