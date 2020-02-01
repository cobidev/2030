import React from 'react';
import { TweenMax, Linear } from 'gsap';
import ChineseCharacter from '../../components/China/Character/Character';
import { charactersData } from './data';

import chinaStyles from './china.module.scss';

const ChinaLevel = () => {
  React.useEffect(() => {
    setCharacterMoving();
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

  const handleClickCharacter = () => {
    alert('You clicked a Chinese 👲🏻');
  };

  return (
    <div className={chinaStyles.china}>
      <main className={chinaStyles.main}>
        {charactersData.map(({ id, url }) => (
          <ChineseCharacter onClick={handleClickCharacter} key={id} speed={id} image={url} />
        ))}
      </main>
      <footer className={chinaStyles.footer}></footer>
    </div>
  );
};

export default ChinaLevel;
