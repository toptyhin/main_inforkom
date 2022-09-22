import { Link } from "react-router-dom";

const FormSelect = ( {value, text} ) => {
  let style = {
    paddingLeft: "1.2vw",
    textAlign: "center",
    border: "1px solid #eaedf0",
    outlineColor: "rgba(128,128,128,0.54902)",
    color: "grey",
    borderRadius: "7px",
    fontFamily: "myriadpro-regular",
    fontSize: "1.3vw",
    width: "17vw",
    height: "2.7vw",
    minWidth: "180px",
    minHeight: "30px",
    marginTop: "0.9vw",
  }
  return (
    <select className="back-grey" style={style}>
      <option value={value[0]}>{text[0]}</option>
      <option value={value[1]}>{text[1]}</option>
      <option value={value[2]}>{text[2]}</option>
    </select>
  );
};

export default FormSelect;
