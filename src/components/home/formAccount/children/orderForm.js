import FormSelect from './../../../../components/UI/select'
import Input      from './../../../../components/UI/input/input'
import Button     from './../../../../components/UI/button'

const OrderForm = ({header_order, button_order}) => {
  return (
    <div className="flex flex-space-b text-left radius-20 white order-note">
      <h2 className="order-text">{header_order}</h2>
      <form className="order-form">
        <div className="form-item"><FormSelect value={["юр лицо"]}
             text={["юр лицо"]}/></div>
        <div className="form-item"><Input plus="plus1" name="phone" text="телефон" textAdd="+7"/></div>
        <div className="form-item"><Input plus="plus2" name="ИНН" text="ИНН"/></div>
        <div className="form-item"><Button width={button_order.width} children={button_order.name} theme={button_order.theme} /></div>
      </form>
    </div>
  );
};

export default OrderForm;
