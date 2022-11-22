import { useState } from 'react';

const MobMenu = ( {mainHref, mainName, item} ) => {
  let itemArr = item.map(function(element, index) {
       return <li className='menu-list-item'>
                <a>{element}</a>
                <div className='gor-submenu'>
                  <a>1</a>
                </div>
                <hr className='dotted'/>
              </li>
    });

  return (
    <li className='gor-menu-text'>
    <ul className='menu-list flex'>
      {itemArr}
    </ul>
      <p>{mainName}</p>

    </li>
  );
};

export default MobMenu;
