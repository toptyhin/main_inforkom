import './sideArea.css'

const SideAreaSquares = ({item}) => {
  let itemArr = item.map(function(element, index) {
       return <li>
                <div className='side-area-info-block'>
                  <img src={element}/>
                </div>
              </li>
    });

  return (
    <div className='back-grey side-area side-area-extra'>

        <ul>{itemArr}</ul>

    </div>
  );
};

  export default SideAreaSquares;
