import { Link }   from "react-router-dom";
import Person  from './person'
import Person1 from './images/person-1.png'
import Person2 from './images/person-2.png'
import Person3 from './images/person-3.png'

const People = () => {
  let style = {
    paddingLeft: "2vw",
    marginTop: "2vw",
  }
  let tablePeople = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "-3vw",
    width: "100%",
  }
  return (
    <div className="main">
      <section id="people" style={style}>
        <h2>Топливные карты<br/>для юридических<br/>лиц</h2>
        <div style={tablePeople}>
          <Person img={Person1}/>
          <Person img={Person2}/>
          <Person img={Person3}/>
        </div>
      </section>
    </div>
  );
};

export default People;
