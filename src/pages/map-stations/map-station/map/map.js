import { createRef } from 'react';
import { Map, ObjectManager, ZoomControl, SearchControl, 
         ListBox, ListBoxItem, Button, RouteButton, } from '@pbe/react-yandex-maps';
import MapMenu from './children/mapMenu/mapMenu';
import Input from '../../../../components/UI/input/input';
import MapCalc from './children/mapCalc/mapCalc';
import Search from './../../../../images/map/search.png'
import Appstore from './../../../../images/map/appstore.png'
import Google from './../../../../images/map/google.png'
import ButtonC from '../../../../components/UI/button';
import MapMenuItem from './children/mapMenu/children/mapMenuItem'
import HouseWhite  from './../../../../images/map/house-white.png'
import House       from './../../../../images/map/house.png'

const InforkomMap = props => {
  
  const {geoJson,stationsLoadStatus} = props;

  const Glass = <img src={Search}/>;

  const LoadingSpinner = () => stationsLoadStatus ? <div className='spinner'></div> : <></>;
  
  const OMref = createRef();

  const markerClick = (e) => {
    if (OMref.current) {
        const objectId = e.get('objectId');
        const obj = OMref.current.objects.getById(objectId);
        if (obj) {
          console.log(obj.properties);
          const logo = obj.properties.logo ? `<img style="max-height:70px;position:absolute;right:10%;top:0;" src="${obj.properties.logo}">` : '';
          const services = 'services: ' + obj.properties.infra.join(':');
          const products = 'products: ' + obj.properties.products.join(':');
          obj.properties.balloonContentBody = `<div style="position:relative"><div class="map-point"><div class="point-field"><div class="point-red"><p>20 км</p></div>${logo}<p>${obj.properties.name}</p><p class="point-p-extra">${services}</p><p class="point-p-extra">${products}</p></div><div><p class="address-p">${obj.properties.region} ${obj.properties.address} ${obj.properties.position}</p></div><div class="flex flex-center"><div class="tail"></div></div></div></div>`;
          OMref.current.objects.balloon.open(objectId)
        }
    }
  }


  return (
    <Map 
      defaultState={{ 
        center: [55.75, 37.57],
        zoom: 9,
      }}
      width="100%"
      height="100vh"
    >

    <LoadingSpinner/>
    
    <ObjectManager
      instanceRef = {OMref}

      options={{
        clusterize: true,
        gridSize: 50,
      }}

      objects={{
        openBalloonOnClick: true,
        preset: "islands#greenDotIcon",
      }}

      clusters={{
        preset: "islands#orangeClusterIcons",
      }}
      // filter={(object) => object.id % 2 === 0}

      features={geoJson}

      modules={[
        "objectManager.addon.objectsBalloon",
        "objectManager.addon.objectsHint",
      ]}
      onClick={markerClick}
    />




      <ZoomControl options={{ float: "right" }} />
      <SearchControl options= {{ floatIndex: '5', float: "left", placeholderContent: "Поиск",}} />

      <Button options={{ floatIndex: '4', float: "left" }}
              data= {{ content: "заглушка" }}
              defaultState={{ selected: false }}
      />
      <ListBox  options={{ floatIndex: '3', float: "left" }}
                data={{ content: "Фильтр по топливу" }} >
        <ListBoxItem data={{ content: "ГАЗ" }} />
        <ListBoxItem data={{ content: "ДТ" }} />
      </ListBox>
      <Button options={{ floatIndex: '2', float: "left" }}
              data= {{ content: "Цвета сетей" }}
              defaultState={{ selected: false }}
      />
      <RouteButton options={{ floatIndex: '1', float: "left" }} 
                   data={{ content: "Построить маршрут" }}
      />
      {/* <div className='map-buttons'>
        <p className='map-header'>Расчет маршрута</p>
          <MapCalc />
          <p className='map-p map-p-left'>Для дельной информации свяжитесь с менеджером</p>
          <ButtonC children='Звонок' theme='map' width='200px'/>
          <div className='map-download flex flex-space-a'>
            <img src={Appstore}/>
            <img src={Google}/>
          </div>
        </div> */}
    </Map>
  );
}

export default InforkomMap;
