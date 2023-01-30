import Download   from './children/download'
import Button     from './../../../components/UI/button'
import AppStore   from './../../../images/icon-app-store.png'
import Qr         from './../../../images/qr.png'
import GooglePlay from './../../../images/icon-google-play.png'
import CardBig    from './../../../images/card-big.png'
import './card.css'

const Card = ({card, img, button}) => {
  return (
    <div className='main'>
      <section id='card'>
        <div className='flex wrap flex-space-b mt-3 load'>
          <div className='flex-col mt-1'>
            <div className='head-card'>
              <h2 className='inline-block'>{card.header}</h2>
            </div>
            <div className='mt-1 flex wrap flex-center'>
              <Download name='app-store' href={card.url_appsore} 
                color='orange' src={AppStore} children='App Store' qr={Qr}/>
              <Download name='google-play' href={card.url_google} 
                color='purple' src={GooglePlay} children='Google Play' qr={Qr}/>
            </div>
          </div>
          <div className='card'>
            <div>
              <img className='w-100' src={img} alt='топливная карта'/>
            </div>
            <div className='flex flex-center card-button'>
              <Button type={button.type} width={button.width} children={button.name} href={button.href} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
