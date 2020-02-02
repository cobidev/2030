import React from 'react';
import GameContext from '../../context/gameContext';

import worldMapStyles from './worldmap.module.scss';

const WorldMap = ({ history }) => {
  const context = React.useContext(GameContext);

  return (
    <>
      {!context.isGameStarted ? (
        history.push('/')
      ) : context.isWorldOver ? (
        history.push('/end')
      ) : (
        <div className={worldMapStyles.worldMapContainer}>
          <div
            style={{ pointerEvents: context.usa === 'failed' ? 'none' : 'initial' }}
            className={`${worldMapStyles.countryIcon} ${worldMapStyles.usa}`}
            onClick={() => history.push('usa')}
          >
            {context.usa !== 'completed' ? (
              <img
                src={`assets/usa-${context.usa === 'failed' ? 'danger' : 'icon'}.png`}
                alt="Wall Icon"
              />
            ) : null}
          </div>

          <div
            style={{ pointerEvents: context.china === 'failed' ? 'none' : 'initial' }}
            className={`${worldMapStyles.countryIcon} ${worldMapStyles.china}`}
            onClick={() => history.push('china')}
          >
            {context.china !== 'completed' ? (
              <img
                src={`assets/china-${context.china === 'failed' ? 'danger' : 'icon'}.png`}
                alt="Virus Icon"
              />
            ) : null}
          </div>

          <div
            style={{ pointerEvents: context.europe === 'failed' ? 'none' : 'initial' }}
            className={`${worldMapStyles.countryIcon} ${worldMapStyles.europe}`}
            onClick={() => history.push('europe')}
          >
            {context.europe !== 'completed' ? (
              <img
                src={`assets/europe-${context.europe === 'failed' ? 'danger' : 'icon'}.png`}
                alt="Flag Icon"
              />
            ) : null}
          </div>

          <div
            style={{ pointerEvents: context.australia === 'failed' ? 'none' : 'initial' }}
            className={`${worldMapStyles.countryIcon} ${worldMapStyles.australia}`}
            onClick={() => history.push('australia')}
          >
            {context.australia !== 'completed' ? (
              <img
                src={`assets/australia-${context.australia === 'failed' ? 'danger' : 'icon'}.png`}
                alt="Fire Icon"
              />
            ) : null}
          </div>

          <div
            style={{ pointerEvents: context.ocean === 'failed' ? 'none' : 'initial' }}
            className={`${worldMapStyles.countryIcon} ${worldMapStyles.ocean}`}
            onClick={() => history.push('ocean')}
          >
            {context.ocean !== 'completed' ? (
              <img
                src={`assets/ocean-${context.ocean === 'failed' ? 'danger' : 'icon'}.png`}
                alt="Trash Icon"
              />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default WorldMap;
