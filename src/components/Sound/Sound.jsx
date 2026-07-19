import { useState, useRef, useEffect } from "react";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import styled from "styled-components";

const HK_TIMEZONE = 8;
const STORAGE_KEY = "music_was_playing";

function isHkWeekend() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const hk = new Date(utc + HK_TIMEZONE * 3600000);
  const day = hk.getDay();
  return day === 0 || day === 6;
}

export default function Sound() {
  const [isPlaying, setIsPlaying] = useState(() => {
    if (isHkWeekend()) {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved !== null ? saved === "true" : true;
    }
    return false;
  });

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <>
      <StyledAudio ref={audioRef} loop id="audio">
        <source src="background-music.mp3" />
      </StyledAudio>
      <SoundWrapper onClick={togglePlay}>{isPlaying ? <GiSoundOff size={30} /> : <GiSoundOn size={30} />}</SoundWrapper>
    </>
  );
}

const StyledAudio = styled.audio`
  display: none;
`;
const SoundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 36px;
  height: 36px;
  bottom: 10px;
  right: 10px;
  z-index: 99;
  border-radius: 50px;
  background-color: #ffffff;
  box-shadow: 2px 2px 0.3em #47464628;
`;
