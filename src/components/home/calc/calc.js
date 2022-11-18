import { useState } from 'react';
import Geo from        './children/geo'
import Nds from        './children/nds'
import Res from        './children/res'
import Charts from     './children/charts'
import FuelType from   './children/fuelType'
import CalcSlider from './children/slider/slider'
import Button     from './../../../components/UI/button'
import './calc.css'

const marksFuel = [ {value: 1000}, {value: 1500}, {value: 2000}, {value: 2500},
                    {value: 3000}, {value: 3500}, {value: 4000}, {value: 4500},
                    {value: 5000}, {value: 5500}, {value: 6000}, {value: 6500},
                    {value: 7000}, {value: 7500}, {value: 8000}, {value: 8500},
                    {value: 9000}, {value: 9500}, {value: 10000},
                  ];
const marksCars = [ {value:0}, {value:5}, {value:10}, {value:15}, {value:20},
                    {value:25}, {value:30}, {value:35}, {value:40}, {value:45},
                    {value:50}, {value:55}, {value:60}, {value:65}, {value:70},
                    {value:75}, {value:80}, {value:85}, {value:90}, {value:95},
                    {value:100},
                  ];

const Count = async (setFuel, setDiscount, setVat, setManage,
  setTotal, geo1, geo2, fuelType, fuelSlider, carSlider, nds ) => {
  const reg1 = 'region[0]='+ geo1;
  const reg2 = '&region[1]=' + geo2;
  let region;
  if (geo2!=null) { region = reg1 + reg2; }
    else {  region = reg1; }
  const url = 'https://data.inforkom.ru/api/v1/Base/Calculator?' + region + '&fuel=' + fuelType;
  const amount_l = fuelSlider * carSlider;
  const calcResponse = await fetch(url);
  const resp = await calcResponse.json();
  let resFuel;
  let resDiscount;
  let resManage;
  let resTotal;
  let resVat;
  if (nds === true) {
    resFuel = amount_l * resp.minPrice - amount_l * resp.maxVal - amount_l * resp.minPrice / 6 - amount_l * resp.minPrice * 0.017;
    resDiscount = amount_l * resp.maxVal;
    resManage = amount_l * resp.minPrice * 0.017;
    resTotal = amount_l * resp.minPrice;
    resVat = amount_l * resp.minPrice / 6;
  } else {
    resFuel = amount_l * resp.minPrice - amount_l * resp.maxVal - amount_l * resp.minPrice * 0.017;
    resDiscount = amount_l * resp.maxVal;
    resManage = amount_l * resp.minPrice * 0.017;
    resTotal = amount_l * resp.minPrice;
    resVat = 0;
  };
  setFuel(resFuel.toFixed(2));
  setDiscount(resDiscount.toFixed(2));
  setManage(resManage.toFixed(2));
  setTotal(resTotal.toFixed(2));
  setVat(resVat.toFixed(2));
};

const Calc = () => {
  const [isHidden, setHidden] = useState(true);
  const [geo1, setGeo1] = useState();
  const [geo2, setGeo2] = useState();
  const [fuelType, setFuelType] = useState('dt');
  const [fuelSlider, setFuelSlider] = useState('3500');
  const [carSlider, setCarSlider] = useState('5');
  const [nds, setNds] = useState(true);
  const [ready, setReady] = useState(false);
  const [show, setShow] = useState(false);
  const read = ready;

  const [fuel, setFuel] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [vat, setVat] = useState(0);
  const [manage, setManage] = useState(0);
  const [total, setTotal] = useState(0);
  return (
    <div className='w-100'>
      <div id='calc-hide' className='back-grey'>
        <div className='pb-4'>
          <h4>Топливный калькулятор</h4>
          <p className='point f-grey show-text' onClick={() => setHidden(false)}>
            &#9660; Рассчитайте экономию с топливной картой Инфорком &#9660;
          </p>
          <p className='point f-grey calc-head'>
            Рассчитайте экономию<br/>&#9660; с топливной картой Инфорком &#9660;
          </p>
        </div>

        <div id='calc' className={isHidden ? 'w-100 back-grey hidden' : 'w-100 back-grey'}>
          <div id='main-calc'>
            <Geo setGeo1={setGeo1} setGeo2={setGeo2} setReady={setReady}/>
            <FuelType setFuelType={setFuelType}/>
            <CalcSlider setSlider={setFuelSlider}
                      ariaLabel ='fuel slider'
                      header ='Потребление топлива'
                      unit = 'Л'
                      marks = {marksFuel}
                      defaultValue ='3500'
                      min = {1000}
                      max = {10000}
                      step = {500}
                      valueLabelDisplay ='off'
                      />
            <CalcSlider setSlider={setCarSlider}
                      ariaLabel ='car slider'
                      header ='Ваш автопарк'
                      unit ='АВТО'
                      marks = {marksCars}
                      defaultValue ='5'
                      valueLabelDisplay ='off'
                      />
            <div className='flex flex-center'>
              <Nds setNds={setNds}/>
            </div>
            <div onClick = {() => {setShow(read);
              Count(setFuel, setDiscount, setVat, setManage,
              setTotal, geo1, geo2, fuelType, fuelSlider, carSlider, nds)}}>
              <Button type='button'
                children='Рассчитать экономию' theme='calc'/>

            </div>
            <div id='calcResult' className={show ? '' : 'hidden'}>
              <Charts fuel={fuel} vat={vat} discount={discount} manage={manage}/>
              <Res card={fuel} nocard={total}/>

              <div className='mt-20 pb-9'>
                <div id='legend' className='flex flex-col xl:px-10'>
                  <span className='legend_record mb-4 f-green'>Экономия на топливе</span>
                  <span className='legend_record mb-4 f-grey'>
                    <span className='label yellow'></span>Скидка на топливо
                    <span id='total_discount' className='amount'>{discount} &#8381;</span>
                  </span>
                  <span className={nds ? 'legend_record mb-4 f-grey' : 'hidden'}>
                    <span className='label green'></span>НДС 20%
                    <span id='total_vat' className='amount'>{vat} &#8381;</span>
                  </span>
                  <span className='legend_record mb-4 f-grey'>
                    <span className='label orange'></span>Выбор лучших цен 1,7%
                    <span id='total_manage' className='amount'>{manage} &#8381;</span>
                  </span>
                </div>
                <form action='https://inforkom.ru/images/docs/kp_2.pdf' target='_blank'>
                  <Button type='submit' children='Коммерческое предложение' theme='calc'/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
