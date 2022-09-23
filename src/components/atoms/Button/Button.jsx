import 'components/Button/Button.scss';

function Button({ action, text }) {
  return(
    <button className="button" onClick={action}>{text}</button>
  );
}

export default Button;
