import Banner from '../components/home/banner/banner';
import People from '../components/home/people/people';
import Green  from '../components/home/green/green';
import Boxes  from '../components/home/boxes/boxes';
import Calc   from '../components/home/calc/calc';
import Red    from '../components/home/red/red';
import Card   from '../components/home/card/card';
import Azs    from '../components/home/azs/azs';
import FormAccount from '../components/home/formAccount/formAccount';
import { gql }     from '@apollo/client'
import {useQuery}  from '@apollo/client';

const Home = () => {
  const GET_MAIN = gql`
  query { 
    main { 
      data {
        attributes {
          header_people
          banner {
            banner_1
            banner_2
            banner_3
            banner_4
          } 
          people {
            text
          }
          pic_test {
            data {
              attributes {
                url
              }
            }
          } 
        }
      }
    } 
  } `

  const {data, error, loading} = useQuery(GET_MAIN)
  if(error) return `Oops there has been an error: ${error}`
  let pic_fix;
  const pic = data?.main.data.attributes.pic_test.data.map(({attributes}) => `${attributes.url}`);
  if (pic===undefined) {
    pic_fix = [[`test`,'test','test']];
  } else {
    pic_fix = pic;
  }
  const b1 = data?.main.data.attributes.banner.banner_1;
  const b2 = data?.main.data.attributes.banner.banner_2;
  const b3 = data?.main.data.attributes.banner.banner_3;
  const b4 = data?.main.data.attributes.banner.banner_4;
  
  const person_1 = [data?.main.data.attributes.people[0].text, `https://bite2.inforkom.ru${pic_fix[0]}`];
  const person_2 = [data?.main.data.attributes.people[1].text, `https://bite2.inforkom.ru${pic_fix[1]}`];
  const person_3 = [data?.main.data.attributes.people[2].text, `https://bite2.inforkom.ru${pic_fix[2]}`];
  console.log(pic);
  
  const header_people = data?.main.data.attributes.header_people;
  return (
    <>
      <Banner banner1={b1} banner2={b2} banner3={b3} banner4={b4} />
      <People header_people={header_people} person_1={person_1} person_2={person_2} person_3={person_3}/>
      <Green/>
      <Boxes/>
      <FormAccount/>
      <Calc/>
      <Red/>
      <Card/>
      <Azs/>
    </>
  );
}

export default Home;
