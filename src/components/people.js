import { Link } from "react-router-dom";
import PersonBack from './../images/person-back.png'
import Person1 from './../images/person-1.png'
import Person2 from './../images/person-2.png'
import Person3 from './../images/person-3.png'
import Button from './../components/button'
import "./../css/people.css"

const People = () => {
  return (


    <div className="main">
    <Button>Тест</Button>
      <section id="people">
        <h2>Топливные карты<br/>для юридических<br/>лиц</h2>
        <div className="table-people w-100">
          <div className="people-block">
            <img className="people-back" alt="" src={PersonBack}/>
            <img className="people" alt="" src={Person1}/>
          </div>
          <div className="people-block">
            <img className="people-back" alt="" src={PersonBack}/>
            <img className="people" alt="" src={Person2}/>
          </div>
          <div className="people-block">
            <img className="people-back" alt="" src={PersonBack}/>
            <img className="people" alt="" src={Person3}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default People;
