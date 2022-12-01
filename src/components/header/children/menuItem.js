import { Link } from "react-router-dom";

const MenuItem = ( {mainName, item} ) => {
  let itemArr = item.map(function(element, index) {
    return (
      <Link to={element[0]}>
        <li className='menu-list-item-big'>
          {element[1]}
          <hr className='dotted'/>
        </li>
      </Link>
    )
  });

  return (
    <li className='menu-text'>
      <div className='menu-decor-block'>
        <div className='menu-decor'></div>
      </div>
      <p>{mainName} &#9660;</p>
      <ul className='menu-list-big'>
        {itemArr}
      </ul>
    </li>
  );
};

export default MenuItem;
