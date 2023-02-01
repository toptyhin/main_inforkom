import Button from './../../UI/button'
import './sideArea.css'

const SideArea = ({head, children}) => {
    return (
      <div className='back-grey side-area'>
          <h6>{head}</h6>
          <h6 className='side-area-red'>{children}</h6>
          
      </div>
    );
  }

  export default SideArea;
