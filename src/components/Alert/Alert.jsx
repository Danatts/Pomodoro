import './Alert.scss';

function Alert({ toggle }) {
  return (
    <div className='alert'>
      <div className='alert__container'>
        <h1 className="alert__title">¡Tiempo!</h1>
        <button type='button' onClick={toggle}>Cerrar</button>
      </div>
    </div>
  )
}

export default Alert;
