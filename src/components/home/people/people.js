import Person  from './children/person'
import './people.css'

const People = ({header_people, person, pic}) => {
  
  return (
    <div className='main'>
      <section id='people'>
        <h2 className='head-people'>{header_people}</h2>
        <div className='tablePeople'>
          <Person img={pic[0]} children={person[0]} extra='yes'/>
          <Person img={pic[1]} children={person[1]}/>
          <Person img={pic[2]} children={person[2]}/>
        </div>
      </section>
    </div>
  );
};

export default People;
