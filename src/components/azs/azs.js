import { Link } from "react-router-dom"
import Button   from './../../components/UI/button'
import GasBash    from './../../images/gas-bashneft.png'
import GasGasprom from './../../images/gas-gasprom.png'
import GasTat     from './../../images/gas-tatneft.png'
import GasLukoil  from './../../images/gas-lukoil.png'
import gasprom  from './../../images/logos-green/m-logo-gasprom.png'
import nm       from './../../images/logos-green/m-logo-nm.png'
import lukoil   from './../../images/logos-green/m-logo-lukoil.png'
import rosneft  from './../../images/logos-green/m-logo-rosneft.png'
import bashneft from './../../images/logos-green/m-logo-bashneft.png'
import shell    from './../../images/logos-green/m-logo-shell.png'
import surgut   from './../../images/logos-green/m-logo-surgut.png'
import tatneft  from './../../images/logos-green/m-logo-tatneft.png'
import ptk from './../../images/logos-green/m-logo-ptk.png'
import eka from './../../images/logos-green/m-logo-eka.png'
import tes from './../../images/logos-green/m-logo-tes.png'
import "./azs.css"

const Azs = () => {
  return (
    <div className="main">
      <section id="azs">
        <div className="flex flex-space-b">
          <div className="w">
            <h2>Сеть АЗС<br/>Инфорком</h2>
            <p>по единой карте<br/>Инфорком по<br/>всей территории РФ.</p>
            <Button width="15vw" marginTop="3vw" children="Сеть АЗС"/>
          </div>
          <div className="">
            <div>
              <p className="green-p">10 000 АЗС (460) брендов</p>
            </div>
            <div className="flex">
              <img className="w-25" src={GasBash} alt=""/>
              <img className="w-25" src={GasGasprom} alt=""/>
              <img className="w-25" src={GasTat} alt=""/>
              <img className="w-25" src={GasLukoil} alt=""/>
            </div>
          </div>
        </div>
        <div className="logos-bottom flex flex-space-b mt-6">
          <img src={gasprom} alt="газпром"/>
          <img src={nm} alt="нефть-магистраль"/>
          <img src={lukoil} alt="лукойл"/>
          <img src={rosneft} alt="роснефть"/>
          <img src={bashneft} alt="башнефть"/>
          <img src={shell} alt="шелл"/>
          <img src={surgut} alt="сургутнефтегаз"/>
          <img src={tatneft} alt="tatneft"/>
          <img src={ptk} alt="птк"/>
          <img src={eka} alt="eka"/>
          <img src={tes} alt="tes"/>
        </div>
      </section>
    </div>
  );
};

export default Azs;
