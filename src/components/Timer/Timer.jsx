import React, { Component } from 'react';

import timerStyles from './timer.module.scss';

export default class Timer extends Component {
  state = {
    seconds: 5,
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1,
        }));
      }

      if (seconds === 0) {
        clearInterval(this.myInterval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { seconds } = this.state;
    return (
      <div>
        {seconds === 0 ? (
          <div className={timerStyles.timerWrapper}>
            <h1>Perdiste :(</h1>
          </div>
        ) : null}
      </div>
    );
  }
}
