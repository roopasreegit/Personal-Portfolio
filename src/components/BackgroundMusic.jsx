"use client";

import { useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/forest_bgm.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-[100] rounded-full bg-background/70 p-4 text-fuchsia-100 backdrop-blur-md transition-all hover:bg-background/90"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? "♫" : "♪"}
      </button>
    </>
  );
};

export default BackgroundMusic;