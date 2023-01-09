import MapSide from './map/mapSide';
import InforkomMap from './map/map';
import { YMaps } from '@pbe/react-yandex-maps';
import './mapStation.css';

const MapStation = () => {
    return (
      <YMaps>
      
        
        <InforkomMap />
        <MapSide/>
      </YMaps>
    );
  }

  export default MapStation;
