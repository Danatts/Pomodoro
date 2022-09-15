import { useEffect, useState } from "react";
import { numToTime } from './Clock.services';
import Alert from '../Alert/Alert';
import useModal from '../../hooks/useModal';
import bell from '../../assets/audio/class-bell.mp3';

function Clock() {
  let [time, setTime] = useState(3);
  const { toggle, show } = useModal();

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((currentTime) => currentTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    };
  }, [time]);

  useEffect(() => {
    if (time === 0) {
      // const sound = new Audio(bell);
      // sound.play();
      toggle()
    };
  }, [time]);

  return (
    <div>
      <p>{ numToTime(time) }</p>
      { show ? <Alert toggle={toggle} /> : null}
    </div>
  );
}

export default Clock;
