import LittleBox   from './children/littleBox'
import Regions     from './../../../images/box-regions.png'
import Gasprom     from './../../../images/box-gasprom.png'
import Tatneft     from './../../../images/box-tatneft.png'
import IntNational from './../../../images/box-international.png'
import Max         from './../../../images/box-max.png'
import Universal   from './../../../images/box-universal.png'
import Agregator   from './../../../images/box-agregator.png'
import Moscow      from './../../../images/box-moscow.png'
import Pointer     from './../../../images/pointer.png'
import './boxes.css'

const Boxes = ({header, l_tariff_img, l_tariff, b_tariff, b_tariff_img}) => {
  return (
    <div  className='main'>
      <section id='boxes'>
        <div className='left-boxes'>
          <div className='raw'>
            <LittleBox img={l_tariff_img[0]} alt={l_tariff[0].name} />
            <LittleBox img={l_tariff_img[1]} alt={l_tariff[1].name} />
            <LittleBox img={l_tariff_img[2]} alt={l_tariff[2].name} />
          </div>
          <div className='raw'>
            <LittleBox img={l_tariff_img[3]} alt={l_tariff[3].name} />
            <div className='box-note'>
              <h2 className='point tarif'>{header}
              </h2>
            </div>
          </div>
          <div className='raw'>
            <LittleBox img={l_tariff_img[4]} alt={l_tariff[4].name} />
            <LittleBox img={l_tariff_img[5]} alt={l_tariff[5].name} />
            <LittleBox img={l_tariff_img[6]} alt={l_tariff[6].name} />
          </div>
        </div>
        <div className='right-boxes'>
          <div className='big-box'>
            <img className='agr' alt={b_tariff.name} src={b_tariff_img}/>
            <p>{b_tariff.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Boxes;
