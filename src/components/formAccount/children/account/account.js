import { Link } from "react-router-dom";
import Button from './../../../../components/UI/button'
import Avatar from './../../../../images/avatar-icon.png'
import "./account.css"

const Account = ( {} ) => {
  return (
    <div className="flex flex-col flex-space-b text-left radius-20 white order-account">
      <div className="flex flex-space-b account-flex">
        <p>Личный кабинет</p>
        <div className="avatar-circle-parent">
          <div className="avatar-circle green-grad">
            <img className="invert avatar" src={Avatar}/>
          </div>
        </div>
      </div>
      <div><Button type='button' width="100%" children="Войти"/></div>
    </div>
  );
};

export default Account;
