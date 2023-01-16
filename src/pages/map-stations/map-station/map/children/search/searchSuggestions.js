import { useYMaps } from "@pbe/react-yandex-maps";
import InputSuggest from "../../../../../../components/UI/input/inputSuggest";


const GeoSearchSuggestions = (props) => {

  const centerToPosition = (coords) => {
    props.mapMove(coords);
  };

  const ymaps = useYMaps(['suggest','geocode']);

  const model = async (query) => {
        console.log('query in model', query, ymaps.suggest)
        if (ymaps) {
            const GeoRequest = await ymaps.suggest(query);
            let list = [];
            GeoRequest.map((e,i)=> {
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
            // console.log(GeoRequest);
            console.log(GeoRequest.geoObjects.get(0));
            const coords = GeoRequest.GeoObjectCollection.metaDataProperty.GeocoderResponseMetaData.Point.coordinates
            centerToPosition(coords.reverse());
        }
    }

    return <InputSuggest
        placeholder={'Поиск'}
        model={model}
        callback={GeocodeSelected}
    />
};




export default GeoSearchSuggestions