import Button from './../../UI/button'
import './sideArea.css'

const SideAreaWithButton = ({head, red, button, width}) => {
    return (
      <div className='back-grey side-area'>
          <h6>{head}</h6>
          <h6 className='side-area-red'>{red}</h6>
          <div className='flex flex-center'>
            <Button children={button} width={width}/>
          </div>
      </div>
    );
  }

  export default SideAreaWithButton;
