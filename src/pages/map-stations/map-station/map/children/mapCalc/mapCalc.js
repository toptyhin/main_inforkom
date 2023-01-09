import Button from '../../../../../../components/UI/button';
import MapCalcSlider from './children/mapSlider';
import MapFuelType from './children/mapFuelType';
import { useState } from 'react';

const MapCalc = () => {
  const [discountSlider, setDiscountSlider] = useState('9');
  const [distanceSlider, setDistanceSlider] = useState([200, 300]);
  const [fuel1, setFuel1] = useState('1');
  const [fuel2, setFuel2] = useState('1');
  const [hide, setHide] = useState(true);
    return (
      <div className=''>
      <div className={hide ? 'flex flex-center' : 'flex flex-center hidden'}>
        <p className='map-p-1'>Рассчитайте, сколько сэкономит топливная карта Инфорком</p>
      </div>
      <div className={hide ? '' : 'hidden'} onClick={() => setHide(false)}>
        <Button children='Топливный калькулятор' theme='map-1' width='360px'/>
      </div>
      <div className={hide ? 'map-calc hidden' : 'map-calc'}>
        <MapCalcSlider setSlider={setDistanceSlider}
                getAriaLabel = {() => 'distance slider'}
                header ='Расстояние'
                unit = 'км'
                defaultValue ={[200, 300]}
                min = {10}
                max = {1000}
                valueLabelDisplay ='off'
                />
        <p className='map-header'>Вид топлива</p>
        <MapFuelType children='Бензин/ДТ' setFuel={setFuel1}/>
        <MapFuelType children='Газ' setFuel={setFuel2}/>
        <MapCalcSlider  setSlider={setDiscountSlider}
                ariaLabel ='discount slider'
                header ='Размер скидки'
                unit = '%'
                defaultValue ='9'
                min = {1}
                max = {100}
                valueLabelDisplay ='off'
                />
        </div>
      </div>
    );
  }

  export default MapCalc;
