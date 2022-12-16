import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = `0${minutes}`;
  if (seconds <= 9) seconds = `0${seconds}`;
  return `00:${minutes}:${seconds}`;
};

const TimerButton = ({ id }) => {
  const [countdown, setCountdown] = useState(Math.floor(Math.random() * 210));
  const timerId = useRef();

  const navigate = useNavigate();

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
      <h4>{formatTime(countdown)}</h4>
      {countdown === 0 ? (
        <button className="deatil__btn--disabled" type="submit" disabled>
          Go to detail
        </button>
      ) : (
        <button
          onClick={() => navigate(`/product/${id}`)}
          className="detail__btn"
          type="submit"
        >
          Go to detail
        </button>
      )}
    </div>
  );
};

TimerButton.propTypes = {
  id: propTypes.number.isRequired,
};

export default TimerButton;
