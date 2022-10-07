import CalcMain from './children/calcMain'
import CalcRes from './children/calcRes'
import "./calc.css"

const Calc = () => {
  return (
    <div className="w-100">
      <div id="calc-hide" className="back-grey">
        <div className="pb-4">
          <h4>Топливный <br className="calc-head"/>калькулятор</h4>
          <p className="point f-grey show-text" onclick="showCalc()">
            &#9660; Рассчитайте экономию с топливной картой Инфорком &#9660;
          </p>
          <p className="point f-grey calc-head" onclick="showCalc()">
            Рассчитайте экономию<br/>&#9660; с топливной картой Инфорком &#9660;
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
