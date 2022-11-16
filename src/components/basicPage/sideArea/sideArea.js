import Button from './../../UI/button'
import './sideArea.css'

const SideArea = ({head, red, button}) => {
    return (
      <div className='back-grey side-area'>
          <h6>{head}</h6>
          <h6 className='side-area-red'>{red}</h6>
          <div className='flex flex-center'>
          </div>
      </div>
    );
  }

  export default SideArea;