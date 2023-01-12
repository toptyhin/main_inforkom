
import Slider from 'react-slick';
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
import Slide from './children/slide'
import './banner.css'

function Banner({banner}) {
  const navigate = useNavigate();

  const settings = {
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
        <Slide background={BgCity} light={BgCityAdd} header={banner[0]}>
          <img className='city-back-light opacity' alt='' src={BgCityAdd} />
          <div className='city-img1'>
            <img className='gt-r' alt='' src={TankerRight}/>
            <img className='card-img' alt='' src={Card}/>
          </div>
          <div className='flex city-bold-text'>
            <div className='bold-text'>31 год</div>
            <p className='city-p'>мы заправляем<br/>на дорогах</p>
          </div>
        </Slide>

        <Slide background={BgCity} light={BgCityAdd} header={banner[1]}>
          <div className='city-img0'>
            <img className='gt-l-f' alt='' src={TankerFaded} />
            <img className='gt-l' alt='' src={TankerLeft} />
            <img className='m' alt='' src={Man} />
          </div>
        </Slide>

        <Slide background={BgCity} light={BgCityAdd} header={banner[2]}>
          <img className='city-back-light opacity' alt='' src={BgCityAdd} />
          <div className='city-img1'>
            <img className='pc-m' alt='' src={Pcmap}/>
          </div>
        </Slide>

        <Slide background={BgCity} light={BgCityAdd} header={banner[3]}>
          <img className='city-back-light opacity' alt='' src={BgCityAdd} />
          <div className='city-img1'>
            <img className='cars-img' alt='' src={Cars}/>
          </div>
        </Slide>
      </Slider>
    </div>
  );
}

export default Banner;
