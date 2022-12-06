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
  const GET_TEST = gql`
    query { tarifs { data {
    attributes {
      head
      description
      address } } }
    }`

  const {data, error, loading} = useQuery(GET_TEST)
  if(error) return `Oops there has been an error: ${error}`

  return (
    <>
      <Banner/>
      <People data={data}/>
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
