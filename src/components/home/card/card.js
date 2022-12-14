import Download   from './children/download'
import Button     from './../../../components/UI/button'
import AppStore   from './../../../images/icon-app-store.png'
import Qr         from './../../../images/qr.png'
import GooglePlay from './../../../images/icon-google-play.png'
import CardBig    from './../../../images/card-big.png'
import './card.css'

const Card = () => {
  return (
    <div className='main'>
      <section id='card'>
        <div className='flex wrap flex-space-b mt-3 load'>
          <div className='flex-col mt-1'>
            <div className='head-card'>
              <h2 className='inline-block'>Твоя карта в мобильном приложении</h2>
            </div>
            <div className='mt-1 flex wrap flex-center'>
              <Download name='app-store' href='https://apps.apple.com/ru/app/inforkom/id1015298636' 
                color='orange' src={AppStore} children='App Store' qr={Qr}/>
              <Download name='google-play' href='https://play.google.com/store/apps/details?id=ru.inforkom.InforkomApp' 
                color='purple' src={GooglePlay} children='Google Play' qr={Qr}/>
            </div>
          </div>
          <div className='card'>
            <div>
              <img className='w-100' src={CardBig} alt='топливная карта'/>
            </div>
            <div className='flex flex-center card-button'>
              <Button type='button' width='326px' children='Заказать' href='/fuel-cards/fuel-card'/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
