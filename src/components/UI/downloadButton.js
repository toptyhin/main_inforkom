
import './ui.css'

const DownloadButton = ( {name, href, color, src, children} ) => {
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
    <div onClick={() => window.open(href)} 
      name={name} className={download} style={style}>
      <div className='flex flex-center'>
        <img className='load-icon' src={src}/>
        <div className='ml-1'>
          <p className={loadP}>Download on</p>
          <p className={p}>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default DownloadButton;
