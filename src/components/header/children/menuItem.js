import { Link } from "react-router-dom";

const MenuItem = ( {mainHref, mainName, item} ) => {
  let style = {marginTop: "2.6vw"}

  let itemArr = item.map(function(element, index) {
       return <li><a href={element[0]}>{element[1]}</a></li>
    });
    
  return (
    <li style={style}><a href="">{mainName}</a>
      <ul>{itemArr}</ul>
    </li>
  );
};

export default MenuItem;
