import { Link } from "react-router-dom";
import Input from "./../../../../components/UI/input/input"

const Geo = () => {
  return (
    <div className="geo-zone radius-20 white">
      <h2>Регион перевозок</h2>
      <div className="search">
        <div className="flex flex-col">
          <div className="flex inline-block">
             <Input plus="plus2" text="Введите регион" width="24vw" height="3.2vw" textAdd="+"/>
             <div className="inline-block">
               <button role="button" id="geoplus" className="field plus2 inline-block"
                  onclick="plusGeo(this)"></button>
            </div>
          </div>
          <div>
            <input type="text" id="geo2" placeholder="Дополнительный регион"
              className="search field field1 field2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geo;
