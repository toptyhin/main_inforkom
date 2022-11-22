import { Link } from 'react-router-dom';
import logo     from './../../images/head.png';
import MenuItem from './children/menuItem'
import MobMenu from './children/mobMenu'
import './header.css';

const item_company=[[`/about/news`,'Новости компании'],
       [`/about/history`,'История'],
       [`/about/social`,'Социальная ответственность'],
       [`/about/projects`,'Наши проекты']];

const item_tarif=[[`tarify/tatneft`,'Тариф Татнефть'],
       [`tarify/gazprom`,'Тариф Газпром'],
       [`tarify/max`,'Тариф Максимальный'],
       [`tarify/universalny`,'Тариф Универсальный'],
       [`tarify/svoi-region`,'Тариф Все регионы'],
       [`tarify/agregator`,'Тариф Агрегатор']];

const item_cards=[[`fuel-cards/fuel-card`,'Топливная карта'],
       [`fuel-cards/oil-talons`,'Топливные талоны'],
       [`fuel-cards/dkv-fuel-cards`,'Топливная карта DKV'],
       [`fuel-cards/card-euroshell`,'Карта Euroshell'],
       [`fuel-cards/com-proposal`,'Коммерческое предложение'],
       [`fuel-cards/operation-online`,'Онлайн-управление картой'],
       [`fuel-cards/44-fz-goszakazy`,'Поставки топлива по 44-ФЗ']];

const item_azs=[[`/map-stations/map-station`,'Сеть АЗС Инфорком'],
       [`/map-stations/mobile`,'Мобильное приложение'],
       [`/map-stations/adblue`,'АЗС с Adblue'],
       [`/map-stations/azs-changes`,'Изменения АЗС'],
       [`/map-stations/proposal-for-petrol`,'Предложения для АЗС']];

const item_fuel=[[`/fuel-prices-interactive-map/fuel-prices`,'Цены на топливо'],
       [`/fuel-prices-interactive-map/special-offer`,'Топливо оптом'],
       [`/fuel-prices-interactive-map/mobile-azs`,'Мобильная АЗС'],
       [`/fuel-prices-interactive-map/motor-oil`,'Моторные масла']];

const item_contacts=[[`/contacts/contacts`,'Контактная информация'],
                     [`/contacts/jobs`,'Вакансии']];

let style = {
  marginTop: '1.6vw',
}

const Header = () => {
  return (
    <div className='menu'>
      <nav>
        <ul className='menu-flex'>
          <li>
            <Link to={`/`}>
              <img className='inforkom-logo' alt='ИНФОРКОМ' src={logo}/>
            </Link>
          </li>
          <MenuItem mainName='О компании' item={item_company}/>
          <MenuItem mainName='Тарифы' item={item_tarif}/>
          <MenuItem mainName='Топливные карты' item={item_cards}/>
          <MenuItem mainName='Сеть АЗС' item={item_azs}/>
          <MenuItem mainName='Топливо' item={item_fuel}/>
          <MenuItem mainName='Контакты' item={item_contacts}/>
        </ul>
      </nav>
      <nav className='gor-menu'>
        <ul className='menu-flex'>
          <li className='gor-menu-text'>
            <ul className='menu-list flex'>
              <MobMenu mainName='О компании' item={item_company}/>
              <MobMenu mainName='Тарифы' item={item_tarif}/>
              <MobMenu mainName='Топливные карты' item={item_cards}/>
              <MobMenu mainName='Сеть АЗС' item={item_azs}/>
              <MobMenu mainName='Контакты' item={item_contacts}/>
              <MobMenu mainName='Топливо' item={item_fuel}/>
            </ul>
            <p>☰</p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
