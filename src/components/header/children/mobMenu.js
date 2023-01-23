import { useState } from 'react';
import { Link } from "react-router-dom";
import ClickAwayListener from 'react-click-away-listener';

const MobMenu = ( {mainName, item, setPopup} ) => {
  let item_fix;
  if (item===undefined) {
    item_fix = [[`test`,'test']];
  } else {
    item_fix = item;
  }
  const [submenu, setSubmenu] = useState(false);
  const style1 = {
    height: '0px',
    transitionProperty: 'height',
    transitionDuration: '1s',
    overflow:'hidden',
  }
  const style2 = {
    transitionProperty: 'height',
    transitionDuration: '1s',
    overflow:'hidden',
  }
  const count = item_fix.length * 37.4;
  style2.height = count;
  const itemArr = item_fix.map(function(element, index) {
    return (
      <ul key={element[1]} className='menu-list-item' onClick={() => {setPopup(false)}}>
        <Link to={element[0]}>
          {element[1]}
        </Link>
      </ul>
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