import { useEffect, useState } from "react";
import { numToTime } from 'components/atoms/Clock/Clock.services';
import './Clock.scss';

function Clock() {
  const [time, setTime] = useState(9);
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
    <div>
      <span className="clock">{ numToTime(time) }</span>
      <button onClick={() => setPause(!pause)}>Pause</button>
    </div>
  );
}

export default Clock;
