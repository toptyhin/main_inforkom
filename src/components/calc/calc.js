import { Link } from "react-router-dom"
import CalcMain from './children/calcMain'
import CalcRes from './children/calcRes'
import "./calc.css"

const Calc = () => {
  return (
    <div className="w-100">
      <div id="calc-hide" className="back-grey">
        <div className="pb-4">
          <h4>Топливный калькулятор</h4>
          <p className="point f-grey" onclick="showCalc()">
            &#9660; Рассчитайте экономию с топливной картой Инфорком &#9660;
          </p>
        </div>

        <div id="calc" className="w-100 back-grey">
          <div id="main-calc">

            <CalcMain/>
            <CalcRes/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
