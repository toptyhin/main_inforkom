import { useState } from 'react';
import { Link } from "react-router-dom";
import ClickAwayListener from 'react-click-away-listener';

const MobMenu = ( {mainName, item, setPopup} ) => {
  const [submenu, setSubmenu] = useState(false);
  let style1 = {
    height: '0px',
    transitionProperty: 'height',
    transitionDuration: '1s',
    overflow:'hidden',
  }
  let style2 = {
    transitionProperty: 'height',
    transitionDuration: '1s',
    overflow:'hidden',
  }
  const count = item.length * 37.4;
  style2.height = count;
  let itemArr = item.map(function(element, index) {
    return (
      <li className='menu-list-item' onClick={() => {setPopup(false)}}>
        <Link to={element[0]}>
          {element[1]}
        </Link>
      </li>
    )
  });

  return (
    <ClickAwayListener onClickAway={() => {setSubmenu(false)}}>
      <li className={submenu ? 'menu-list-item-main mob-menu-a' : 'mob-menu-a'}
          onTouchEnd={() => setSubmenu(true)} onClick={() => setSubmenu(true)}>
        <div>
          <a>{mainName}</a>
        </div>
        <div style={submenu ? style2 : style1}>
          {itemArr}
        </div>
        <hr className='dotted'/>
      </li>
    </ClickAwayListener>
  );
};

export default MobMenu;
