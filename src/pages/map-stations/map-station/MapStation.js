import { useReducer } from 'react';
import MapSide from './map/mapSide';
import InforkomMap from './map/map';
import { YMaps } from '@pbe/react-yandex-maps';
import useStationsJSON from '../../../services/useStations';
import useProducts from '../../../services/useProducts';
import { MapContext, MapReducer, initialState } from '../reducer';
import './mapStation.css';



const MapStation = () => {
  const {geoJson, stationsLoadStatus} = useStationsJSON();
  const {products,productsLoadStatus} = useProducts();
  const [state, dispatch] = useReducer(MapReducer, initialState);

  return (
    <MapContext.Provider value={{dispatch, state}}>
      <YMaps>
        <InforkomMap 
          geoJson = {geoJson}
          stationsLoadStatus = {stationsLoadStatus}
        />
        <MapSide
          products = {products}
          productsLoadStatus = {productsLoadStatus}      
        />
      </YMaps>
    </MapContext.Provider>
  );
}

export default MapStation;
