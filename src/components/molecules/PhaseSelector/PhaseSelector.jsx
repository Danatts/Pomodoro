import Button from 'components/atoms/Button/Button';
import './PhaseSelector.scss';

function PhaseSelector({ setTimer }) {

  return(
    <div className='phaseselector'>
      <Button text={"Work"} action={()=>setTimer(25)} />
      <Button text={"Short break"} action={()=>setTimer(5)} />
      <Button text={"Long break"} action={()=>setTimer(15)} />
    </div>
  );
}

export default PhaseSelector;
