import { gql }     from '@apollo/client'
import {useQuery}  from '@apollo/client';

export const API_URL = 'https://bite2.inforkom.ru';
export function Main_gql() {
  const GET_MAIN = gql`
    query { 
      main { 
        data {
          attributes {
            header_people
            banner {
              header
            } 
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
  `
  const pic = [];
  const person = [];
  const banner = [];
  const {data, error, loading} = useQuery(GET_MAIN)
  if(error) return `Oops there has been an error: ${error}`
    
  for (let i=0; i<data?.main.data.attributes.people.length; i++) {
    pic[i] = API_URL+data?.main.data.attributes.people[i].pics.data.map(({attributes}) => `${attributes.url}`);
    person[i] = data?.main.data.attributes.people[i].text;
  }
  for (let i=0; i<data?.main.data.attributes.banner.length; i++) {
    banner[i] = data?.main.data.attributes.banner[i].header;
  }
  const header_people = data?.main.data.attributes.header_people;
     
  return {
    banner: banner,
    pic: pic,
    person: person,
    header_people: header_people,
  }
}
export function Tariff_gql() {
  const GET_TEST = gql`
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
  const head = [];
  const address = [];
  const text = [];
  const {data, error, loading} = useQuery(GET_TEST)
  if(error) return `Oops there has been an error: ${error}`
  for (let i=0; i<data?.tarifs.data.length; i++) {
    address[i] = '/tarify/'+data?.tarifs.data[i].attributes.address;
    head[i] = 'Тариф '+data?.tarifs.data[i].attributes.head;
    text[i] = data?.tarifs.data[i].attributes.description;
  }
  let tariff_arr = data?.tarifs.data.map(({attributes}) => [`/tarify/${attributes.address}`,`Тариф ${attributes.head}`,`${attributes.description}`]);
     
  return {
    head: head,
    address: address,
    text: text,
    tariff: tariff_arr,
  }
}
    