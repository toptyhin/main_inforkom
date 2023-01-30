import { useNavigate } from "react-router-dom";
import LGasprom  from './../../../images/logo-gasprom.png'
import LRosneft  from './../../../images/logo-rosneft.png'
import LNm       from './../../../images/logo-nm.png'
import LBashneft from './../../../images/logo-bashneft.png'
import LTatneft  from './../../../images/logo-tatneft.png'
import './green.css'

const Green = ({header, url, img}) => {
  const navigate = useNavigate();
  return (
    <div className='main'>
      <section id='green' onClick={() => navigate({url})}>
        <div className=' flex flex-space-b green-zone green-grad w-100 radius-20'>
          <div className='green-img'>
            <div className='gp'>
              <img className='w-100' alt='газпром' src={img[0]}/>
            </div>
            <div className='nm'>
              <img className='w-100' alt='нефть-магистраль' src={img[1]}/>
            </div>
            <div className='rn'>
              <img className='w-100' alt='роснефть' src={img[2]}/>
            </div>
          </div>
          <h2>{header}</h2>
          <div className='green-img'>
            <div className='bn'>
              <img className='w-100' alt='башнефть' src={img[3]}/>
            </div>
            <div className='tn'>
              <img className='w-100' alt='татнефть' src={img[4]}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Green;
