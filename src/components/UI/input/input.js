import { Link } from 'react-router-dom';
import './input.css'

const Input = ( {plus, name, text, textAdd, theme} ) => {
  let inputStyle = {};
  let style = {
    borderRadius: '7px',
    fontFamily: 'myriadpro-regular',
    width: '100%',
    height: '100%',
  };
  if (theme=='search') {
    inputStyle = {
      borderRadius: '20px',
      backgroundColor: 'rgb(234, 237, 240)',
      textAlign:'left',
      paddingLeft: '54px',
      fontSize: '16px',
   }
    };
  return (
    <div className='flex' style={style}>
      <input style={inputStyle} className='field w-100' type='text' name={name} placeholder={text}/>
      <div className={plus}>{textAdd}</div>
    </div>
  );
};

export default Input;
