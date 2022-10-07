import { Link } from "react-router-dom";
import CalcButton from './../UI/calcButton'
import Res from "./miniChildren/res"

const CalcRes = () => {
  return (
    <div id="calcResult">
      <div className="">
        <div id="charts" className="height-pie">
        </div>
      </div>
      <Res/>
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
        <form action="https://inforkom.ru/images/docs/kp_2.pdf" target="_blank">
          <CalcButton id="com-offer"
            type="submit" children="Коммерческое предложение" theme="full"/>
        </form>
      </div>
    </div>
  );
};

export default CalcRes;
