import Button from 'components/atoms/Button/Button';
import 'components/organisms/Alert/Alert.scss';

function Alert({ toggle }) {
  return (
    <div className='alert'>
      <div className='alert__box'>
        <h1 className="alert__title">Time!</h1>
        <Button action={toggle} text='Close'/>
      </div>
    </div>
  )
}

export default Alert;
