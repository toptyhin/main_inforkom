import { Link } from "react-router-dom";

const Button = ( props ) => {
  const text = props.children;
  let style = {
    fontFamily: "myriadpro-regular",
    cursor: "pointer",
    fontSize: "1.3vw",
    height: "3vw",
    borderRadius: "7px",
    color: "white",
    cursor: "pointer",
    background: 'linear-gradient(to bottom, #76bf71, #21832e)',
  };
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
