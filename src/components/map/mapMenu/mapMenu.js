import MapMenuItem from './children/mapMenuItem'
import House from './../../../images/map/house.png'
import Azs from './../../../images/map/azs.png'
import Circules from './../../../images/map/circules.png'
import Point from './../../../images/map/point.png'
import HouseWhite from './../../../images/map/house-white.png'
import AzsWhite from './../../../images/map/azs-white.png'
import PointWhite from './../../../images/map/point-white.png'

const MapMenu = () => {
    return (
      <div>
        <p className='map-header'>Расчет маршрута</p>
        <div className='map-menu'>
          <MapMenuItem children='Регион' img={House} whiteImg={HouseWhite}/>
          <MapMenuItem children='Фильтр по топливу' img={Azs} whiteImg={AzsWhite}/>
          <MapMenuItem children='Цвета сетей' img={Circules} whiteImg={Circules}/>
          <MapMenuItem children='Построить маршрут' img={Point} whiteImg={PointWhite}/>
        </div>
      </div>
    );
  }

  export default MapMenu;
