import MapPoint from './children/mapPoint';
import { Map, ObjectManager, ZoomControl } from '@pbe/react-yandex-maps';

const InforkomMap = () => {
    return (
        <Map 
        className={'map'}
        defaultState={{ 
          center: [55.75, 37.57], 
          zoom: 9,
        }} 
        width="100%"
        height="100vh"
        >
        <ZoomControl options={{ float: "right" }} />
        </Map>
    );
  }

  export default InforkomMap;
  