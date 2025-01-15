import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import backgroundMusic from '../../public/assets/background_music.mp3';

const AutoplayAudio = ({ play }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (play) {
      audio
        .play()
        .catch((error) => {
        console.error("Autoplay failed:", error);
      });
    } else {
      audio.pause();
      audio.currentTime = 0; // Reset to the beginning
    }
  }, [play]);

  return (
    <div>
      <audio ref={audioRef} src={backgroundMusic} autoPlay loop />
    </div>
  );
};

export default AutoplayAudio;

AutoplayAudio.propTypes = {
  play: PropTypes.bool,
};