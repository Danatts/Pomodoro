import { useEffect, useState } from "react";
import { numToTime } from 'components/atoms/Clock/Clock.services';
import './Clock.scss';

function Clock({ sec }) {
  const [time, setTime] = useState(sec);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    let timerId;
    if (!pause) {
      timerId = setInterval(() => {
        if (time > 0) {
          setTime((currentTime) => currentTime - 1);
        } else if (time <= 0) {
          clearInterval(timerId);
        };
      }, 1000);
    } else if (pause) {
      clearInterval(timerId)
    }
    return () => clearInterval(timerId);
  }, [time, pause]);

  return (
    <div className="clock">
      <span className="clock__display">{ numToTime(time) }</span>
      <button onClick={() => setPause(!pause)}>Pause</button>
    </div>
  );
}

export default Clock;
