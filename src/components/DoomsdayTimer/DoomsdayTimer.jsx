import React, { Component } from 'react';
import { GameConsumer } from '../../context/gameContext';

import doomTimerStyles from './doomTimer.module.scss';

export default class DoomsdayTimer extends Component {
  render() {
    return (
      <GameConsumer>
        {props => {
          return (
            <div>
              {props.seconds === 0 ? null : (
                <div className={doomTimerStyles.timerWrapper}>
                  <h1>{props.seconds}</h1>
                </div>
              )}
            </div>
          );
        }}
      </GameConsumer>
    );
  }
}
