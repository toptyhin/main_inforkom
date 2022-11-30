import OrderForm from './children/orderForm'
import Account   from './children/account/account'
import Icon1  from './../../../images/icon-1.png'
import Icon2  from './../../../images/icon-2.png'
import Icon3  from './../../../images/icon-3.png'
import Icon4  from './../../../images/icon-4.png'
import Icon5  from './../../../images/icon-5.png'
import Icon6  from './../../../images/icon-6.png'
import './formAccount.css'

const FormAccount = () => {
  return (
    <div className='w-100'>
      <section id='card-order' className='back-grey margin-100'>
        <div className='color-zone'>
          <div className='form-flex'>
            <OrderForm/>
            <Account/>
            <div className='icon-table radius-20 white'>
              <img className='icons' alt='' src={Icon1}/>
              <img className='icons' alt='' src={Icon2}/>
              <img className='icons' alt='' src={Icon3}/>
              <img className='icons' alt='' src={Icon4}/>
              <img className='icons' alt='' src={Icon5}/>
              <img className='icons' alt='' src={Icon6}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormAccount;
