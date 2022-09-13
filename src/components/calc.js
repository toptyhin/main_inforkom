import { Link } from "react-router-dom";
import "./../css/calc.css"

const Calc = () => {
  return (
    <div className="w-100">
      <section id="calc-hide" className="back-grey">
        <div className="pb-4">
          <h4>Топливный калькулятор</h4>
          <p className="click f-grey" onclick="showCalc()">
            &#9660; Рассчитайте экономию с топливной картой Инфорком &#9660;
          </p>
        </div>
        <div id="calc" className="w-100 back-grey hidden">
          <div id="main-calc">
            <div className="">
              <div className="geo-zone radius-20 white">
                <h2>Регион перевозок</h2>
                <div className="search">
                  <div className="flex flex-col">
                    <div className="flex">
                      <div className="inline-block">
                        <input type="text" id="geo1" placeholder="Введите регион"
                          className="field field1"/>
                      </div>
                      <div className="inline-block">
                        <button role="button" id="geoplus" className="field plus2 inline-block"
                          onclick="plusGeo(this)">+</button>
                      </div>
                    </div>
                    <div>
                      <input type="text" id="geo2" placeholder="Дополнительный регион"
                        className="search field field1 field2 hidden"/>
                      </div>
                  </div>
                </div>
              </div>
              <div className="button-block w-100">
                <button type="button" onclick="btnHandler(this)" data-ftype="dt"
                  className="bttn-block left active">ДТ</button>
                <button type="button" onclick="btnHandler(this)" data-ftype="petrol"
                  className="bttn-block">БЕНЗИН</button>
                <button type="button" onclick="btnHandler(this)" data-ftype="gaz"
                  className="bttn-block right">ГАЗ</button>
              </div>
              <div>
                <div className="calculate-text f-grey">
                  <span className="flex-1 text-left">Потребление топлива</span>
                  <span className="calc-value font-bold"></span>
                </div>
                <div className="calculate-slider">
                  <div id="slider1"></div>
                </div>
              </div>
              <div>
                <div className="calculate-text f-grey">
                  <span className="flex-1 text-left">Ваш автопарк</span>
                  <span className="calc-value font-bold uppercase"></span>
                </div>
                <div className="calculate-slider">
                  <div id="slider2"></div>
                </div>
              </div>
              <div id="vat_select" className="w-100">
                <div className="flex">
                  <button type="button" onclick="btnHandler(this)" data-vat="1"
                    className="bttn-block left active">НДС</button>
                  <button type="button" onclick="btnHandler(this)" data-vat="0"
                    className="bttn-block right">БЕЗ НДС</button>
                </div>
              </div>
              <div className="">
                <button type="button" id="showResults" className="w-100 bttn green"
                  onclick="showResults()">
                  Рассчитать экономию
                </button>
              </div>

              <div id="calcResult" className="hidden">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calc;
