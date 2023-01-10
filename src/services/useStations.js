import { useState, useEffect } from 'react';

const useStationsJSON = () =>{

    const [geoJson, setGeoJson] = useState([]);
    const [stationsLoadStatus, setStatus] = useState(false);

    const getStations = async () => {
        let fsRequest,geoStations;
        try {
            fsRequest = await fetch('https://data.inforkom.ru/api/v1/Base/Stations?data[all]&format=geojson&yandex=true');
        } catch (err) {
            console.log('netw err',err)
            setStatus(false);
        }

        try {
            geoStations = await fsRequest.json(); 
        } catch (err) {
            console.log('json data err',err)
            setStatus(false);
        }

        if (geoStations.features.length) {
            geoStations.features = geoStations.features.map((e)=>{
                e.id = e.properties.id
                return e;
            }); 

            setGeoJson(geoStations);           
            setStatus(false);
        } else {
            setStatus(false);
        }
    }


    useEffect(()=>{
        if (!geoJson.features) {
            setStatus(true);
            getStations();
        }
    },[geoJson]);

    return {geoJson,stationsLoadStatus}
};

export default useStationsJSON