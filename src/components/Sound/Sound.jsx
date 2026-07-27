import { useState, useRef, useEffect, useCallback } from "react";
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import styled, { keyframes, css } from "styled-components";

const HK_TIMEZONE = 8;
const STORAGE_KEY = "music_was_playing";
const AUTO_PLAY_DELAY = 2500;

function isHkWeekend() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const hk = new Date(utc + HK_TIMEZONE * 3600000);
  const day = hk.getDay();
  return day === 0 || day === 6;
}

export default function Sound({ onPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const play = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    el.muted = false;
    el.play().catch(() => {});
    onPlay?.();
  }, [onPlay]);

  const pause = useCallback(() => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
  }, []);

  const togglePlay = useCallback(() => {
    const next = !isPlaying;
    setIsPlaying(next);
    localStorage.setItem(STORAGE_KEY, next);
    if (next) {
      play();
    } else {
      pause();
    }
  }, [isPlaying, play, pause]);

  useEffect(() => {
    if (!isHkWeekend()) return;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null && saved === "true") {
      setIsPlaying(true);
      play();
      return;
    }
    const timer = setTimeout(() => {
      setIsPlaying(true);
      localStorage.setItem(STORAGE_KEY, true);
      play();
    }, AUTO_PLAY_DELAY);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StyledAudio ref={audioRef} loop preload="auto" src={`${process.env.PUBLIC_URL}/background-music.mp3`} />
      <SoundWrapper onClick={togglePlay} $isPlaying={isPlaying}>
        {isPlaying ? <GiSoundOff size={30} /> : <GiSoundOn size={30} />}
      </SoundWrapper>
    </>
  );
}

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
`;

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
  animation: ${({ $isPlaying }) => ($isPlaying ? css`none` : css`${pulse} 1.5s ease-in-out infinite`)};
  cursor: pointer;
`;
