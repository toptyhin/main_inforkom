import { Link } from "react-router-dom";
import Regions  from "./../images/box-regions.png"
import Gasprom  from "./../images/box-gasprom.png"
import Tatneft  from "./../images/box-tatneft.png"
import IntNational from "./../images/box-international.png"
import Max       from "./../images/box-max.png"
import Universal from "./../images/box-universal.png"
import Agregator from "./../images/box-agregator.png"
import Moscow    from "./../images/box-moscow.png"
import Pointer   from "./../images/pointer.png"
import "./../css/boxes.css"

const Boxes = () => {
  return (
    <div  className="main">
      <section id="boxes">
        <div className="left-boxes">
          <div className="first-raw">
            <div className="box">
              <img className="little-box" alt="Все регионы" src={Regions}/>
            </div>
            <div className="box">
              <img className="little-box" alt="Газпром" src={Gasprom}/>
            </div>
            <div className="box">
              <img className="little-box" alt="Татнефть" src={Tatneft}/>
            </div>
          </div>
          <div className="second-raw">
            <div className="box">
              <img className="little-box" alt="Москва+" src={Moscow}/>
            </div>
            <div className="box-note">
              <h2 className="point">Тарифные<br/>планы
                <img className="pointer" src={Pointer}/>
              </h2>
            </div>
          </div>
          <div class="first-raw">
            <div class="box">
              <img class="little-box" alt="Международный" src={IntNational}/>
            </div>
            <div class="box">
              <img class="little-box" alt="Максимальный" src={Max}/>
            </div>
            <div class="box">
              <img class="little-box" alt="Универсальный" src={Universal}/>
            </div>
          </div>
        </div>
        <div class="right-boxes">
          <div class="box big-box">
            <img class="little-box agr" alt="Агрегатор скидок" src={Agregator}/>
            <p>Подберем<br/>тариф<br/>на Ваших<br/>условиях!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boxes;
