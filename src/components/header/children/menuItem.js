import { Link } from "react-router-dom";

const MenuItem = ( {mainHref, mainName, item} ) => {


  let itemArr = item.map(function(element, index) {
       return <li><Link to={element[0]}>{element[1]}</Link></li>
    });

  return (
    <li className="menu-text">
      <Link to={item[0][0]}>{mainName} &#9660;</Link>
      <ul>{itemArr}</ul>
    </li>
  );
};

export default MenuItem;
