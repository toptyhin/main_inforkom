import { Link } from "react-router-dom";

const Input = ( {plus, name, text, textAdd} ) => {
  let style = {
    borderRadius: "7px",
    fontFamily: "myriadpro-regular",
    fontSize: "1.3vw",
    width: "17vw",
    height: "2.7vw",
    minWidth: "180px",
    minHeight: "30px",
    marginTop: "0.9vw",
  }
  let field = {
    textAlign: "center",
    border: "1px solid #eaedf0",
    outlineColor: "rgba(128,128,128,0.54902)",
    color: "grey",
  }
  return (
    <div className="flex" style={style}>
      <input className="field w-100 h-100" type="text" name={name} placeholder={text}/>
      <div className="h-100 z-2 field inline-block" className={plus}>{textAdd}</div>
    </div>
  );
};

export default Input;
