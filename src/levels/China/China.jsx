import React from 'react';
import ChineseCharacter from '../../components/China/Character/Character';

import chinaStyles from './china.module.scss';

const ChinaLevel = () => {
  return (
    <div className={chinaStyles.china}>
      <h1>CHINA COUNTRY</h1>

      <ChineseCharacter />

      <footer className={chinaStyles.footer}></footer>
    </div>
  );
};

export default ChinaLevel;
