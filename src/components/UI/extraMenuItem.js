import { Link } from 'react-router-dom';

const ExtraMenuItem = ( {item} ) => {
  let itemArr = item.map(function(element, index) {
       return <li>
                <Link to={element[0]}> {element[1]}</Link>
                <hr/>
              </li>
    });

  return (
      <ul>{itemArr}</ul>
  );
};

export default ExtraMenuItem;
