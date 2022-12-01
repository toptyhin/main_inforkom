import { Link } from 'react-router-dom';
import './ui.css'

const DownloadButton = ( {name, color, src, children} ) => {
  let style = {};
  const download = 'download-button';
  const loadP = 'loadP'
  const p = 'download-p'
  if (color=='orange') {
    style.backgroundColor = '#ecb463'
  }
  else if (color=='purple') {
    style.backgroundColor = '#6977c9'
  }
  return (
    <button type='button' name={name} className={download} style={style}>
      <div className='flex flex-center'>
        <img className='load-icon' src={src}/>
        <div className='ml-1'>
          <p className={loadP}>Download on</p>
          <p className={p}>{children}</p>
        </div>
      </div>
    </button>
  );
};

export default DownloadButton;
