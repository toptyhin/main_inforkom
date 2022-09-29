import { Link } from "react-router-dom"
import Button     from './../../components/UI/button'
import Download   from './children/download'
import AppStore   from './../../images/icon-app-store.png'
import Qr         from './../../images/qr.png'
import GooglePlay from './../../images/icon-google-play.png'
import CardBig    from './../../images/card-big.png'
import "./card.css"

const Card = () => {
  return (
    <div className="main">
      <section id="card">
        <div className="flex flex-space-b mt-3">
          <div className="flex-col mt-1">
            <div>
              <h2>Твоя карта<br/>в мобильном приложении</h2>
            </div>
            <div className="mt-6 flex">
            <Download name="app-store" color="orange" src={AppStore} children="App Store" qr={Qr}/>
            <Download name="google-play" color="purple" src={GooglePlay} children="Google Play" qr={Qr}/>
            </div>
          </div>
          <div className="card">
            <div>
              <img className="w-100" src={CardBig} alt="топливная карта"/>
            </div>
            <div className="flex flex-center">
              <Button width="20vw" marginTop="-6vw" children="Заказать"/>
            </div>  
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
