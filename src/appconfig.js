import { gql }     from '@apollo/client'
import {useQuery}  from '@apollo/client';
import Tariff      from './pages/Tariff';
import { Route } from 'react-router-dom';
import Transition  from './components/UI/Transition';

export const API_URL = 'https://bite2.inforkom.ru';
export function Main_gql() {
  const GET_MAIN = gql`
    query { 
      main { 
        data {
          attributes {
            banner {
              header
            } 
            people_area {
              header_people
              people {
                text
                pics {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      } 
    }`
  const pic = [];
  const person = [];
  const banner = [];
  const {data, error, loading} = useQuery(GET_MAIN)
  if(error) return `Oops there has been an error: ${error}`
    
  for (let i=0; i<data?.main.data.attributes.people_area.people.length; i++) {
    pic[i] = API_URL+data?.main.data.attributes.people_area.people[i].pics.data.map(({attributes}) => `${attributes.url}`);
    person[i] = data?.main.data.attributes.people_area.people[i].text;
  }
  for (let i=0; i<data?.main.data.attributes.banner.length; i++) {
    banner[i] = data?.main.data.attributes.banner[i].header;
  }
  const header_people = data?.main.data.attributes.people_area.header_people;
     
  return {
    banner: banner,
    pic: pic,
    person: person,
    header_people: header_people,
  }
}
export function Tariff_gql() {
  const GET_TARIFF = gql`
  query { 
    tarifs { 
      data {
        id
        attributes {
          head
          description
          address 
        } 
      } 
    }
  }`
  const {data, error, loading} = useQuery(GET_TARIFF)
  if(error) return `Oops there has been an error: ${error}`
 
  const tariff_arr = data?.tarifs.data.map(({attributes}) => [`/tarify/${attributes.address}`,`Тариф ${attributes.head}`,`${attributes.description}`]);
  let tariff_fix;
  if (tariff_arr===undefined) {
    tariff_fix=[''];
  } else {
    tariff_fix=tariff_arr;
  }
  const tariff_routes = tariff_fix.map(function(tariff) {
    return (
      <Route key={tariff[0]} path={tariff[0]} element={
        <Transition>
          <Tariff head={tariff[1]} text={tariff[2]}/>
        </Transition>
      }/>
    )
  })   
  return {
    tariff: tariff_arr,
    tariff_routes: tariff_routes,
  }
}
export function Test_gql() {
  const GET_TEST = gql`
    query { 
      test { 
        data {
          attributes {
            test {
              ... on ComponentTextPagesTest {
                beginning
                text
                ending
              }
              ... on ComponentTextPagesHeader {
                open
                head
                children_open
                children
                close
              }
            }
          }
        }
      } 
    }`
const {data, error, loading} = useQuery(GET_TEST)
    if(error) return `Oops there has been an error: ${error}`
   
    const test = data?.test.data.attributes.test[0];
    

    var counter = '';
  for (let i=0; i<3; i++) {
    const test = data?.test.data.attributes.test[i];
    for (var key in test) {
        if (key!='__typename')
      counter = counter+test[key];
    }
  }
    console.log(counter);
    return counter;
    
  }

    