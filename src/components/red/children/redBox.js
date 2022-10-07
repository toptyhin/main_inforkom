import { Link } from "react-router-dom";

const RedBox = ( {img, text, style, margin, marginw} ) => {
  return (
    <div className="no-color flex flex-space-b" style={margin}>
      <div className="helping div"></div>
      <div className="white radius-20 red-zone-square" style={marginw}>
        <img className="red-zone-img" src={img} style={style}/>
<p>{text}</p>
      </div>

    </div>
  );
};

export default RedBox;
