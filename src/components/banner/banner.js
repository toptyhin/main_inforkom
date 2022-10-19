import Slider from "react-slick";
import BgCity      from './../../images/background-city.png'
import BgCityAdd   from './../../images/background-add.png'
import TankerFaded from './../../images/gastanker-left-faded.png'
import TankerLeft  from './../../images/gastanker-left.png'
import TankerRight from './../../images/gastanker-right.png'
import Man   from './../../images/man.png'
import Pcmap from './../../images/pc-map.png'
import Cars  from './../../images/cars.png'
import Card  from './../../images/card.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./banner.css"

fetch('http://localhost:1337/api/banners', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then(response => response.json())
  .then(data => console.log(data));


function Banner() {
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    //pauseOnFocus: false,
    draggable: false,
    //pauseOnHover: false,
    appendDots: dots => (
      <div>
        <ul className="dots"> {dots} </ul>
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      <section className="city">
        <img className="city-back" alt="" src={BgCity} />
        <img className="city-back-light" alt="" src={BgCityAdd} />
        <div className="city-img0">
          <img className="gt-l-f" alt="" src={TankerFaded} />
          <img className="gt-l" alt="" src={TankerLeft} />
          <img className="m" alt="" src={Man} />
        </div>
        <h5>Топливо по оптовой цене <br/>собственными<br/>бензовозами</h5>
      </section>

      <section className="city">
        <img className="city-back" alt="" src={BgCity} />
        <img className="city-back-light" alt="" src={BgCityAdd} />
        <img className="city-back-light opacity" alt="" src={BgCityAdd} />
        <div class="city-img1">
          <img class="pc-m" src={Pcmap}/>
        </div>
        <h5>Собственный процессинг<br/>топливных карт</h5>
      </section>

      <section className="city">
        <img className="city-back" alt="" src={BgCity} />
        <img className="city-back-light" alt="" src={BgCityAdd} />
        <img className="city-back-light opacity" alt="" src={BgCityAdd} />
        <div class="city-img2">
          <img class="cars-img" src={Cars}/>
        </div>
        <h5>Крупнейший независимый<br/>поставщик топлива<br/>по гос. контрактам</h5>
      </section>

      <section className="city">
        <img className="city-back" alt="" src={BgCity} />
        <img className="city-back-light" alt="" src={BgCityAdd} />
        <img className="city-back-light opacity" alt="" src={BgCityAdd} />
        <div class="city-img3">
          <img class="gt-r" src={TankerRight}/>
          <img class="card-img" src={Card}/>
        </div>
        <h5>Профессиональный<br/>подход к заправке<br/>по топливным картам</h5>
        <div class="flex city-bold-text">
          <div class="bold-text">31 год</div>
          <p class="city-p">мы заправляем<br/>на дорогах</p>
        </div>
      </section>
    </Slider>
  );
}

export default Banner;
