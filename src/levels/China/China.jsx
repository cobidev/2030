import React from 'react';
import { TweenMax, Linear } from 'gsap';
import { withRouter } from 'react-router-dom';
import GameContext from '../../context/gameContext';
import { charactersData } from './data';

import ChineseCharacter from '../../components/China/Character/Character';
import DoomsdayTimer from '../../components/DoomsdayTimer/DoomsdayTimer';
import Timer from '../../components/Timer/Timer';
import chinaStyles from './china.module.scss';

const ChinaLevel = ({ history }) => {
  const context = React.useContext(GameContext);

  React.useEffect(() => {
    if (context.china === 'failed') {
      history.push('/worldmap');
    }
  }, []);

  React.useEffect(() => {
    setCharacterMoving();
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (!context.china) {
        history.push('/worldmap');
      }
      return;
    }, 6000);
  }, []);

  const setCharacterMoving = () => {
    charactersData.forEach(({ id, speed }) => {
      TweenMax.to(`.chinese-character.speed-${id}`, speed, {
        ease: Linear.easeNone,
        x: `+=${window.innerWidth}`,
        repeat: -1,
      });
    });
  };

  const handleClickCharacter = e => {
    if (String(e.target.id) === '1') {
      context.handleCompleteLevel('china', 'completed');
      history.push('/worldmap');
    }
  };

  return (
    <>
      {(context.isGameStarted && context.china === 'completed') ||
      (context.isGameStarted && context.china === 'failed') ? (
        history.push('/worldmap')
      ) : context.isGameStarted ? (
        <div className={chinaStyles.china}>
          <DoomsdayTimer history={history} />
          <Timer />
          <main className={chinaStyles.main}>
            {charactersData.map(({ id, url }) => (
              <ChineseCharacter
                onClick={handleClickCharacter}
                id={id}
                key={id}
                speed={id}
                image={url}
              />
            ))}
          </main>
          <footer className={chinaStyles.footer}></footer>
        </div>
      ) : (
        history.push('/')
      )}
    </>
  );
};

export default withRouter(ChinaLevel);
