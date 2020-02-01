import React from 'react';
import { withRouter } from 'react-router-dom';
import instructionsStyles from './instructions.module.scss';

const Instructions = ({ history }) => {
  return (
    <div>
      <h1>Instructions</h1>
      <div className={instructionsStyles.countryButton} onClick={() => history.push('')}>
        Back
      </div>
    </div>
  );
};

export default Instructions;
