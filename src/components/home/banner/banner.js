import Slider     from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useNavigate } from "react-router-dom";
import BgCity      from './../../../images/background-city.png'
import BgCityAdd   from './../../../images/background-add.png'
import TankerFaded from './../../../images/gastanker-left-faded.png'
import TankerLeft  from './../../../images/gastanker-left.png'
import TankerRight from './../../../images/gastanker-right.png'
import Man   from './../../../images/man.png'
import Pcmap from './../../../images/pc-map.png'
import Cars  from './../../../images/cars.png'
import Card  from './../../../images/card.png'
import './banner.css'

function Banner() {
  const b1 = 'Топливо по оптовой цене собственными бензовозами'
  const b2 = 'Собственный процессинг топливных карт'
  const b3 = 'Крупнейший независимый поставщик топлива по гос. контрактам'
  const b4 = 'Профессиональный подход к заправке по топливным картам'
  const navigate = useNavigate();

  let settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnFocus: true,
    draggable: false,
    pauseOnHover: true,
    appendDots: dots => (
      <div>
        <ul className='dots'> {dots} </ul>
      </div>
    ),
  };

  return (
    <div>
      <Slider {...settings}>
      
      <section className='city' onClick={() => navigate('/about/history')}>
          <img className='city-back' alt='' src={BgCity} />
          <img className='city-back-light' alt='' src={BgCityAdd} />
          <img className='city-back-light opacity' alt='' src={BgCityAdd} />
          <div class='city-img1'>
            <img class='gt-r' alt='' src={TankerRight}/>
            <img class='card-img' alt='' src={Card}/>
          </div>
          <div class='flex city-bold-text'>
            <div class='bold-text'>31 год</div>
            <p class='city-p'>мы заправляем<br/>на дорогах</p>
          </div>
          <h5>{b4}</h5>
        </section>

        <section className='city' onClick={() => navigate('/fuel-prices-interactive-map/special-offer')}>
          <img className='city-back' alt='' src={BgCity} />
          <img className='city-back-light' alt='' src={BgCityAdd} />
          <div className='city-img0'>
            <img className='gt-l-f' alt='' src={TankerFaded} />
            <img className='gt-l' alt='' src={TankerLeft} />
            <img className='m' alt='' src={Man} />
          </div>
          <h5>{b1}</h5>
        </section>

        <section className='city' onClick={() => window.open('http://it.inforkom.ru/')}>
          <img className='city-back' alt='' src={BgCity} />
          <img className='city-back-light' alt='' src={BgCityAdd} />
          <img className='city-back-light opacity' alt='' src={BgCityAdd} />
          <div class='city-img1'>
            <img class='pc-m' alt='' src={Pcmap}/>
          </div>
          <h5>{b2}</h5>
        </section>

        <section className='city' onClick={() => navigate('/fuel-cards/44-fz-goszakazy')}>
          <img className='city-back' alt='' src={BgCity} />
          <img className='city-back-light' alt='' src={BgCityAdd} />
          <img className='city-back-light opacity' alt='' src={BgCityAdd} />
          <div class='city-img1'>
            <img class='cars-img' alt='' src={Cars}/>
          </div>
          <h5>{b3}</h5>
        </section>

      </Slider>
    </div>
  );
}

export default Banner;
