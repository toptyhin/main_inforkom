import MapMenu from './mapMenu/mapMenu';
import Input from '../../../../components/UI/input/input';
import MapCalc from './mapCalc/mapCalc';
import Search from './../../../../images/map/search.png'
import Appstore from './../../../../images/map/appstore.png'
import Google from './../../../../images/map/google.png'
import Button from '../../../../components/UI/button';
import './mapSide.css';

const MapSide = () => {
  let Glass = <img src={Search}/>;
    return (
        <div className='map-buttons'>
          <div>
            <Input plus='plus3' name='search' text='Поиск' textAdd={Glass} theme='search'/>
          </div>
          <MapMenu />
          <MapCalc />
          <p className='map-p map-p-left'>Для дельной информации свяжитесь с менеджером</p>
          <Button children='Звонок' theme='map' width='200px'/>
          <div className='map-download flex flex-space-a'>
            <img src={Appstore}/>
            <img src={Google}/>
          </div>
        </div>
    );
  }

  export default MapSide;
