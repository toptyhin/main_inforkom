import './textArea.css'
import Button from './../../UI/button'

const TextAreaText = ({theme, children}) => {
  let className = 'text-area-p';
  if (theme=='first') {
    className = 'text-area-p-first'
  }
  if (theme=='middle') {
    className = 'text-area-p-middle'
  }
  if (theme=='last') {
    className = 'text-area-p-last'
  }
    return (
      <p className={className}>{children}</p>

    );
  }

  export default TextAreaText;
