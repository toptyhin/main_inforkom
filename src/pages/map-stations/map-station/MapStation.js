import MapSide from './map/mapSide';
import InforkomMap from './map/map';
import { YMaps } from '@pbe/react-yandex-maps';
import useStationsJSON from '../../../services/useStations';
import useProducts from '../../../services/useProducts';
import './mapStation.css';

const MapStation = () => {
  const {geoJson, stationsLoadStatus} = useStationsJSON();
  const {products,productsLoadStatus} = useProducts();

    return (
      <YMaps>
      
        
        <InforkomMap 
          geoJson = {geoJson}
          stationsLoadStatus = {stationsLoadStatus}
          products = {products}
          productsLoadStatus = {productsLoadStatus}
        />
        <MapSide/>
      </YMaps>
    );
  }

  export default MapStation;
