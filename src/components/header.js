import { Link } from "react-router-dom";
import logo     from "./../images/head.png";
import "./../css/header.css";

const Header = () => {
  return (
  <nav className="menu">
    <ul className="w-100 flex flex-space-b">
      <img className="inforkom-logo" alt="ИНФОРКОМ" src={logo} />
      <li><a href="">О компании</a>
        <ul>
          <li><a href="">Новости компании</a></li>
          <li><a href="">История</a></li>
          <li><a href="">Социальная ответственность</a></li>
          <li><a href="">Наши проекты</a></li>
        </ul>
      </li>
      <li><a href="">Тарифы</a>
        <ul>
          <li><a href="">Тариф Татнефть</a></li>
          <li><a href="">Тариф Газпром</a></li>
          <li><a href="">Тариф Максимальный</a></li>
          <li><a href="">Тариф Универсальный</a></li>
          <li><a href="">Тариф Все регионы</a></li>
          <li><a href="">Тариф Агрегатор</a></li>
        </ul>
      </li>
      <li><a href="">Топливные карты</a>
        <ul>
          <li><a href="">Топливная карта</a></li>
          <li><a href="">Топливные талоны</a></li>
          <li><a href="">Топливная карта DKV</a></li>
          <li><a href="">Карта Euroshell</a></li>
          <li><a href="">Коммерческое предложение</a></li>
          <li><a href="">Онлайн-управление картой</a></li>
          <li><a href="">Поставки топлива по 44-ФЗ</a></li>
        </ul>
      </li>
      <li><a href="">Сеть АЗС</a>
        <ul>
          <li><a href="">Сеть АЗС Инфорком</a></li>
          <li><a href="">Проложить маршрут</a></li>
          <li><a href="">Мобильное приложение</a></li>
          <li><a href="">АЗС с Adblue</a></li>
          <li><a href="">Изменения АЗС</a></li>
          <li><a href="">Предложения для АЗС</a></li>
        </ul>
      </li>
      <li><a href="">Топливо</a>
        <ul>
          <li><a href="">Цены на топливо</a></li>
          <li><a href="">Топливо оптом</a></li>
          <li><a href="">Мобильная АЗС</a></li>
          <li><a href="">Моторные масла</a></li>
        </ul>
      </li>
      <li><a href="">Договор online</a></li>
        <li><a href="">Контакты</a>
        <ul>
          <li><a href="">Контактная информация</a></li>
          <li><a href="">Вакансии</a></li>
        </ul>
      </li>
    </ul>
  </nav>
  );
};

export default Header;
