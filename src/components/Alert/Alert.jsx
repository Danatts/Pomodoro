import './Alert.scss';
import Button from '../Button/Button';

function Alert({ toggle }) {
  return (
    <div className='alert'>
      <div className='alert__container'>
        <h1 className="alert__title">¡Tiempo!</h1>
        <Button action={toggle} text='Cerrar'/>
      </div>
    </div>
  )
}

export default Alert;
