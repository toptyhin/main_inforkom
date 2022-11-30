import { Link } from 'react-router-dom';
import './input.css'

const Input = ( {plus, name, text, textAdd, theme} ) => {
  let field_class = 'field w-100'
  if (theme=='search') {
    field_class = 'field_class field w-100'
  };

  return (
    <div className='flex input_class'>
      <input className={field_class} type='text' name={name} placeholder={text}/>
      <div className={plus}>{textAdd}</div>
    </div>
  );
};

export default Input;
