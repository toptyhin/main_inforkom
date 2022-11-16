import './textArea.css'
import Button from './../../UI/button'

const TextAreaList = ({children}) => {
    return (
      <div className='list-p'>
          <p className='list-point'>•</p>{children}
        </div>
    );
  }

  export default TextAreaList;
