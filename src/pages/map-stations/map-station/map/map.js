import MapPoint from './children/mapPoint';
import { Map, ObjectManager, ZoomControl, SearchControl, 
         ListBox, ListBoxItem, Button, RouteButton, } from '@pbe/react-yandex-maps';

import MapMenu from './children/mapMenu/mapMenu';
import Input from '../../../../components/UI/input/input';
import MapCalc from './children/mapCalc/mapCalc';
import Search from './../../../../images/map/search.png'
import Appstore from './../../../../images/map/appstore.png'
import Google from './../../../../images/map/google.png'
import ButtonC from '../../../../components/UI/button';


const InforkomMap = () => {
  let Glass = <img src={Search}/>;
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
      <SearchControl options= {{ floatIndex: '5',
                                placeholderContent: "Поиск", 
                              }} />
      

      <ListBox  options={{ floatIndex: '3'}}
                data={{ content: "Фильтр по топливу" }} >
        <ListBoxItem data={{ content: "ГАЗ" }} />
        <ListBoxItem data={{ content: "ДТ" }} />
      </ListBox>
      <Button options={{ floatIndex: '2',
                      }}
              data= {{ content: "Цвета сетей",
                    }}
              defaultState={{ selected: false }}
      />
      <RouteButton options={{ floatIndex: '1', 
                              float: "left" }} 
                   data={{ content: "Построить маршрут" }}
      />
      <div className='map-buttons'>
        <p className='map-header'>Расчет маршрута</p>
          <MapCalc />
          <p className='map-p map-p-left'>Для дельной информации свяжитесь с менеджером</p>
          <ButtonC children='Звонок' theme='map' width='200px'/>
          <div className='map-download flex flex-space-a'>
            <img src={Appstore}/>
            <img src={Google}/>
          </div>
        </div>
    </Map>
  );
}

export default InforkomMap;
  