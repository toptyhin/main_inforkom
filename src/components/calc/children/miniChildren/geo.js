import { Link } from "react-router-dom";
import Input from "./../../../../components/UI/input/input"

const Geo = () => {
  return (
    <div className="geo-zone radius-20 white">
      <h2>Регион <br className="geo-hide"/>перевозок</h2>
      <div className="search">
        <form className="flex-search">
          <div className="flex item inline-block">
             <Input plus="plus2" text="Введите регион" textAdd="+"/>
             <div className="inline-block">
            </div>
          </div>
          <div className="item">
            <Input text="Дополнительный регион"/>
                      </div>
        </form>
      </div>
    </div>
  );
};

export default Geo;
