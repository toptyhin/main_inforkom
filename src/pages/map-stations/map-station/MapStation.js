import MapSide from './map/mapSide';
import InforkomMap from './map/map';
import { YMaps } from '@pbe/react-yandex-maps';
import './mapStation.css';

const MapStation = () => {
    return (
      <YMaps>
      <div className='flex flex-space-b'>
        <MapSide />
        <InforkomMap />
      </div>
      </YMaps>
    );
  }

  export default MapStation;
