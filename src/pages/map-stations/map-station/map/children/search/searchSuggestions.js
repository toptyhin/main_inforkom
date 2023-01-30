import { useYMaps } from "@pbe/react-yandex-maps";
import InputSuggest from "../../../../../../components/UI/input/inputSuggest";


const GeoSearchSuggestions = ({onSelect,icon}) => {

//   const centerToPosition = (coords) => {
//     props.mapMove && props.mapMove(coords);
//   };

  const ymaps = useYMaps(['suggest','geocode']);


  const model = async (query) => {
        if (ymaps) {
            const GeoRequest = await ymaps.suggest(query);
            let list = [];
            GeoRequest.map((e,i)=> {
                console.log(e);
                list.push({id:i,title:e.displayName,description:e.value})
            });
            return list;
        } else {
            return [];
        }
    }

    const GeocodeSelected = async (value) => {
        console.log('selected variant', value);
        if (ymaps) {
            const GeoRequest = await ymaps.geocode(value,{json:true});
            const coords = GeoRequest.GeoObjectCollection.metaDataProperty.GeocoderResponseMetaData.Point.coordinates
            onSelect(coords.reverse(),value);
        }
    }

    return <InputSuggest
        placeholder={'Поиск'}
        model={model}
        callback={GeocodeSelected}
        icon={icon}
    />
};




export default GeoSearchSuggestions