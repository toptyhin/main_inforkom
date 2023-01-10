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

const MapSide = (props) => {

  const {products, productsLoadStatus} = props;
  const [filter, setFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState([]);


  const Glass = <img src={Search}/>;

  const filterClickHandler = (btnState) => {
    setFilter(btnState)
  }

  

  const FilterBtn = ({name,id,products,}) => 
  (<div 
      key={id} 
      onClick={()=>console.log(products)} 
      style={{cursor:'pointer', margin:5, width:50,height:40,backgroundColor: '#dedede'}}>
  {name}
  </div>);


  const renderFilter = () => {
    console.log('render filter',products)
    let buttons = [];
    products.map(gr=>{
      gr.map(e=>{
        if (e.catId !== 401207) {
          const conf = {
            name: e.group,
            id: e.id,
            products:e.products
          }
          buttons.push(FilterBtn(conf))
        }
      })
    });
    return <div style={{width:'100%', display: 'flex'}} children={buttons}></div>
  }
  
  return (
      <div className='map-buttons'>
      <p className='map-header'>Расчет маршрута</p>
      {/* <MapMenuItem children='Регион' img={House} whiteImg={HouseWhite}/> */}
      {/* пока спрятал чтобы верстка не развалилась */}
      <MapMenuItem handler={filterClickHandler} children='Фильтр' img={Azs} whiteImg={AzsWhite}/>
      {filter && renderFilter()}
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
