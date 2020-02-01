import React from 'react';

import characterStyles from './character.module.scss';

const Character = ({ id, image, speed, onClick }) => {
  return (
    <>
      <img
        onClick={onClick}
        className={`${characterStyles.chineseCharacter} chinese-character speed-${speed}`}
        src={image}
        alt="Chinese Character"
        id={id}
      />
    </>
  );
};

export default Character;
