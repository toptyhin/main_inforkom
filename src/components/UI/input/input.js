import { Link } from "react-router-dom";
import "./input.css"

const Input = ( {plus, name, text, textAdd} ) => {
  let style = {
    borderRadius: "7px",
    fontFamily: "myriadpro-regular",
    width: "100%",
    height: "100%",
  }
  return (
    <div className="flex" style={style}>
      <input className="field w-100" type="text" name={name} placeholder={text}/>
      <div className="" className={plus}>{textAdd}</div>
    </div>
  );
};

export default Input;
