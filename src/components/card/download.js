import { Link } from "react-router-dom";
import DownloadButton   from './../../components/downloadButton'

const Download = ( {name, color, src, children, qr} ) => {

  return (
    <div className="ml-1 flex-col">
      <div>
      <DownloadButton name={name} color={color} src={src} children={children}/>
      </div>
      <div className="flex flex-center">
        <img className="qr" src={qr}/>
      </div>
    </div>
  );
};

export default Download;
