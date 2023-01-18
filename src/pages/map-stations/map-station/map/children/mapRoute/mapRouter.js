import Draggable from 'react-draggable';


const MapRouter = () => {
    console.log('render map router');
    return <Draggable>
               <div style={{
                    position:'absolute',
                    padding: 30,
                    background: '#ccc',
                    width: 100,
                    cursor: 'move'
                    }}>Router</div>

           </Draggable>
}

export default MapRouter;