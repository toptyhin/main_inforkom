import { Link } from "react-router-dom";
import CalcButton from './../UI/calcButton'

const CalcRes = () => {
  return (
    <div id="calcResult">
      <div className="">
        <div id="charts" className="height-pie">
        </div>
      </div>
      <div className="radius-20 white total-zone">
        <div className="flex flex-center">
          <h5 className="f-grey">Итого:</h5>
        </div>
        <hr/>
        <div className="total flex flex-space-b">
          <div className="">
            <h5 className="text-center f-grey">С картой</h5>
            <span className="legend_record">
              <span className="label l-green"></span>
              <span id="total_fuel" className="amount">0.00 &#8381;</span>
            </span>
          </div>
          <div className="v-line"></div>
          <div className="">
            <h5 className="text-center f-grey">Без карты</h5>
            <span className="legend_record">
              <span className="label gradient">
              </span>
              <span id="total_total" className="amount">0.00 &#8381;</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-20 pb-9">
        <div id="legend" className="flex flex-col xl:px-10">
          <span className="legend_record mb-4 f-green">Экономия на топливе</span>
          <span className="legend_record mb-4 f-grey">
            <span className="label yellow"></span>Скидка на топливо
            <span id="total_discount" className="amount">0.00 &#8381;</span>
          </span>
          <span className="legend_record mb-4 f-grey">
            <span className="label green"></span>НДС 20%
            <span id="total_vat" className="amount">0.00 &#8381;</span>
          </span>
          <span className="legend_record mb-4 f-grey">
            <span className="label orange"></span>Выбор лучших цен 1,7%
            <span id="total_manage" className="amount">0.00 &#8381;</span>
          </span>
        </div>
        <div id="offer" className="w-100 bttn green">
          <a href="https://inforkom.ru/images/docs/kp_2.pdf" target="_blank"
             className="">Коммерческое предложение</a>
        </div>
      </div>
    </div>
  );
};

export default CalcRes;
