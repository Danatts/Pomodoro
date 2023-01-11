import Alert from "components/organisms/Alert/Alert";
import useModal from "hooks/useModal";
import { useEffect, useState } from "react";
import { numToTime } from 'components/atoms/Clock/Clock.services';
import playIco from 'assets/images/play.png';
import pauseIco from 'assets/images/pause.png';
import stopIco from 'assets/images/stop.png';
import './Clock.scss';

function Clock({ sec }) {
  const [time, setTime] = useState(sec);
  const [pause, setPause] = useState(false);
  const {toggle, show} = useModal();

  const resetTime = () => {
    setTime(sec);
    setPause(true);
  }

  useEffect(() => {
    let timerId;
    if (!pause) {
      timerId = setInterval(() => {
        if (time > 0) {
          setTime((currentTime) => currentTime - 1);
        } else if (time <= 0) {
          toggle();
          resetTime();
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
      {show === false ? <Alert toggle={toggle} /> : null}
      <span className="clock__display">{ numToTime(time) }</span>
      <div className="clock__control">
        <span onClick={() => setPause(!pause)}>
          <img className="clock__icon" src={pause ? playIco : pauseIco} alt="play-icon" />
        </span>
        <span onClick={() => resetTime()}>
          <img className="clock__icon" src={stopIco} alt="stop-icon" />
        </span>
      </div>
    </div>
  );
}

export default Clock;
