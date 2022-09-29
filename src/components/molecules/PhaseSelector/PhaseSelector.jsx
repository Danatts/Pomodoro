import './PhaseSelector.scss';

function PhaseSelector() {

  const handleOnChange = (e) => {
    console.log(e.target.value);
  }

  return(
    <form className="phaseselector" onChange={handleOnChange}>
      <input className="phaseselector__button" type="radio" id="work" name="phase" value="work" />
      <label className="phaseselector__label" htmlFor="work">Work</label>
      <input className="phaseselector__button" type="radio" id="short" name="phase" value="short" />
      <label className="phaseselector__label" htmlFor="short">Short Rest</label>
      <input className="phaseselector__button" type="radio" id="long" name="phase" value="long" />
      <label className="phaseselector__label" htmlFor="long">Long Rest</label>
    </form>
  );
}

export default PhaseSelector;
