import Button from 'components/Button/Button';
import 'components/Alert/Alert.scss';

function Alert({ toggle }) {
  return (
    <div className='alert'>
      <div className='alert__box'>
        <h1 className="alert__title">¡Tiempo!</h1>
        <Button action={toggle} text='Cerrar'/>
      </div>
    </div>
  )
}

export default Alert;
