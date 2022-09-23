import { Link } from "react-router-dom";
import CalcSlider from './children/slider';
import CalcButton from './children/calcButton';
import "./calc.css"

const marksFuel = [ {value: 1000}, {value: 1500}, {value: 2000},
                    {value: 2500}, {value: 3000}, {value: 3500},
                    {value: 4000}, {value: 4500}, {value: 5000},
                    {value: 5500}, {value: 6000}, {value: 6500},
                    {value: 7000}, {value: 7500}, {value: 8000},
                    {value: 8500}, {value: 9000}, {value: 9500},
                    {value: 10000},
                  ];
const marksCars = [ {value: 0},  {value: 5},  {value: 10},
                    {value: 15}, {value: 20}, {value: 25},
                    {value: 30}, {value: 35}, {value: 40},
                    {value: 45}, {value: 50}, {value: 55},
                    {value: 60}, {value: 65}, {value: 70},
                    {value: 75}, {value: 80}, {value: 85},
                    {value: 90}, {value: 95}, {value: 100},
                  ];

const Calc = () => {
  return (
    <div className="w-100">
      <section id="calc-hide" className="back-grey">
        <div className="pb-4">
          <h4>Топливный калькулятор</h4>
          <p className="point f-grey" onclick="showCalc()">
            &#9660; Рассчитайте экономию с топливной картой Инфорком &#9660;
          </p>
        </div>
        <div id="calc" className="w-100 back-grey">
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
                <CalcButton type="button" onclick="btnHandler(this)" data-ftype="dt"
                  theme="left" children="ДТ"/>
                <CalcButton type="button" onclick="btnHandler(this)" data-ftype="petrol"
                  theme="middle" children="БЕНЗИН"/>
                <CalcButton type="button" onclick="btnHandler(this)" data-ftype="gaz"
                  theme="right" children="ГАЗ"/>
              </div>
              <CalcSlider ariaLabel ="fuel slider"
                          header ='Потребление топлива'
                          unit = 'Л'
                          marks = {marksFuel}
                          defaultValue ='3500'
                          min = {1000}
                          max = {10000}
                          step = {500}
                          valueLabelDisplay ="off"
              />
              <CalcSlider ariaLabel ="car slider"
                          header ='Ваш автопарк'
                          unit ='АВТО'
                          marks = {marksCars}
                          defaultValue ="5"
                          valueLabelDisplay ="off"
              />
              <div id="vat_select" className="w-100">
                <div className="flex">
                  <CalcButton type="button" onclick="btnHandler(this)" data-vat="1"
                    theme="left" children="НДС"/>
                  <CalcButton type="button" onclick="btnHandler(this)" data-vat="0"
                    theme="right" children="БЕЗ НДС"/>
                </div>
              </div>
              <div className="">
                <CalcButton id="showResults" className="w-100 bttn green"
                  onclick="showResults()" children="Рассчитать экономию" theme="full"/>
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
