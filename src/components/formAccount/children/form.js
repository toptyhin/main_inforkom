import { Link } from "react-router-dom";
import FormSelect from './../../../components/UI/select'
import Input      from './../../../components/UI/input/input'
import Button     from './../../../components/UI/button'

const OrderForm = ( {} ) => {
  return (
    <div className="flex flex-space-b text-left radius-20 white order-note">
      <h2>Заказать<br/>топливную<br/>карту онлайн</h2>
      <form>
        <FormSelect value={["юр лицо","вариант 1","вариант 2"]}
                    text={["юр лицо","вариант 1","вариант 2"]}/>
        <Input plus="plus1" width="17vw" height="2.7vw" mt="0.9vw" name="phone" text="телефон" textAdd="+7"/>
        <Input plus="plus2" width="17vw" height="2.7vw" mt="0.9vw" name="ИНН" text="ИНН"/>
        <Button children="Оформить" theme="grey"/>
      </form>
    </div>
  );
};

export default OrderForm;
