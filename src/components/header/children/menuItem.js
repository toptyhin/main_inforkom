import { Link } from "react-router-dom";

const MenuItem = ( {mainHref, mainName, item} ) => {


  let itemArr = item.map(function(element, index) {
       return <li><a href={element[0]}>{element[1]}</a></li>
    });

  return (
    <li className="menu-text"><a href="">{mainName} &#9660;</a>
      <ul>{itemArr}</ul>
    </li>
  );
};

export default MenuItem;
