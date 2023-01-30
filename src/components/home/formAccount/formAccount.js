import OrderForm from './children/orderForm'
import Account   from './children/account/account'
import Icon1  from './../../../images/icon-1.png'
import Icon2  from './../../../images/icon-2.png'
import Icon3  from './../../../images/icon-3.png'
import Icon4  from './../../../images/icon-4.png'
import Icon5  from './../../../images/icon-5.png'
import Icon6  from './../../../images/icon-6.png'
import './formAccount.css'

const FormAccount = ({header_order, button_order, header_account, avatar, button_account, icons}) => {
  return (
    <div className='w-100'>
      <section id='card-order' className='back-grey margin-100'>
        <div className='color-zone'>
          <div className='form-flex'>
            <OrderForm header_order={header_order} button_order={button_order}/>
            <Account header_account={header_account} avatar={avatar} button_account={button_account} />
            <div className='icon-table radius-20 white'>
              <img className='icons' alt='' src={icons[0]}/>
              <img className='icons' alt='' src={icons[1]}/>
              <img className='icons' alt='' src={icons[2]}/>
              <img className='icons' alt='' src={icons[3]}/>
              <img className='icons' alt='' src={icons[4]}/>
              <img className='icons' alt='' src={icons[5]}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormAccount;
