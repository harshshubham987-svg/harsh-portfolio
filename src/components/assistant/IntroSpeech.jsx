import { useEffect } from "react";

const IntroSpeech = () => {

  useEffect(() => {

    const playAudio = () => {

      const audio = new Audio("/assistant/audio/intro.mp3");

      audio.volume = 0.9;

      audio.play();

      window.removeEventListener("click", playAudio);

    };

    window.addEventListener("click", playAudio);

    return () => {
      window.removeEventListener("click", playAudio);
    };

  }, []);

  return null;
};

export default IntroSpeech;