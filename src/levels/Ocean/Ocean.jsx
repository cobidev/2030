import React from 'react';
import oceanStyles from './ocean.module.scss';
import Draggable from 'react-draggable';

const OceanLevel = () => {
  return (
    <div className={oceanStyles.oceanContainer}>
      <img src="assets/ocean/tortoiseBack.png" className={oceanStyles.tortoiseDrawing} />
      <Draggable
        axis="x"
        handle="#straw"
        defaultPosition={{ x: 0, y: 0 }}
        position={null}
        grid={[25, 25]}
        scale={1}
        onStart={() => {
          console.log('lo que tu quieras');
        }}
        onDrag={() => {
          console.log('lo que tu quieras');
        }}
      >
        <img src="assets/ocean/straw.png" className={oceanStyles.tortoiseDrawing} id="straw" />
      </Draggable>
      <img src="assets/ocean/tortoiseFront.png" className={oceanStyles.tortoiseDrawingFront} />
    </div>
  );
};

export default OceanLevel;
