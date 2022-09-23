import { Link } from "react-router-dom";

const DownloadButton = ( {name, color, src, children} ) => {
  let style = {
    borderRadius: "3vw",
    width: "15.5vw",
    height: "4vw",
    marginTop: "auto",
    marginBottom: "auto",
    color: "white",
  }
  let loadP = {
    textTransform: "uppercase",
    fontSize: "0.7vw",
    fontFamily: "montserrat-regular",
    textAlign: "left",
  }
  let p = {
    fontFamily: "montserrat-regular",
    fontSize: "1.5vw",
    textAlign: "left",
  }
  if (color=="orange") {
    style.backgroundColor = "#ecb463"
  }
  else if (color=="purple") {
    style.backgroundColor = "#6977c9"
  }
  return (
    <button type="button" name={name} style={style}>
      <div className="flex flex-center">
        <img className="load-icon" src={src}/>
        <div className="ml-1">
          <p style={loadP}>Download on</p>
          <p style={p}>{children}</p>
        </div>
      </div>
    </button>
  );
};

export default DownloadButton;
