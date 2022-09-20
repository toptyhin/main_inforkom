import { Link } from "react-router-dom";
import PersonBack from './images/person-back.png'
import "./person.css"

const Person = ( {img} ) => {
  return (
    <div className="people-block">
      <img className="people-back" alt="" src={PersonBack}/>
      <img className="people" alt="" src={img}/>
    </div>
  );
};

export default Person;
