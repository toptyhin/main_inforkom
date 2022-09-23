import { Link } from "react-router-dom";
import LGasprom from './../../images/logo-gasprom.png'
import LRosneft from './../../images/logo-rosneft.png'
import LNm      from './../../images/logo-nm.png'
import LTatneft from './../../images/logo-tatneft.png'
import "./green.css"

const Green = () => {
  return (
    <div className="main">
      <section id="green">
        <div className="green-zone green-grad w-100 radius-20">
          <h2>10 000 АЗС<br/>со скидкой<br/>от 2% до 9%</h2>
          <img alt="газпром" src={LGasprom}/>
          <img alt="роснефть" src={LRosneft}/>
          <img alt="нефть-магистраль" src={LNm}/>
          <img alt="татнефть" src={LTatneft}/>
        </div>
      </section>
    </div>
  );
};

export default Green;
