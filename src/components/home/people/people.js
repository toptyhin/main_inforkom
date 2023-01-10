import Person  from './children/person'
import './people.css'

const People = ({header_people, person_1, person_2, person_3}) => {
  return (
    <div className='main'>
      <section id='people'>
        <h2 className='head-people'>{header_people}</h2>
        <div className='tablePeople'>
          <Person img={person_1[1]} extra='yes' children={person_1[0]}/>
          <Person img={person_2[1]} children={person_2[0]}/>
          <Person img={person_3[1]} children={person_3[0]}/>
        </div>
      </section>
    </div>
  );
};

export default People;
