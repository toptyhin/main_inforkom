import { Link } from "react-router-dom";

const Button = ( props ) => {
  const text = props.children;
  const theme = props.theme;
  let style = {};
  style = {
    fontFamily: "myriadpro-regular",
    cursor: "pointer",
    fontSize: "13pt",
    height: "40px",
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
      width: "100%",
      height: "100%",
      textTransform: "uppercase",
      cursor:"pointer",
    }
  }
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
    <button type="button" style={style}>
      {text}
    </button>
  );
};

export default Button;
