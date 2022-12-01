import './textArea.css'
import Button from './../../UI/button'

const TextAreaSpecial = ({children}) => {
  return (
    <div className='flex'>
      <div className='v-line-page'></div>
      <p className='special-p'>{children}</p>
    </div>
  );
}

export default TextAreaSpecial;
