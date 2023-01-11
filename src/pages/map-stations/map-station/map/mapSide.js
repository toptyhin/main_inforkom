import { useState } from 'react';
import MapMenu from './children/mapMenu/mapMenu';
import Input from '../../../../components/UI/input/input';
import MapCalc from './children/mapCalc/mapCalc';
import Search from './../../../../images/map/search.png'
import Appstore from './../../../../images/map/appstore.png'
import Google from './../../../../images/map/google.png'
import Button from '../../../../components/UI/button';
import MapMenuItem from './children/mapMenu/children/mapMenuItem'
import HouseWhite  from './../../../../images/map/house-white.png'
import House       from './../../../../images/map/house.png'
import Azs from './../../../../images/map/azs.png'
import AzsWhite from './../../../../images/map/azs-white.png'
import ProductFilter from './children/productFilter/productFilter';

const MapSide = (props) => {

  const {products, productsLoadStatus} = props;
  const [filter, setFilter] = useState(false);
  

  const Glass = <img src={Search}/>;

  const filterClickHandler = (btnState) => {
    setFilter(btnState)
  }


  return (
      <div className='map-buttons'>
      <p className='map-header'>Расчет маршрута</p>

      {/* <MapMenuItem children='Регион' img={House} whiteImg={HouseWhite}/> */}
      {/* пока спрятал чтобы верстка не развалилась */}
      
      <MapMenuItem handler={filterClickHandler} children='Фильтр' img={Azs} whiteImg={AzsWhite}/>
      
      {filter && <ProductFilter products={products}/>}
      
      <MapCalc />
      
      <p className='map-p-2 map-p-left'>Для дельной информации свяжитесь с менеджером</p>
      <div className='map-help'>
        <Button children='Звонок' theme='map-2' width='200px'/>
          <div className='map-download flex flex-space-a'>
            <img src={Appstore}/>
            <img src={Google}/>
          </div>
        </div>
      </div>
    );
  }

  export default MapSide;
