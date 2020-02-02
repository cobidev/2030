import React from 'react';

import mainVideoStyles from './mainvideo.module.scss';

const Video = ({ history }) => {
  const videoRef = React.useRef();

  React.useEffect(() => {
    videoRef.current.addEventListener('ended', myHandler, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoRef]);

  const myHandler = event => history.push('/menu');

  return (
    <section className={`${mainVideoStyles.fullscreenVideo}`}>
      <div className={`${mainVideoStyles.fullscreenVideoWrap}`}>
        <video ref={videoRef} src="/assets/videos/main.mp4" autoPlay={true} loop={false} />
      </div>
    </section>
  );
};

export default Video;
