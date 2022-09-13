import { Link } from "react-router-dom";
import Avatar from './../images/avatar-icon.png'
import Icon1 from './../images/icon-1.png'
import Icon2 from './../images/icon-2.png'
import Icon3 from './../images/icon-3.png'
import Icon4 from './../images/icon-4.png'
import Icon5 from './../images/icon-5.png'
import Icon6 from './../images/icon-6.png'

import "./../css/form.css"

const Form = () => {
  return (
    <div className="w-100">
      <section id="card-order" className="back-grey margin-100">
        <div className="color-zone">
          <div className="flex flex-space-b">
            <div className="flex flex-space-b text-left radius-20 white order-note">
              <h2>Заказать<br/>топливную<br/>карту онлайн</h2>
              <form>
                <select className="back-grey field field4 w-100 reg-form-field">
                  <option value="юр лицо">юр лицо</option>
                  <option value="2">вариант2</option>
                  <option value="3">вариант3</option>
                </select>
                <div className="flex reg-form-field">
                  <input className="field w-100 h-100" type="text" name="phone" placeholder="телефон"/>
                  <div className="plus1 h-100 z-2 field inline-block">+7</div>
                </div>
                <div className="flex reg-form-field">
                  <input className="field w-100 h-100" type="text" name="ИНН" placeholder="ИНН"/>
                  <div className="plus2 h-100 z-2 field inline-block"></div>
                </div>
                <button className="field reg-form-field uppercase">Оформить</button>
              </form>
            </div>
            <div className="flex flex-col flex-space-b text-left radius-20 white order-account">
              <div className="flex flex-space-b">
                <p>Личный<br/>кабинет</p>
                <div className="avatar-circle green-grad">
                  <img className="invert avatar" src={Avatar}/>
                </div>
              </div>
              <div><button className="w-100 enter green-grad">Войти</button></div>
            </div>
          </div>
          <div className="icon-table radius-20 white">
            <img className="icons" src={Icon1}/>
            <img className="icons" src={Icon2}/>
            <img className="icons" src={Icon3}/>
            <img className="icons" src={Icon4}/>
            <img className="icons" src={Icon5}/>
            <img className="icons" src={Icon6}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
