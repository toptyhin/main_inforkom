import { Link } from "react-router-dom";

const DownloadButton = ( {name, color, src, children} ) => {
  let style = {
    borderRadius: "30px",
    width: "224px",
    height: "57px",
    marginTop: "auto",
    marginBottom: "auto",
    color: "white",
  }
  let loadP = {
    textTransform: "uppercase",
    fontSize: "10px",
    fontFamily: "montserrat-regular",
    textAlign: "left",
  }
  let p = {
    fontFamily: "montserrat-regular",
    fontSize: "22px",
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
