import { useNavigate } from 'react-router-dom';
import './../people.css'

const Person = ( {img, extra, href, children} ) => {
  const navigate = useNavigate();
  let clName;
  if (extra) {
    clName = 'people-block pi'
  } else {
    clName = 'people-block'
  }
  return (
    <div className={clName} onClick={() => navigate(href)}>
      <div className='people-back'>
        <p>{children}</p>
      </div>
      <img className='people' alt='' src={img}/>
    </div>
  );
};

export default Person;
