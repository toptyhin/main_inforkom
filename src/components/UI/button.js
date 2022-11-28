import { Link } from 'react-router-dom';

const Button = ( props ) => {
  const text = props.children;
  const theme = props.theme;
  const type = props.type;
  let style = {};
  style = {
    fontFamily: 'myriadpro-regular',
    cursor: 'pointer',
    fontSize: '13pt',
    height: '40px',
    borderRadius: '7px',
    color: 'white',
    cursor: 'pointer',
    background: 'linear-gradient(to bottom, #76bf71, #21832e)',
  };
  if (theme=='unactive') {
    style.color = 'grey';
    style.background='#f0f0f0';
  }
  if (theme=='calc') {
    style = {
      width: '100%',
      height: '5vw',
      color: 'white',
      fontSize: '2vw',
      borderRadius: '1.3vw',
      marginTop: '6vw',
      fontFamily: 'myriadpro-regular',
      backgroundColor: '#73aa37',
      textTransform: 'uppercase',
      cursor:'pointer',
    }
  };
  if (theme=='map') {
    style = {
      height: '54px',
      color: 'white',
      fontSize: '16px',
      borderRadius: 0,
      fontFamily: 'montserrat-regular',
      backgroundColor: '#d27a33',
      textTransform: 'uppercase',
      cursor:'pointer',
    }
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
    <button type={type} style={style}>
      {text}
    </button>
  );
};

export default Button;
