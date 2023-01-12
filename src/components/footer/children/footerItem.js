import { Link } from "react-router-dom";

const FooterItem = ( {item} ) => {
  let itemArr = item.map(function(element, index) {
    return (
      <li key={element[1]}>
        <Link to={element[0]}>&#8250; {element[1]}</Link>
        <hr/>
      </li>
    );
  });

  return (
    <ul>{itemArr}</ul>
  );
};

export default FooterItem;
