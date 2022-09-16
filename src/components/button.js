import { Link } from "react-router-dom";


const Button = ( { children }) => {
    return (
    <button
      type="button"
      let style={{
               cursor: "pointer",
               fontSize: "1.3vw",
               height: "3vw",
               borderRadius: "7px",
               color: "white",
               cursor: "pointer",
               background: 'linear-gradient(to bottom, #76bf71, #21832e)',
            }}
    >
      {children}
    </button>

  );
};

export default Button;
