import { Link } from "react-router-dom"
import LittleBox   from './children/littleBox'
import Regions     from "./../../images/box-regions.png"
import Gasprom     from "./../../images/box-gasprom.png"
import Tatneft     from "./../../images/box-tatneft.png"
import IntNational from "./../../images/box-international.png"
import Max         from "./../../images/box-max.png"
import Universal   from "./../../images/box-universal.png"
import Agregator   from "./../../images/box-agregator.png"
import Moscow      from "./../../images/box-moscow.png"
import Pointer     from "./../../images/pointer.png"
import "./boxes.css"

const Boxes = () => {
  return (
    <div  className="main">
      <section id="boxes">
        <div className="left-boxes">
          <div className="first-raw">
            <LittleBox img={Regions} alt="Все регионы"/>
            <LittleBox img={Gasprom} alt="Газпром"/>
            <LittleBox img={Tatneft} alt="Татнефть"/>
          </div>
          <div className="second-raw">
            <LittleBox img={Moscow} alt="Москва+"/>
            <div className="box-note">
              <h2 className="point">Тарифные<br/>планы
                <img className="pointer" src={Pointer}/>
              </h2>
            </div>
          </div>
          <div class="first-raw">
            <LittleBox img={IntNational} alt="Международный"/>
            <LittleBox img={Max}         alt="Максимальный"/>
            <LittleBox img={Universal}   alt="Универсальный"/>
          </div>
        </div>
        <div class="right-boxes">
          <div class="big-box">
            <img class="agr" alt="Агрегатор скидок" src={Agregator}/>
            <p>Подберем<br/>тариф<br/>на Ваших<br/>условиях!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boxes;
