import React from 'react';
import { withRouter } from 'react-router-dom';
import creditsStyles from './credits.module.scss';

const Credits = ({ history }) => {
  return (
    <div>
      <h1>Credits</h1>
      <div className={creditsStyles.countryButton} onClick={() => history.push('')}>
        Back
      </div>
    </div>
  );
};

export default Credits;
