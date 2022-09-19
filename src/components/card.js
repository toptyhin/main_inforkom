import { Link } from "react-router-dom"
import Button   from './../components/button'
import AppStore from './../images/icon-app-store.png'
import Qr from './../images/qr.png'
import GooglePlay from './../images/icon-google-play.png'
import CardBig    from './../images/card-big.png'
import "./../css/card.css"

const Card = () => {
  return (
    <div className="main">
      <section id="card">
        <div className="flex flex-space-b mt-3">
          <div className="flex-col mt-1">
            <div>
              <h2>Твоя карта<br/>в мобильном приложении</h2>
            </div>
            <div className="ml-1 mt-6 flex">
              <div className="flex-col">
                <div>
                  <button type="button" name="app-store" className="download orange-load">
                    <div className="flex flex-center">
                      <img className="load-icon" src={AppStore}/>
                      <div className="ml-1">
                        <p className="load-p">Download on</p>
                        <p>App Store</p>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="flex flex-center">
                  <img className="qr" src={Qr}/>
                </div>
              </div>
              <div className="flex-col pl-1">
                <div>
                  <button type="button" name="google-play" className="download purple-load">
                    <div className="flex flex-center">
                      <img className="load-icon" src={GooglePlay}/>
                      <div className="ml-1">
                        <p className="load-p">Download on</p>
                        <p>Google Play</p>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="flex flex-center">
                  <img className="qr" src={Qr}/>
                </div>
              </div>
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
