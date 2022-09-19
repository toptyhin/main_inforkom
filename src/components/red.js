import { Link } from "react-router-dom";
import Car  from './../images/tech-center.png'
import Tool from './../images/tool.png'
import Oil  from './../images/oil.png'
import "./../css/red.css"

const Red = () => {
  return (
    <div className="w-100">
      <section id="red" className="red-section">
        <div className="full-red">
          <div className="color-zone red-zone-height flex flex-space-b">
            <div className="red-head">
              <h2>Направления<br/>деятельности</h2>
              <p>Полезные продукты<br/>и сервисы для Вашего<br/>грузового автопарка</p>
            </div>
            <div className="flex red-table">
              <div className="box no-color flex flex-space-b">
                <div className="helping div"></div>
                <div className="white radius-20 red-zone-square">
                  <img className="red-zone-img car" src={Car}/>
                  <p>Техцентр/запчасти</p>
                </div>
              </div>
              <div className="box no-color flex flex-space-b">
                <div className="helping div"></div>
                <div className="white radius-20 red-zone-square">
                  <img className="red-zone-img tool" src={Tool}/>
                  <p>Инструмент</p>
                </div>
              </div>
              <div className="box no-color red-zone-margin flex flex-space-b">
                <div className="white radius-20 red-zone-square">
                  <img className="red-zone-img oil" src={Oil}/>
                  <p>Масло</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Red;
