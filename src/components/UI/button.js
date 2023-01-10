import { useNavigate } from 'react-router-dom';
import './ui.css'

const Button = ( {children, theme, type, href, width, height, marginTop} ) => {
  const navigate = useNavigate();
  let style = {};
  let button;
  button = 'button';
  if (theme==='unactive') {
    button = 'button unactive';
  }
  if (theme==='calc') {
    button = 'calc-button';
  };
  if (theme==='map-1') {
    button = 'map-button-1';
    style.height = '54px';
  };
  if (theme==='map-2') {
    button = 'map-button-2';
  }
  if (width) {
    style.width = width;
  }
  if (height) {
    style.height = height;
  }
  if (marginTop) {
    style.marginTop = marginTop;
  }
  return (
    <button type={type} className={button} style={style} onClick={() => navigate(href)}>
      {children}
    </button>
  );
};

export default Button;
