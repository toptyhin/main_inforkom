import { useEffect, useState } from 'react';
import { gql } from '@apollo/client'
import {useQuery} from "@apollo/client";

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
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./banner.css"

function Banner() {
  const GET_BANNERS = gql`
    query { main { data { attributes { banner {
      banner_1
      banner_2
      banner_3
      banner_4
    } } } }
    }`


  const {data, error, loading} = useQuery(GET_BANNERS)

  const b1 = data?.main.data.attributes.banner.banner_1
  const b2 = data?.main.data.attributes.banner.banner_2
  const b3 = data?.main.data.attributes.banner.banner_3
  const b4 = data?.main.data.attributes.banner.banner_4

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

if(error) return `Oops there has been an error: ${error}`
  return (
   <div>
    <Slider {...settings}>
      <section className="city">
        <img className="city-back" alt="" src={BgCity} />
        <img className="city-back-light" alt="" src={BgCityAdd} />
        <div className="city-img0">
          <img className="gt-l-f" alt="" src={TankerFaded} />
          <img className="gt-l" alt="" src={TankerLeft} />
          <img className="m" alt="" src={Man} />
        </div>
        <h5>{b1}</h5>
      </section>

      <section className="city">
        <img className="city-back" alt="" src={BgCity} />
        <img className="city-back-light" alt="" src={BgCityAdd} />
        <img className="city-back-light opacity" alt="" src={BgCityAdd} />
        <div class="city-img1">
          <img class="pc-m" src={Pcmap}/>
        </div>
        <h5>{b2}</h5>
      </section>

      <section className="city">
        <img className="city-back" alt="" src={BgCity} />
        <img className="city-back-light" alt="" src={BgCityAdd} />
        <img className="city-back-light opacity" alt="" src={BgCityAdd} />
        <div class="city-img2">
          <img class="cars-img" src={Cars}/>
        </div>
        <h5>{b3}</h5>
      </section>

      <section className="city">
        <img className="city-back" alt="" src={BgCity} />
        <img className="city-back-light" alt="" src={BgCityAdd} />
        <img className="city-back-light opacity" alt="" src={BgCityAdd} />
        <div class="city-img3">
          <img class="gt-r" src={TankerRight}/>
          <img class="card-img" src={Card}/>
        </div>
        <div class="flex city-bold-text">
          <div class="bold-text">31 год</div>
          <p class="city-p">мы заправляем<br/>на дорогах</p>
        </div>
        <h5>{b4}</h5>
      </section>
    </Slider>
    </div>
  );
}

export default Banner;
