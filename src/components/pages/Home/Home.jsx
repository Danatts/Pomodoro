import Clock from '../../Clock/Clock';
import './Home.scss';

function Home() {
  return(
    <div className='home'>
      <h1 className='home__title'>Pomodoro</h1>
      <Clock />
    </div>
  );
}

export default Home;
