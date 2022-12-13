import { useState, useEffect, useRef } from 'react';

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = `0${minutes}`;
  if (seconds <= 9) seconds = `0${seconds}`;
  return `00:${minutes}:${seconds}`;
};

const Timer = () => {
  const [countdown, setCountdown] = useState(Math.floor(Math.random() * 210));
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      clearInterval(timerId.current);
    }
  }, [countdown]);
  return (
    <div>
      <h1>{formatTime(countdown)}</h1>
    </div>
  );
};

export default Timer;
