import { useState } from 'react';
import { Link } from "react-router-dom";

const MobMenu = ( {mainName, item} ) => {
  let itemArr = item.map(function(element, index) {
      return (
        <Link to={element[0]}>
          <li className='menu-list-item'>
            {element[1]}
            <hr className='dotted'/>
          </li>
        </Link>
       )
    });

  return (
    <li className='menu-list-item-main'>
       <a>{mainName}</a>
       <div className='gor-submenu'>
         {itemArr}
       </div>
    </li>
  );
};

export default MobMenu;
