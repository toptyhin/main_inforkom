import { useNavigate } from "react-router-dom";
import LGasprom  from './../../../images/logo-gasprom.png'
import LRosneft  from './../../../images/logo-rosneft.png'
import LNm       from './../../../images/logo-nm.png'
import LBashneft from './../../../images/logo-bashneft.png'
import LTatneft  from './../../../images/logo-tatneft.png'
import './green.css'

const Green = () => {
  const navigate = useNavigate();
  return (
    <div className='main'>
      <section id='green' onClick={() => navigate('/map-stations/map-station')}>
        <div className=' flex flex-space-b green-zone green-grad w-100 radius-20'>
          <div className='green-img'>
            <div className='gp'>
              <img className='w-100' alt='газпром' src={LGasprom}/>
            </div>
            <div className='nm'>
              <img className='w-100' alt='нефть-магистраль' src={LNm}/>
            </div>
            <div className='rn'>
              <img className='w-100' alt='роснефть' src={LRosneft}/>
            </div>
          </div>
          <h2>10 000 АЗС со скидкой от 2% до 9%</h2>
          <div className='green-img'>
            <div className='bn'>
              <img className='w-100' alt='башнефть' src={LBashneft}/>
            </div>
            <div className='tn'>
              <img className='w-100' alt='татнефть' src={LTatneft}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Green;
