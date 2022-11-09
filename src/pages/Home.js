import Banner from "../components/banner/banner";
import People from "../components/people/people";
import Green  from "../components/green/green";
import Boxes  from "../components/boxes/boxes";
import FormAccount from "../components/formAccount/formAccount";
import Calc   from "../components/calc/calc";
import Red    from "../components/red/red";
import Card   from "../components/card/card";
import Azs    from "../components/azs/azs";
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

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
