import { Link } from "react-router-dom";
import CalcButton from './../UI/calcButton'
import CalcSlider from './../UI/slider'
import Geo from './miniChildren/geo'

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

const CalcMain = () => {
  return (
    <div>
      <Geo/>

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

      <div>
        <CalcButton id="showResults" type="button"
          onclick="showResults()" children="Рассчитать экономию" theme="full"/>
      </div>
    </div>
  );
};

export default CalcMain;
