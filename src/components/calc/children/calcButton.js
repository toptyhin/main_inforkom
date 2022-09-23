import { Link } from "react-router-dom";
import "./calcButton.css"

const CalcButton = ( {id, onclick, dataVat, dataFtype, children, theme} ) => {
  let Class;
  if (theme == "full") {
    Class = "w-100 bttn green"
  }
  if (theme == "left") {
    Class = "bttn-block left active"
  }
  if (theme == "right") {
    Class = "bttn-block right"
  }
  if (theme == "middle") {
    Class = "bttn-block"
  }

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

  return (
    <button type="button" id={id} className={Class}
      onclick={onclick}>
      {children}
    </button>
  );
};

export default CalcButton;
