import { useState } from 'react';
import MapMenu from './children/mapMenu/mapMenu';
import InputSuggest from '../../../../components/UI/input/inputSuggest';
import MapCalc from './children/mapCalc/mapCalc';
import Search from './../../../../images/map/search.png'
import Appstore from './../../../../images/map/appstore.png'
import Google from './../../../../images/map/google.png'
import Button from '../../../../components/UI/button';
import MapMenuItem from './children/mapMenu/children/mapMenuItem'
import HouseWhite  from './../../../../images/map/house-white.png'
import House       from './../../../../images/map/house.png'
import Point       from './../../../../images/map/point.png'
import PointWhite       from './../../../../images/map/point-white.png'
import Azs from './../../../../images/map/azs.png'
import AzsWhite from './../../../../images/map/azs-white.png'
import ProductFilter from './children/productFilter/productFilter';
import MapRouter from './children/mapRoute/mapRouter';
import GeoSearchSuggestions from './children/search/searchSuggestions';

const MapSide = (props) => {

  const {products, productsLoadStatus,mapMove} = props;
  const [filter, setFilter] = useState(false);
  const [router, setRouter] = useState(false);
  

  const Glass = <img src={Search}/>;

  const filterClickHandler = (btnState) => {
    setFilter(btnState)
  }
  const routeClickHandler = (btnState) => {
    setRouter(btnState)
  }

  return (
    <>

    {filter && <ProductFilter products={products}/>}
    {router && <MapRouter/>}


    <div className='map-buttons'>

        <div style={{width:'90%', height:'45px'}}>
          <GeoSearchSuggestions mapMove={mapMove}/>  
        </div>  
      

      <p className='map-header'>Сеть АЗС Инфорком</p>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', width:'90%'}}>
        <MapMenuItem children='Регион' img={House} whiteImg={HouseWhite}/>
              
        <MapMenuItem handler={filterClickHandler} children='Фильтр по топливу' img={Azs} whiteImg={AzsWhite}/>
       

        <MapMenuItem children='Цвета' img={House} whiteImg={HouseWhite}/>
        <MapMenuItem handler={routeClickHandler} children='Маршрут' img={Point} whiteImg={PointWhite}/>
      </div>
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
    </>
    );
  }

  export default MapSide;
