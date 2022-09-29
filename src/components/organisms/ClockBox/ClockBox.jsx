import Clock from "components/atoms/Clock/Clock";
import './ClockBox.scss';

function ClockBox() {
  return (
    <div className="clockbox">
      <Clock sec={15} />
    </div>
  );
}

export default ClockBox;
