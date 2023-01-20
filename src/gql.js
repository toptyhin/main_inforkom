import { gql }     from '@apollo/client'
import {useQuery}  from '@apollo/client';
import { API_URL } from './appconfig';
import News     from './pages/about/news';
import Transition from './components/UI/Transition';

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
 
  let tariff_arr;
  const address = [];
  if (data?.tarifs != undefined) {
    tariff_arr = data?.tarifs.data.map(({attributes}) => 
      [ `/tarify/${attributes.address}`,
        `Тариф ${attributes.head}`,
        `${attributes.description}`
      ]);
    for (let i=0; i<tariff_arr.length; i++) {
      address[i]=tariff_arr[i][0];
    }  
  }
  
  return {
    tariff: tariff_arr,
    address: address,
  }
}
export function News_gql() {
  const GET_NEWS = gql`
    query { 
      news {
        data {
          id
          attributes {
            createdAt
            header {
              text
            } 
            Text {
              ... on ComponentTextPagesTextAreaHead {
                id
                open
                text
                close
              }
              ... on ComponentTextPagesSimpleText {
                open
                text
                close
              }
              ... on ComponentTextPagesSpecialText {
                open
                text
                close
              }
              
              ... on ComponentTextPagesColoredHeader {
                open
                text
                close
              }
            }
          }
        }
      }
    }`
  const {data, error, loading} = useQuery(GET_NEWS)
  if(error) return `Oops there has been an error: ${error}`

  let news, news_fix, news_routes, text, news1;
  let layout;
  const address = [];
  const fin = [];
  if (data?.news != undefined) {
    news = data?.news.data.map(({attributes, id}) => 
      [ `/news/${id}`,
        `${attributes.createdAt}`,
        `${attributes.header.text}`,
        
      ]);
    for (let i=0; i<news.length; i++) {
      address[i] = news[i][0];
      layout = '';
      text = data?.news.data[i].attributes.Text;
      
      for (let j=0; j<text.length; j++) {
        
        for (let key in text[j]) {
          if (key!='__typename' && key!='id')
          
            layout = layout+text[j][key];
        }    
        
      }
      fin[i] = layout;
      news[i][3] = layout;
    }
    
    news_routes = news.map(function(element) {
      return (
        <Transition>
          <News children = {element[3]} />
        </Transition>
      )
    })
    news1 = news.reverse();
  }
  return {
    address: address,
    news: news1,
    news_routes: news_routes,
  }
}

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
    pic[i] = API_URL+data?.main.data.attributes.people_area.people[i].pics.data.map(
      ({attributes}) => `${attributes.url}`);
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
  let layout = '';
  for (let i=0; i<3; i++) {
    const test = data?.test.data.attributes.test[i];
    for (let key in test) {
      if (key!='__typename')
        layout = layout+test[key];
    }
  }
  console.log(layout);
  return layout;   
}

