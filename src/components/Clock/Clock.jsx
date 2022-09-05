import { useEffect, useState } from "react";
import { numToTime } from './Clock.services';
import bell from '../../assets/audio/class-bell.mp3';

function Clock() {
  let [time, setTime] = useState(3);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime(time -= 1);
      }, 1000);
      return () => clearInterval(timerId);
    };
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      const sound = new Audio(bell);
      // sound.play();
      alert('Descansa');
    };
  }, [time]);

  return (
    <div>
      <p>{ numToTime(time) }</p>
      <button>Hola</button>
    </div>
  );
}

export default Clock;
