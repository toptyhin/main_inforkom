import { Link } from 'react-router-dom';
import logo     from './../../images/head.png';
import MenuItem from './children/menuItem'
import './header.css';

let style = {
  marginTop: '1.6vw',
}

const Header = () => {
  return (
  <nav className='menu'>
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

      <MenuItem mainHref='' mainName='Тарифы'
        item={[[`tarify/tatneft`,'Тариф Татнефть'],
               [`tarify/gazprom`,'Тариф Газпром'],
               [`tarify/max`,'Тариф Максимальный'],
               [`tarify/universalny`,'Тариф Универсальный'],
               [`tarify/svoi-region`,'Тариф Все регионы'],
               [`tarify/agregator`,'Тариф Агрегатор']]}/>

      <MenuItem mainHref='' mainName='Топливные карты'
        item={[[`fuel-cards/fuel-card`,'Топливная карта'],
               [`fuel-cards/oil-talons`,'Топливные талоны'],
               [`fuel-cards/dkv-fuel-cards`,'Топливная карта DKV'],
               [`fuel-cards/card-euroshell`,'Карта Euroshell'],
               [`fuel-cards/com-proposal`,'Коммерческое предложение'],
               [`fuel-cards/operation-online`,'Онлайн-управление картой'],
               [`fuel-cards/44-fz-goszakazy`,'Поставки топлива по 44-ФЗ']]}/>

      <MenuItem mainHref='' mainName='Сеть АЗС'
        item={[[`/map-stations/map-station`,'Сеть АЗС Инфорком'],
               [``,'Проложить маршрут'],
               [``,'Мобильное приложение'],
               [``,'АЗС с Adblue'],
               [``,'Изменения АЗС'],
               [``,'Предложения для АЗС']]}/>

      <MenuItem mainHref='' mainName='Топливо'
        item={[[``,'Цены на топливо'],
               [``,'Топливо оптом'],
               [``,'Мобильная АЗС'],
               [``,'Моторные масла']]}/>

      <MenuItem mainHref='' mainName={['Контакты']}
        item={[[``,'Контактная информация'],
               [``,'Вакансии']]}/>
    </ul>
    <div className='gor-menu'>&#9776;</div>
  </nav>
  );
};

export default Header;
