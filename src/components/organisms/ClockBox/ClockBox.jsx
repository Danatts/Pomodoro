import Clock from "components/atoms/Clock/Clock";
import './ClockBox.scss';

function ClockBox({time}) {
  return (
    <div className="clockbox">
      <Clock sec={time} />
    </div>
  );
}

export default ClockBox;
