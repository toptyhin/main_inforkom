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

const Azs = () => {
  return (
    <div className='back-grey w-100'>
      <div className='main'>
        <section id='azs' className='w-100'>
          <div className='flex azs-wrap flex-space-b'>
            <div>
              <div className='azs-head'>
                <h2>Сеть АЗС Инфорком</h2>
                <p className='azs-p'>по единой карте Инфорком по всей территории РФ.</p>
              </div>
              <div className='azs-button1'>
                <Button type='button' width='222px' marginTop='3vw' children='Сеть АЗС'/>
              </div>
            </div>
            <div>
              <div>
                <p className='green-p'>10 000 АЗС (460 брендов)</p>
              </div>
              <div className='flex azs-pics'>
                <img className='azs-pic' src={GasBash} alt=''/>
                <img className='azs-pic' src={GasGasprom} alt=''/>
                <img className='azs-pic' src={GasTat} alt=''/>
                <img className='azs-pic' src={GasLukoil} alt=''/>
              </div>
            </div>
          </div>
          <div className='logos-change'>
            <div className='logos-bottom'>
              <img src={gasprom} alt='газпром'/>
              <img src={nm} alt='нефть-магистраль'/>
              <img src={lukoil} alt='лукойл'/>
              <img src={rosneft} alt='роснефть'/>
              <img src={bashneft} alt='башнефть'/>
              <img src={surgut} alt='сургутнефтегаз'/>
              <img src={tatneft} alt='tatneft'/>
              <img src={ptk} alt='птк'/>
              <img src={tes} alt='tes'/>
            </div>
            <div class='azs-button2'>
              <Button width='222px' marginTop='3vw' children='Сеть АЗС'/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Azs;
