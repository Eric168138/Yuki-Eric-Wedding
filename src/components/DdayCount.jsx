import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeartIcon from "../components/Icons/heart";

const TheTimes = ({ targetDate }) => {
  const calculateLastTimes = () => {
    const difference = +new Date() - +new Date(targetDate);
    let lastTimes = {};

    if (difference > 0) {
      lastTimes = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return lastTimes;
  };
  const [times, setTimes] = useState(calculateLastTimes());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimes(calculateLastTimes());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = times;

  if (typeof window === "undefined") return <></>;

  return (
    <TextWrapper>
      <Text>婚禮日後</Text>
      <Text>
       <HeartIcon />  {days}天 {hours}時 {minutes}分 {seconds}秒 <HeartIcon />
      </Text>
    </TextWrapper>
  );
};

const DdayCount = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  if (typeof window === "undefined") return <></>;

  return (
     <TextWrapper>
    <Text>由現在到婚禮日</Text>
    <Text>
     剩餘 {days > 0 && <>{days}天 </>}
       {hours}時 {minutes}分 {seconds}秒 
    </Text>
    </TextWrapper>
  );
};

const Text = styled.p`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  margin-top: 20px;
`;

export { DdayCount, TheTimes };
