import { Link } from "react-router-dom";
import logo     from "./../../images/head.png";
import MenuItem from './children/menuItem'

import "./header.css";

const Header = () => {
  return (
  <nav className="menu">
    <ul className="w-100 flex flex-space-b">
      <img className="inforkom-logo" alt="ИНФОРКОМ" src={logo} />
      <MenuItem mainHref="" mainName="О компании"
        item={[["","Новости компании"],
               ["","История"],
               ["","Социальная ответственность"],
               ["","Наши проекты"]]}/>

      <MenuItem mainHref="" mainName="Тарифы"
        item={[["","Тариф Татнефть"],
               ["","Тариф Газпром"],
               ["","Тариф Максимальный"],
               ["","Тариф Универсальный"],
               ["","Тариф Все регионы"],
               ["","Тариф Агрегатор"]]}/>

      <MenuItem mainHref="" mainName="Топливные карты"
        item={[["","Топливная карта"],
               ["","Топливные талоны"],
               ["","Топливная карта DKV"],
               ["","Карта Euroshell"],
               ["","Коммерческое предложение"],
               ["","Онлайн-управление картой"],
               ["","Поставки топлива по 44-ФЗ"]]}/>

      <MenuItem mainHref="" mainName="Сеть АЗС"
        item={[["","Сеть АЗС Инфорком"],
               ["","Проложить маршрут"],
               ["","Мобильное приложение"],
               ["","АЗС с Adblue"],
               ["","Изменения АЗС"],
               ["","Предложения для АЗС"]]}/>

      <MenuItem mainHref="" mainName="Топливо"
        item={[["","Цены на топливо"],
               ["","Топливо оптом"],
               ["","Мобильная АЗС"],
               ["","Моторные масла"]]}/>

      <li><a href="">Договор online</a></li>
      <MenuItem mainHref="" mainName="Контакты"
        item={[["","Контактная информация"],
               ["","Вакансии"]]}/>
    </ul>
  </nav>
  );
};

export default Header;
