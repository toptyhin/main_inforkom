import { useState } from 'react';

const MapMenuItem = ({children, img, whiteImg, handler}) => {
  
  const [state, setState] = useState(true);
  
  const clickHandle = () => {
    handler(state);
    setState(state => !state)
  }

    return (
        <div className={state ? 'map-item': 'map-item chosen'} onClick={clickHandle}>
          <div className='map-pic flex flex-center'>
            <img src={state ? img : whiteImg} />
          </div>
          <p className={state ? '': 'p-chosen'}>{children}</p>
      </div>
    );
  }

  export default MapMenuItem;
