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
import MapMenuItem from './children/mapMenu/children/mapMenuItem'
import HouseWhite  from './../../../../images/map/house-white.png'
import House       from './../../../../images/map/house.png'

const InforkomMap = () => {
  let Glass = <img src={Search}/>;
  return (
    <Map 
      defaultState={{ 
      center: [55.75, 37.57],
      zoom: 9,
      }}
      width="100%"
      height="100vh"
    >
      
      <ZoomControl options={{ float: "right" }} />
      <SearchControl options= {{ floatIndex: '5',
                                 float: "left",
                                placeholderContent: "Поиск", 
                              }} />
      
      <Button options={{ floatIndex: '4',
                         float: "left"
                      }}
              data= {{ content: "заглушка",
                    }}
              defaultState={{ selected: false }}
      />
      <ListBox  options={{ floatIndex: '3',
                           float: "left"
                          }}
                data={{ content: "Фильтр по топливу" }} >
        <ListBoxItem data={{ content: "ГАЗ" }} />
        <ListBoxItem data={{ content: "ДТ" }} />
      </ListBox>
      <Button options={{ floatIndex: '2',
                          float: "left"
                      }}
              data= {{ content: "Цвета сетей",
                    }}
              defaultState={{ selected: false }}
      />
      <RouteButton options={{ floatIndex: '1', 
                              float: "left" }} 
                   data={{ content: "Построить маршрут" }}
      />       
    </Map>
  );
}

export default InforkomMap;
  