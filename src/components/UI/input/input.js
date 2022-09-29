import { Link } from "react-router-dom";

const Input = ( {plus, width, height, mt, name, text, textAdd} ) => {
  let style = {
    borderRadius: "7px",
    fontFamily: "myriadpro-regular",
    fontSize: "1.3vw",
    minWidth: "180px",
    minHeight: "30px",
  }
  if (width) {
    style.width = width;
  }
  if (height) {
    style.height = height;
  }
  if (mt) {
    style.marginTop = mt;
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
      <div className="" className={plus}>{textAdd}</div>
    </div>
  );
};

export default Input;
