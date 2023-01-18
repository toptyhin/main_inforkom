import { createRef } from 'react';
import { Map, 
          ObjectManager, 
          ZoomControl, 
          // SearchControl, 
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
  
  const {geoJson,stationsLoadStatus,mapCenter} = props;


  const Glass = <img src={Search}/>;

  const LoadingSpinner = () => stationsLoadStatus ? <div className='spinner'></div> : <></>;
  
  const OMref = createRef();
  


  const baloonProducts = (products) => {
    let list = '<table style="width: 100%;text-align: left;line-height: 1.4;">'
    + '<tbody>'
    + '<tr class="head" style="font-weight: 500;color: rgba(0,0,0,0.54);">'
    + '<td>Тип топлива</td>'
    + '<td>Розн. цена</td>'
    + '<td>Действ. с</td>'
    + '</tr>';

    Object.keys(products).forEach((key) => {
        if (products.hasOwnProperty(key)) {
            list += '<tr>'
            +'<td>' + products[key].PRODUCT + '</td>'
            +'<td>' + products[key].PRICENAL + '  ' + products[key].CURRENCY + '</td>'
            +'<td>' + products[key].PRICEDATE + '</td>'
            +'</tr>'        
        }
    });    

    list += '</tbody></table>';
    return list;
} 

  const markerClick = async (e) => {
    
    if (OMref.current) {
        const objectId = e.get('objectId');
        const obj = OMref.current.objects.getById(objectId);
        if (obj) {
          const fsPriceRequest = await fetch('https://data.inforkom.ru/api/v1/base/prices?sid=' + obj.properties.id)
          const fsPriceList = await fsPriceRequest.json();
          const logo = obj.properties.logo ? `<img style="max-height:70px;position:absolute;right:10%;top:0;" src="${obj.properties.logo}">` : '';
          const products = baloonProducts(fsPriceList)
          obj.properties.balloonContentBody = `<div style="position:relative"><div class="map-point"><div class="point-field"><div class="point-red"><p>20 км</p></div>${logo}<p>${obj.properties.name}</p>${products}</div><div><p class="address-p">${obj.properties.region} ${obj.properties.address} ${obj.properties.position}</p></div><div class="flex flex-center"><div class="tail"></div></div></div></div>`;
          OMref.current.objects.balloon.open(objectId)
        }
    }
  }


  return (
    <Map 
      state={{ 
        center: mapCenter,
        zoom: 9,
      }}
      width="75%"
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
      {/* <SearchControl options= {{ floatIndex: '5', float: "left", placeholderContent: "Поиск",}} /> */}

      {/* <Button options={{ floatIndex: '4', float: "left" }}
              data= {{ content: "заглушка" }}
              defaultState={{ selected: false }}
      /> */}
      {/* <ListBox  options={{ floatIndex: '3', float: "left" }}
                data={{ content: "Фильтр по топливу" }} >
        <ListBoxItem data={{ content: "ГАЗ" }} />
        <ListBoxItem data={{ content: "ДТ" }} />
      </ListBox> */}
      {/* <Button options={{ floatIndex: '2', float: "left" }}
              data= {{ content: "Цвета сетей" }}
              defaultState={{ selected: false }}
      />
      <RouteButton options={{ floatIndex: '1', float: "left" }} 
                   data={{ content: "Построить маршрут" }}
      /> */}
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
