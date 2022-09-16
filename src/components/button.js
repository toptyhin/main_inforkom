import { Link } from "react-router-dom";


const Button = ( { children, bttnWidth }) => {
    return (
    <button
      type="button"
      style={{
               cursor: "pointer",
               fontSize: "1.3vw",
               height: "3vw",
               borderRadius: "7px",
               color: "white",
               cursor: "pointer",
               background: 'linear-gradient(to bottom, #76bf71, #21832e)',
               width: bttnWidth,
            }}
    >
      {children}
    </button>

  );
};

export default Button;
