import { useReducer, useState } from 'react';
import MapSide from './map/mapSide';
import InforkomMap from './map/map';
import { YMaps } from '@pbe/react-yandex-maps';
import useStationsJSON from '../../../services/useStations';
import useProducts from '../../../services/useProducts';
import { MapContext, MapReducer, initialState } from '../reducer';
import './mapStation.css';
import { YMAP_API_KEY } from '../../../appconfig';



const MapStation = () => {
  const {geoJson, stationsLoadStatus} = useStationsJSON();
  const {products,productsLoadStatus} = useProducts();
  const [state, dispatch] = useReducer(MapReducer, initialState);
  const [mapCenter, setMapCenter] = useState([55.75, 37.57]);

  const mapMove = (coords) => {
    coords.length && setMapCenter(coords)
  }

  const stations = () => {
    if (!state.activeFilters.length) {
      return geoJson
    } else {
      return {
        type: geoJson.type,
        features: geoJson.features.filter(e => e.properties.products.length && e.properties.products.filter( p => state.activeProducts.indexOf(p) !== -1).length > 0)
      }
    }

  }

  

  return (
    <MapContext.Provider value={{dispatch, state}}>
      <YMaps query={{apikey:YMAP_API_KEY}}>
        <div style={{display:'flex',flexDirection:'row-reverse',height:'100vh', width:'100%'}}>
        <InforkomMap 
          geoJson = {stations()}
          stationsLoadStatus = {stationsLoadStatus}
          mapCenter = {mapCenter}
        />
        <MapSide
          products = {products}
          productsLoadStatus = {productsLoadStatus}
          mapMove = {mapMove}
        />
        </div>
      </YMaps>
    </MapContext.Provider>
  );
}

export default MapStation;
