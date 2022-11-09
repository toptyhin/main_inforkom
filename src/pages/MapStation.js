import MapSide from '../components/map/mapSide';
import Map from '../components/map/map';

const MapStation = () => {
    return (
      <div className='flex flex-space-b'>
        <MapSide />
        <Map />
      </div>
    );
  }

  export default MapStation;
