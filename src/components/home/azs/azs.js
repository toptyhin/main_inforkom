import Button     from './../../../components/UI/button'
import GasBash    from './../../../images/gas-bashneft.png'
import GasGasprom from './../../../images/gas-gasprom.png'
import GasTat     from './../../../images/gas-tatneft.png'
import GasLukoil  from './../../../images/gas-lukoil.png'
import gasprom    from './../../../images/logos-green/m-logo-gasprom.png'
import nm         from './../../../images/logos-green/m-logo-nm.png'
import lukoil     from './../../../images/logos-green/m-logo-lukoil.png'
import rosneft    from './../../../images/logos-green/m-logo-rosneft.png'
import bashneft   from './../../../images/logos-green/m-logo-bashneft.png'
import surgut     from './../../../images/logos-green/m-logo-surgut.png'
import tatneft    from './../../../images/logos-green/m-logo-tatneft.png'
import ptk        from './../../../images/logos-green/m-logo-ptk.png'
import tes        from './../../../images/logos-green/m-logo-tes.png'
import './azs.css'

const Azs = ({azs, button, img, logos}) => {
  return (
    <div className='back-grey w-100'>
      <div className='main'>
        <section id='azs' className='w-100'>
          <div className='flex azs-wrap flex-space-b'>
            <div>
              <div className='azs-head'>
                <h2>{azs.header}</h2>
                <p className='azs-p'>{azs.text}</p>
              </div>
              <div className='azs-button1'>
                <Button type={button.type} width={button.width} marginTop={button.marginTop} 
                        children={button.name} href={button.href} />
              </div>
            </div>
            <div>
              <div>
                <p className='green-p'>{azs.colored_header}</p>
              </div>
              <div className='flex azs-pics'>
                <img className='azs-pic' src={img[0]} alt=''/>
                <img className='azs-pic' src={img[1]} alt=''/>
                <img className='azs-pic' src={img[2]} alt=''/>
                <img className='azs-pic' src={img[3]} alt=''/>
              </div>
            </div>
          </div>
          <div className='logos-change'>
            <div className='logos-bottom'>
              <img src={logos[0]} alt=''/>
              <img src={logos[1]} alt=''/>
              <img src={logos[2]} alt=''/>
              <img src={logos[3]} alt=''/>
              <img src={logos[4]} alt=''/>
              <img src={logos[5]} alt=''/>
              <img src={logos[6]} alt=''/>
              <img src={logos[7]} alt=''/>
              <img src={logos[8]} alt=''/>
            </div>
            <div className='azs-button2'>
            <Button type={button.type} width={button.width}marginTop={button.marginTop} 
                    children={button.name} href={button.href} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Azs;
