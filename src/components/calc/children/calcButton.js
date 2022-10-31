import { useState } from "react";
import "./calcButton.css"

const CalcButton = ( {id, type, onClick, dataVat, dataFtype, children, theme} ) => {
  const [isLeft, setLeft] = useState(true);
  const [isMiddle, setMiddle] = useState(false);
  const [isRight, setRight] = useState(false);
  let Class;
  if (theme == "full") {
    Class = "w-100 bttn green full-button"
  }
  if (theme == "left") {
    Class = isLeft ? "bttn-block left active" : "bttn-block left"
  }
  if (theme == "right") {
    Class = isRight ? "bttn-block right active" : "bttn-block right"
  }
  if (theme == "middle") {
    Class = isMiddle ? "bttn-block active" : "bttn-block"
  }

  return (
    <button type={type} id={id} className={Class}
      onClick={
        () => {
          if (theme == "middle") {
            setMiddle (!isMiddle);
          }
          if (theme == !"middle") {
            setMiddle (isMiddle);
          }
          if (theme == "right") {
            setRight (!isRight);
          }
          if (theme == "left") {
            setLeft (!isLeft);
          }
    }
  }>
      {children}
    </button>
  );
};

export default CalcButton;
