import MapSide from './map/mapSide';
import Map from './map/map';

const MapStation = () => {
    return (
      <div className='flex flex-space-b'>
        <MapSide />
        <Map />
      </div>
    );
  }

  export default MapStation;
