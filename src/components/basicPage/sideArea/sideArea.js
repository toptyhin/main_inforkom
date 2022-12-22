import Button from './../../UI/button'
import './sideArea.css'

const SideArea = ({head, children}) => {
    return (
      <div className='back-grey side-area'>
          <h6>{head}</h6>
          {children}
      </div>
    );
  }

  export default SideArea;
