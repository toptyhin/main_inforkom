import { Link } from 'react-router-dom';
import './ui.css'

const FormSelect = ( {value, text} ) => {
  const class_select = 'select';
  return (
    <select className={class_select} >
      <option value={value[0]}>{text[0]}</option>
      <option value={value[1]}>{text[1]}</option>
      <option value={value[2]}>{text[2]}</option>
    </select>
  );
};

export default FormSelect;
