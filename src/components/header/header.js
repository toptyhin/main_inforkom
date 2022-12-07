import { Link }          from 'react-router-dom';
import { useState }      from 'react';
import ClickAwayListener from 'react-click-away-listener';
import logo     from './../../images/head.png';
import MenuItem from './children/menuItem'
import MobMenu  from './children/mobMenu'
import './header.css';

const item_company = [[`/about/news`,'Новости компании'],
       [`/about/history`,'История'],
       [`/about/social`,'Социальная ответственность'],
       [`/about/projects`,'Наши проекты'],
       [`/test`,'тест']];

const item_tarif = [[`tarify/tatneft`,'Тариф Татнефть'],
       [`tarify/gazprom`,'Тариф Газпром'],
       [`tarify/max`,'Тариф Максимальный'],
       [`tarify/universalny`,'Тариф Универсальный'],
       [`tarify/svoi-region`,'Тариф Все регионы'],
       [`tarify/agregator`,'Тариф Агрегатор']];

const item_cards = [[`fuel-cards/fuel-card`,'Топливная карта'],
       [`fuel-cards/oil-talons`,'Топливные талоны'],
       [`fuel-cards/dkv-fuel-cards`,'Топливная карта DKV'],
       [`fuel-cards/card-euroshell`,'Карта Euroshell'],
       [`fuel-cards/com-proposal`,'Коммерческое предложение'],
       [`fuel-cards/operation-online`,'Онлайн-управление картой'],
       [`fuel-cards/44-fz-goszakazy`,'Поставки топлива по 44-ФЗ']];

const item_azs = [[`/map-stations/map-station`,'Сеть АЗС Инфорком'],
       [`/map-stations/mobile`,'Мобильное приложение'],
       [`/map-stations/adblue`,'АЗС с Adblue'],
       [`/map-stations/azs-changes`,'Изменения АЗС'],
       [`/map-stations/proposal-for-petrol`,'Предложения для АЗС']];

const item_fuel = [[`/fuel-prices-interactive-map/fuel-prices`,'Цены на топливо'],
       [`/fuel-prices-interactive-map/special-offer`,'Топливо оптом'],
       [`/fuel-prices-interactive-map/mobile-azs`,'Мобильная АЗС'],
       [`/fuel-prices-interactive-map/motor-oil`,'Моторные масла']];

const item_contacts = [[`/contacts/contacts`,'Контактная информация'],
                      [`/contacts/jobs`,'Вакансии']];

const Header = ({test}) => {
  
  const [popup, setPopup] = useState(false);
  return (
    <div className='menu-parent'>
      <div className='menu'>
        <nav>
          <ul className='menu-flex'>
            <li>
              <Link to={`/`}>
                <img className='inforkom-logo' alt='ИНФОРКОМ' src={logo}/>
              </Link>
            </li>
            <MenuItem mainName='О компании' item={item_company}/>
            <MenuItem mainName='Тарифы' item={test}/>
            <MenuItem mainName='Топливные карты' item={item_cards}/>
            <MenuItem mainName='Сеть АЗС' item={item_azs}/>
            <MenuItem mainName='Топливо' item={item_fuel}/>
            <MenuItem mainName='Контакты' item={item_contacts}/>
          </ul>
        </nav>
        <ClickAwayListener onClickAway={() => {setPopup(false)}}>
          <div className='mob-menu-button' >
            <p onClick={() => setPopup(true)}>☰</p>
            <nav className={popup ? '':'hidden'}>
              <ul className='menu-list flex'>
                <div className='cross' onClick={() => setPopup(false)}>×</div>
                
                <MobMenu mainName='О компании'      item={item_company}  setPopup={setPopup}/>
                <MobMenu mainName='Тарифы'          item={item_tarif}    setPopup={setPopup}/>
                <MobMenu mainName='Топливные карты' item={item_cards}    setPopup={setPopup}/>
                <MobMenu mainName='Сеть АЗС'        item={item_azs}      setPopup={setPopup}/>
                <MobMenu mainName='Контакты'        item={item_contacts} setPopup={setPopup}/>
              </ul>
            </nav>
          </div>
        </ClickAwayListener>
      <div className={popup ? 'overlay':'hidden'}></div>
    </div>
  </div>
  );
};

export default Header;
