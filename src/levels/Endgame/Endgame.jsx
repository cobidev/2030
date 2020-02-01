import React from 'react';
import { withRouter } from 'react-router-dom';
import endgameStyles from './endgame.module.scss';

const Endgame = ({ history }) => {
  return (
    <div>
      <h1>Endgame</h1>
      <div className={endgameStyles.countryButton} onClick={() => history.push('worldmap')}>
        Try again
      </div>
      <div className={endgameStyles.countryButton} onClick={() => history.push('')}>
        Back to menu
      </div>
    </div>
  );
};

export default Endgame;
