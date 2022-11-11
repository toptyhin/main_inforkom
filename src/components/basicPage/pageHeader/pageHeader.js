import Landscape from './../../../images/pages/landscape.png'
import Blackout from './../../../images/pages/blackout.png'
import './pageHeader.css'

const PageHeader = () => {
  return (
    <div className="page">
      <img className="page-back" src={Landscape}/>
      <img className="page-blackout" src={Blackout}/>
      <h5>Заголовок</h5>
      <p>Дополнительный текст</p>
    </div>
  );
}

export default PageHeader;
