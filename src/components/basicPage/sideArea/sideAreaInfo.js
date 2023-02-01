import './sideArea.css'
import { v4 as uuidv4 } from "uuid";

const SideAreaInfo = ({item}) => {
  let itemArr = item.map(function(element, index) {
    return (
      <li key={uuidv4()}>
        <div className='side-area-info-block'>
          <div className='side-area-red-big'>{element[0]}</div>
          <p>{element[1]}</p>
        </div>
      </li>
    );
  });

  return (
    <div className='back-grey side-area side-area-extra'>
      <ul>{itemArr}</ul>
    </div>
  );
};

export default SideAreaInfo;
