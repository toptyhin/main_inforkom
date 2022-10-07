import { Link } from "react-router-dom";
import "./calcButton.css"

const CalcButton = ( {id, type, onclick, dataVat, dataFtype, children, theme} ) => {
  let Class;
  if (theme == "full") {
    Class = "w-100 bttn green full-button"
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

  return (
    <button type={type} id={id} className={Class}
      onclick={onclick}>
      {children}
    </button>
  );
};

export default CalcButton;
