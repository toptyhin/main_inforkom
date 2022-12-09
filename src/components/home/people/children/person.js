import { Link } from 'react-router-dom';
import PersonBack from './../images/person-back.png'
import './../people.css'

const Person = ( {img, extra, children} ) => {
  let clName;
  if (extra) {
    clName = 'people-block pi'
  } else {
    clName = 'people-block'
  }
  return (
    <div className={clName}>
      <div className='people-back'>
        <p>{children}</p>
      </div>
      <img className='people' alt='' src={img}/>
    </div>
  );
};

export default Person;