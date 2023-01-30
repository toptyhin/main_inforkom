import Button from './../../../../../components/UI/button'
import Avatar from './../../../../../images/avatar-icon.png'
import "./account.css"

const Account = ({header_account, avatar, button_account}) => {
  return (
    <div className="flex flex-col flex-space-b text-left radius-20 white order-account">
      <div className="flex flex-space-b account-flex">
        <p>{header_account}</p>
        <div className="avatar-circle-parent">
          <div className="avatar-circle green-grad">
            <img className="invert avatar" alt='' src={avatar}/>
          </div>
        </div>
      </div>
      <div><Button type={button_account.type} width={button_account.width} children={button_account.name}/></div>
    </div>
  );
};

export default Account;
