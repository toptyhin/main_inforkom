import { Link }   from "react-router-dom";
import Person  from './children/person'
import Person1 from './images/person-1.png'
import Person2 from './images/person-2.png'
import Person3 from './images/person-3.png'
import "./people.css"

import { useEffect, useState } from 'react';
import { gql } from '@apollo/client'
import {useQuery} from "@apollo/client";

const People = () => {

  const GET_TEST = gql`
    query { banners { data {
      id
      attributes {
        header
        name } } }
    }`

const {data, error, loading} = useQuery(GET_TEST)
console.log(data);
  return (

    <div className="main">
    <ul>
    {data?.banners.data.map(({attributes}) =>
    <li>
      <Link to={`/banners/${attributes.name}`}>
        {attributes.name}</Link>
        </li>)}
    </ul>



      <section id="people">
        <h2 className="head-people">Топливные карты для юридических лиц</h2>
        <div className='tablePeople'>
          <Person img={Person1} extra="yes" children="Заправляем коммерческий транспорт по топливным картам и талонам"/>
          <Person img={Person2} children="Управляй затратами на топливо в режиме Online"/>
          <Person img={Person3} children="Подходит для ИП и предприятий, где есть свой транспорт"/>
        </div>
      </section>
    </div>
  );
};

export default People;
