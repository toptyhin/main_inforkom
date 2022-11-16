import Landscape from './../../../images/pages/landscape.png'
import Blackout from './../../../images/pages/blackout.png'
import './pageHeader.css'

const PageHeader = ({head, children}) => {
  return (
    <div className='page'>
      <img className='page-back' src={Landscape}/>
      <img className='page-blackout' src={Blackout}/>
      <h5>{head}</h5>
      <p>{children}</p>
    </div>
  );
}

export default PageHeader;
