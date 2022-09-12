import { Link } from "react-router-dom";
import BgCity from './../images/background-city.png'
import BgCityAdd from './../images/background-add.png'
import TankerFaded from './../images/gastanker-left-faded.png'
import TankerLeft from './../images/gastanker-left.png'
import Man from './../images/man.png'
import "./../banner.css"



const Banner = () => {
  return (
    <section id="citi">
       <img className="city-back" src={BgCity} />
       <img className="city-back-light" src={BgCityAdd} />
       <div className="city-img">
        <img className="gt-l-f" src={TankerFaded} />
        <img className="gt-l" src={TankerLeft} />
        <img className="m" src={Man} />
       </div>
       <h5>Топливо по оптовой цене <br/>собственными<br/>бензовозами</h5>
    </section>
  );
};

export default Banner;
