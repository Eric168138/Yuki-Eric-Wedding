import { atom, useRecoilState } from "recoil";
import myAudio from "./assets/myAudio.mp3";
import { useEffect, useRef } from "react";

//背景音樂 播放、暫停
const playState =
  atom <
  boolean >
  {
    key: "playState",
    default: false,
  };

function AudioPlayer() {
  const myRef = useRef(null);
  const [play, setPlay] = useRecoilState(playState);
  // 播放
  const start = () => {
    if (myRef.current) {
      myRef.current.play();
    }
    setPlay(true);
  };
  // 暂停
  const stop = () => {
    if (myRef.current) {
      myRef.current.pause();
    }
    setPlay(false);
  };

  useEffect(() => {
    if (!myRef.current) return;
    if (play) {
      myRef.current.play();
    } else myRef.current.pause();
  }, [play]);

  return (
    <>
      <h1>AudioPlayer</h1>
      <audio ref={myRef} src={myAudio} controls loop></audio>
      <br />
      <br />
      {play ? (
        // 暂停按钮
        <button onClick={stop}>暂停</button>
      ) : (
        // 播放按钮
        <button onClick={start}>播放</button>
      )}
    </>
  );
}

export default AudioPlayer;
