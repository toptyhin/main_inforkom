import { Link } from 'react-router-dom';
import './ui.css'

const FormSelect = ( {value, text} ) => {
  const class_select = 'select';
  return (
    <select className={class_select} >
      <option value={value[0]}>{text[0]}</option>
    </select>
  );
};

export default FormSelect;
