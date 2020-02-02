import React from 'react';
import Draggable from 'react-draggable';
import GameContext from '../../context/gameContext';

import Timer from '../../components/Timer/Timer';
import DoomsdayTimer from '../../components/DoomsdayTimer/DoomsdayTimer';
import europeStyles from './europe.module.scss';

const EuropeLevel = ({ history }) => {
  const context = React.useContext(GameContext);
  const [activeDrags, setActiveDrags] = React.useState({
    drags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
  });
  const draggableRope = React.useRef();

  React.useEffect(() => {
    if (context.europe === 'failed') {
      history.push('/worldmap');
    }
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      if (!context.europe) {
        history.push('/worldmap');
      }
      return;
    }, 6000);
  }, []);

  React.useEffect(() => {
    const { x } = draggableRope.current.getBoundingClientRect();
    if (x && x > 325) {
      context.handleCompleteLevel('europe', 'completed');
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
      {(context.isGameStarted && context.europe === 'completed') ||
      (context.isGameStarted && context.europe === ' failed') ? (
        history.push('/worldmap')
      ) : context.isGameStarted ? (
        <div className={europeStyles.europe}>
          <DoomsdayTimer history={history} />
          <Timer />

          <Draggable {...dragHandlers}>
            <div ref={draggableRope} className={europeStyles.ukRope}></div>
          </Draggable>
        </div>
      ) : (
        history.push('/')
      )}
    </>
  );
};

export default EuropeLevel;
