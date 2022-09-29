import PhaseSelector from 'components/molecules/PhaseSelector/PhaseSelector';
import ClockBox from 'components/organisms/ClockBox/ClockBox';
import Footer from 'components/organisms/Footer/Footer';
import './Home.scss';

function Home() {
  return(
    <>
      <div className='home'>
        <ClockBox/>
        <PhaseSelector />
      </div>
      <Footer />
    </>
  );
}

export default Home;
