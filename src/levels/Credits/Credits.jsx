import React from 'react';
import { withRouter } from 'react-router-dom';

import creditsStyles from './credits.module.scss';

const Credits = ({ history }) => {
  return (
    <div className={creditsStyles.credits}>
      <h1>Our Team</h1>
      <div className={creditsStyles.imageWrapper}>
        <img src="/assets/team.jpg" alt="Team" />
      </div>
      <h2>
        Global Game Jam 2020 - MediaMonks{' '}
        <span role="img" aria-label="flag">
          🇦🇷
        </span>
      </h2>
      <div className={creditsStyles.getBackButton} onClick={() => history.push('/menu')}>
        Go Back
      </div>
    </div>
  );
};

export default withRouter(Credits);
