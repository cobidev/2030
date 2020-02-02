import React from 'react';
import Draggable from 'react-draggable';
import GameContext from '../../context/gameContext';
import { withRouter } from 'react-router-dom';

import Timer from '../../components/Timer/Timer';
import oceanStyles from './ocean.module.scss';

const OceanLevel = ({ history }) => {
  const context = React.useContext(GameContext);
  const [activeDrags, setActiveDrags] = React.useState({
    drags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
  });
  const draggableStraw = React.useRef();

  React.useEffect(() => {
    if (context.ocean === 'failed') {
      history.push('/worldmap');
    }
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (!context.ocean) {
        context.handleCompleteLevel('ocean', 'failed');
        history.push('/worldmap');
        return;
      }
    }, 6000);
  }, []);

  React.useEffect(() => {
    const { x } = draggableStraw.current.getBoundingClientRect();
    if (x && x > 580) {
      alert('You Win');
      context.handleCompleteLevel('ocean', 'completed');
      history.push('/worldmap');
    }
  }, [activeDrags.drags]);

  const onStart = () => {
    setActiveDrags({
      ...activeDrags,
      drags: ++activeDrags.drags,
    });
  };

  const onStop = () => {
    setActiveDrags({
      ...activeDrags,
      drags: --activeDrags.drags,
    });
  };

  const dragHandlers = { onStart: onStart, onStop: onStop };

  return (
    <>
      {(context.isGameStarted && context.ocean === 'completed') ||
      (context.isGameStarted && context.ocean === 'failed') ? (
        history.push('/worldmap')
      ) : context.isGameStarted ? (
        <div className={oceanStyles.oceanContainer}>
          <Timer />
          <img
            src="assets/ocean/tortoiseBack.png"
            alt="Tortoise Back"
            className={oceanStyles.tortoiseDrawing}
          />
          <Draggable {...dragHandlers}>
            <div ref={draggableStraw} className={oceanStyles.tortoiseStraw}></div>
          </Draggable>
          <img
            src="assets/ocean/tortoiseFront.png"
            alt="Tortoise Front"
            className={oceanStyles.tortoiseDrawingFront}
          />
        </div>
      ) : (
        history.push('/')
      )}
    </>
  );
};

export default withRouter(OceanLevel);
