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

  return (
    <>
      <Banner/>
      <People/>
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
