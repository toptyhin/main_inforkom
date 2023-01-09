import { Link } from 'react-router-dom';
import './ui.css'

const Button = ( props ) => {
  const text = props.children;
  const theme = props.theme;
  const type = props.type;
  let style = {};
  let button;
  button = 'button';
  if (theme==='unactive') {
    button = 'button unactive';
  }
  if (theme==='calc') {
    button = 'calc-button';
    style.height = '5vw';
  };
  if (theme==='map-1') {
    button = 'map-button-1';
    style.height = '54px';
  };
  if (theme==='map-2') {
    button = 'map-button-2';
    style.height = '54px';
  };
  if (props.width) {
    style.width = props.width;
  }
  if (props.height) {
    style.height = props.height;
  }
  if (props.marginTop) {
    style.marginTop = props.marginTop;
  }
  return (
    <button type={type} className={button} style={style}>
      {text}
    </button>
  );
};

export default Button;
