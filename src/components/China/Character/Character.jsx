import React from "react";
import chineseCharacterImg from "../../../assets/chinese-character.png";

import characterStyles from "./character.module.scss";

const Character = () => {
  return (
    <>
      <img
        className={characterStyles.chineseCharacter}
        src={chineseCharacterImg}
        alt="Chinese Character"
      />
    </>
  );
};

export default Character;
