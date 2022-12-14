import FormSelect from './../../../../components/UI/select'
import Input      from './../../../../components/UI/input/input'
import Button     from './../../../../components/UI/button'

const OrderForm = () => {
  return (
    <div className="flex flex-space-b text-left radius-20 white order-note">
      <h2 className="order-text">Заказать топливную карту онлайн</h2>
      <form className="order-form">
        <div className="form-item"><FormSelect value={["юр лицо"]}
             text={["юр лицо"]}/></div>
        <div className="form-item"><Input plus="plus1" name="phone" text="телефон" textAdd="+7"/></div>
        <div className="form-item"><Input plus="plus2" name="ИНН" text="ИНН"/></div>
        <div className="form-item"><Button width="100%" children="Оформить" theme="unactive"/></div>
      </form>
    </div>
  );
};

export default OrderForm;
