import MapPoint from './children/mapPoint';
import { Map, ObjectManager, ZoomControl, SearchControl, ListBox, ListBoxItem } from '@pbe/react-yandex-maps';

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
      <SearchControl options={{ placeholderContent: "Поиск" }} />
      <ListBox data={{ content: "Фильтр по топливу" }} >
        <ListBoxItem data={{ content: "ГАЗ" }} />
        <ListBoxItem data={{ content: "ДТ" }} />
      </ListBox>
    </Map>
  );
}

export default InforkomMap;
  