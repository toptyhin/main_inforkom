import { Link } from 'react-router-dom';
import logo     from './../../images/head.png';
import MenuItem from './children/menuItem'
import MobMenu from './children/mobMenu'
import './header.css';

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
      <MenuItem mainName='О компании'
        item={[[`/about/news`,'Новости компании'],
               [`/about/history`,'История'],
               [`/about/social`,'Социальная ответственность'],
               [`/about/projects`,'Наши проекты']]}/>

      <MenuItem mainName='Тарифы'
        item={[[`tarify/tatneft`,'Тариф Татнефть'],
               [`tarify/gazprom`,'Тариф Газпром'],
               [`tarify/max`,'Тариф Максимальный'],
               [`tarify/universalny`,'Тариф Универсальный'],
               [`tarify/svoi-region`,'Тариф Все регионы'],
               [`tarify/agregator`,'Тариф Агрегатор']]}/>

      <MenuItem mainName='Топливные карты'
        item={[[`fuel-cards/fuel-card`,'Топливная карта'],
               [`fuel-cards/oil-talons`,'Топливные талоны'],
               [`fuel-cards/dkv-fuel-cards`,'Топливная карта DKV'],
               [`fuel-cards/card-euroshell`,'Карта Euroshell'],
               [`fuel-cards/com-proposal`,'Коммерческое предложение'],
               [`fuel-cards/operation-online`,'Онлайн-управление картой'],
               [`fuel-cards/44-fz-goszakazy`,'Поставки топлива по 44-ФЗ']]}/>

      <MenuItem mainName='Сеть АЗС'
        item={[[`/map-stations/map-station`,'Сеть АЗС Инфорком'],
               [`/map-stations/mobile`,'Мобильное приложение'],
               [`/map-stations/adblue`,'АЗС с Adblue'],
               [`/map-stations/azs-changes`,'Изменения АЗС'],
               [`/map-stations/proposal-for-petrol`,'Предложения для АЗС']]}/>

      <MenuItem mainName='Топливо'
        item={[[`/fuel-prices-interactive-map/fuel-prices`,'Цены на топливо'],
               [`/fuel-prices-interactive-map/special-offer`,'Топливо оптом'],
               [`/fuel-prices-interactive-map/mobile-azs`,'Мобильная АЗС'],
               [`/fuel-prices-interactive-map/motor-oil`,'Моторные масла']]}/>

      <MenuItem mainName={['Контакты']}
        item={[[`/contacts/contacts`,'Контактная информация'],
               [`/contacts/jobs`,'Вакансии']]}/>
    </ul>
</nav>
    <nav className='gor-menu'>
      <ul className='menu-flex'>
        <MobMenu mainName='☰' item={['О компании', 'Тарифы','Топливные карты',
          'Сеть АЗС','Топливо','Контакты']}/>
      </ul>
    </nav>
  </div>
  );
};

export default Header;
