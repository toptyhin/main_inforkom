import { useNavigate } from 'react-router-dom';

const RedBox = ( {img, href, text, style, margin, marginw} ) => {
  const navigate = useNavigate();
  return (
    <div className='no-color flex flex-space-b' style={margin} 
      onClick={() => window.open(href)}>
      <div className='helping div'></div>
      <div className='white radius-20 red-zone-square' style={marginw}>
        <img className='red-zone-img' src={img} style={style}/>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default RedBox;
