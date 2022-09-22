import { Link } from "react-router-dom";

const Button = ( props ) => {
  const text = props.children;
  const theme = props.theme;
  let style = {};
  style = {
    fontFamily: "myriadpro-regular",
    cursor: "pointer",
    fontSize: "1.3vw",
    height: "3vw",
    borderRadius: "7px",
    color: "white",
    cursor: "pointer",
    background: 'linear-gradient(to bottom, #76bf71, #21832e)',
  };
  if (theme=="grey") {
    style = {
      color: "grey",
      borderRadius: "7px",
      fontFamily: "myriadpro-regular",
      fontSize: "1.3vw",
      width: "17vw",
      height: "2.7vw",
      minWidth: "180px",
      minHeight: "30px",
      marginTop: "0.9vw",
      textTransform: "uppercase",
    }
  }
  if (props.width) {
    style.width = props.width;
  }
  if (props.marginTop) {
    style.marginTop = props.marginTop;
  }
  return (
    <button type="button" style={style}>
      {text}
    </button>
  );
};

export default Button;
