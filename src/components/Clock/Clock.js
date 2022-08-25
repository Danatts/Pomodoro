import { useEffect, useState } from "react";
import { numToTime } from './Clock.services';
import bell from '../../assets/audio/class-bell.mp3';

function Clock() {
  let [time, setTime] = useState(3);

  const refreshTimer = () => {
    setTime(time -= 1);
  }

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(refreshTimer, 1000);
      return () => clearInterval(timerId);
    };
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      const sound = new Audio(bell);
      sound.play();
      alert('Descansa');
    };
  }, [time]);

  return (
    <div>
      <p>{ numToTime(time) }</p>
    </div>
  );
}

export default Clock;
