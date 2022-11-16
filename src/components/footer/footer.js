import { Link } from 'react-router-dom';
import FooterItem from './children/footerItem'
import './footer.css';
import House from './../../images/home.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-block'>
        <div className='flex'>
          <div className='footer-part about'>
            <h3>О нас</h3>
            <p>
              30 лет мы заправляем топливом автоперевозчиков. Мы запустили новый
              личный кабинет, приготовили много новых коммерческих и технологических
              решений для того, чтобы дать Вам возможность управлять затратами на топливо.
              <br/><br/>
              Мы всегда открыты для общения, для поиска компромиссов. Доверьте заправку
              профессионалам. Для нас это не только бизнес, для нас это - жизнь.
            </p>
          </div>
          <div className='footer-part footer-list'>
            <h3>Топливные карты</h3>
              <FooterItem item={[['','О компании'],
                                 [`/map-stations/map-station`,'Сеть АЗС'],
                                 ['','Цены на топливо'],
                                 ['','Топливные карты']]}/>
          </div>
          <div className='footer-part footer-info'>
            <h3>Адрес компании</h3>
            <p><img className='house-icon' src={House}/> 108851, РФ, г. Москва, г. Щербинка,
               <br/> ул. Спортивная, дом 7</p>
            <p>&#9742; +7 (495) 785-24-44</p>
            <p>&#9993; info@inforkom.ru</p>
          </div>
        </div>
      </div>
      <div className='footer-floor'>
        <p>© 2022 Официальный сайт компании «Инфорком».</p>
      </div>
    </div>
  );
};

export default Footer;
