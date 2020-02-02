import React from 'react';
import GameContext from '../../context/gameContext';

import Timer from '../../components/Timer/Timer';
import usaStyles from './usa.module.scss';

const UsaLevel = ({ history }) => {
  const [wallLeftArray, setWallLeftArray] = React.useState([
    '/assets/usa/Left1.png',
    '/assets/usa/Left2.png',
    '/assets/usa/Left3.png',
  ]);
  const [wallLeftUrl, setWallLeftUrl] = React.useState('');

  const [wallMiddleArray, setWallMiddleArray] = React.useState([
    '/assets/usa/Middle1.png',
    '/assets/usa/Middle2.png',
    '/assets/usa/Middle3.png',
  ]);
  const [wallMiddleUrl, setWallMiddleUrl] = React.useState('');

  const [wallRightArray, setWallRightArray] = React.useState([
    '/assets/usa/Right1.png',
    '/assets/usa/Right2.png',
    '/assets/usa/Right3.png',
  ]);
  const [wallRightUrl, setWallRightUrl] = React.useState('');

  let [wallLeftScore, setWallLeftScore] = React.useState(0);
  let [wallMiddleScore, setWallMiddleScore] = React.useState(0);
  let [wallRightScore, setWallRightScore] = React.useState(0);

  const context = React.useContext(GameContext);

  React.useEffect(() => {
    if (context.usa === 'failed') {
      history.push('/worldmap');
    }
  }, []);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     if (!context.usa) {
  //       context.handleCompleteLevel('usa', 'failed');
  //       history.push('/worldmap');
  //     }
  //     return;
  //   }, 6000);
  // }, []);

  const breakWall = wall => {
    switch (wall) {
      case 'left':
        if (wallLeftScore < 2) {
          setWallLeftScore(wallLeftScore++);
          setWallLeftUrl(wallLeftArray[wallLeftScore]);
        }
        break;
      case 'middle':
        if (wallMiddleScore < 2) {
          setWallMiddleScore(wallMiddleScore++);
          setWallMiddleUrl(wallMiddleArray[wallMiddleScore]);
        }
        break;
      case 'right':
        if (wallRightScore < 2) {
          setWallRightScore(wallRightScore++);
          setWallRightUrl(wallRightArray[wallRightScore]);
        }
        break;
      default:
        console.log('How did you get here?');
    }
    if (wallLeftScore == 2 && wallMiddleScore == 2 && wallRightScore == 2) {
      alert('You Win');
      context.handleCompleteLevel('usa', 'completed');
      history.push('/worldmap');
    }
  };

  return (
    <>
      {(context.isGameStarted && context.usa === 'completed') ||
      (context.isGameStarted && context.usa === ' failed') ? (
        history.push('/worldmap')
      ) : context.isGameStarted ? (
        <div className={usaStyles.usaContainer}>
          {/* <Timer /> */}
          <div className={usaStyles.player}></div>
          <div className={usaStyles.trump}></div>
          <div
            onClick={() => breakWall('left')}
            className={`${usaStyles.wallClickArea} ${usaStyles.wallClickLeft}`}
          ></div>
          <img src={wallLeftUrl || '/assets/usa/Left1.png'} className={usaStyles.wallPiece} />
          <div
            onClick={() => breakWall('right')}
            className={`${usaStyles.wallClickArea} ${usaStyles.wallClickRight}`}
          ></div>
          <img src={wallRightUrl || '/assets/usa/Right1.png'} className={usaStyles.wallPiece} />
          <div
            onClick={() => breakWall('middle')}
            className={`${usaStyles.wallClickArea} ${usaStyles.wallClickMiddle}`}
          ></div>
          <img src={wallMiddleUrl || '/assets/usa/Middle1.png'} className={usaStyles.wallPiece} />
        </div>
      ) : (
        history.push('/')
      )}
    </>
  );
};

export default UsaLevel;
