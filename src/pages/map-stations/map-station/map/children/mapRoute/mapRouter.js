import Draggable from 'react-draggable';
import GeoSearchSuggestions from '../search/searchSuggestions';
import { useContext } from 'react';
import { MapContext } from '../../../../reducer';

const QueryForm = () => {
    const {state, dispatch} = useContext(MapContext);
    
    const dispatcher = (point) => {
        dispatch({
            type: 'SET_ROUTE',
            payload: point
        })        
    };
    return (
        <div style={{cursor:'auto'}}>
            <GeoSearchSuggestions icon={"auto"} onSelect={(coords,name)=>dispatcher({step:1,coords:coords,name:name})}/>
            <GeoSearchSuggestions onSelect={(coords,name)=>dispatcher({step:2,coords:coords,name:name})}/>
        </div>
    )
}

const MapRouter = ({parent}) => {
    console.log('render map router', parent);
    const left = parent.current ?  parent.current.getBoundingClientRect().right : 100;
    const top = parent.current ?  parent.current.getBoundingClientRect().top : 100;
    return <Draggable>
               <div style={{
                    position:'absolute',
                    left:left,
                    top:top,
                    padding: 30,
                    background: '#d27a33',
                    cursor: 'move'
                    }}>
                        <QueryForm />
                    </div>

           </Draggable>
}

export default MapRouter;