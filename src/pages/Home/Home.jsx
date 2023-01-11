import Header from 'components/organisms/Header/Header';
import PhaseSelector from 'components/molecules/PhaseSelector/PhaseSelector';
import ClockBox from 'components/organisms/ClockBox/ClockBox';
import Footer from 'components/organisms/Footer/Footer';
import { useState } from 'react';
import './Home.scss';

function Home() {

  const [time, setTime] = useState(25);

  return(
    <>
      <Header />
      <div className='home'>
        <ClockBox time={time} />
        <PhaseSelector setTimer={setTime} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
