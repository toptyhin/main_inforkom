import { Link } from "react-router-dom";

const LittleBox = ( {img, alt} ) => {
  let box = {
    overflow: "hidden",
    width: "29%",
    height: "12vw",
    position: "relative",
    borderRadius: "20px",
    backgroundColor: "#eaedf0",
    cursor: "pointer",
  }
  let littleBox = {
    position: "absolute",
    marginLeft: "20%",
    marginTop: "20%",
    width: "89%",
  }
  return (
    <div style={box}>
      <img style={littleBox} alt={alt} src={img}/>
    </div>
  );
};

export default LittleBox;
