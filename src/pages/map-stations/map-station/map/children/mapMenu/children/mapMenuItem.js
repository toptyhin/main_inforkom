import { useState } from 'react';

const MapMenuItem = ({children, img, whiteImg}) => {
  const [state, setState] = useState(true);
    return (
        <div className={state ? 'map-item': 'map-item chosen'} onClick={() => setState(prevState => !prevState)}>
          <div className='map-pic flex flex-center'>
            <img src={state ? img : whiteImg} />
          </div>
          <p className={state ? '': 'p-chosen'}>{children}</p>
      </div>
    );
  }

  export default MapMenuItem;
