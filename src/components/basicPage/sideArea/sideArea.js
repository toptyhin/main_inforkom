import Button from './../../UI/button'
import './sideArea.css'

const SideArea = ({head, red, text}) => {
    return (
      <div className='back-grey side-area'>
          <h6>{head}</h6>
          <p>{text}</p>
          <h6 className='side-area-red'>{red}</h6>
      </div>
    );
  }

  export default SideArea;
