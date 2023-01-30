import Button from '../../UI/button'
import './sideArea.css'

const SideArea = ({head, children, button}) => {
    return (
      <div className='back-grey side-area'>
          <h6>{head}</h6>
          {children}
          <div className='flex flex-center'>
            <Button children={button.name} width={button.width}/>
          </div>
      </div>
    );
  }

  export default SideArea;
