import { Link } from "react-router-dom";

const MenuItem = ( {mainHref, mainName, item} ) => {


  let itemArr = item.map(function(element, index) {
       return <li><a href={element[0]}>{element[1]}</a></li>
    });

  return (
    <li className="menu-text">
      <Link to={`/map-stations/map-station`}>{mainName} &#9660;</Link>
      <ul>{itemArr}</ul>
    </li>
  );
};

export default MenuItem;
