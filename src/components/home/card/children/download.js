import DownloadButton   from './../../../../components/UI/downloadButton'

const Download = ( {name, color, src, children, qr, href} ) => {
  return (
    <div className='ml-1 flex-col mt-3'>
      <div>
        <DownloadButton name={name} color={color} src={src} children={children} href={href}/>
      </div>
      <div className='flex flex-center'>
        <img className='qr' alt='' src={qr}/>
      </div>
    </div>
  );
};

export default Download;
