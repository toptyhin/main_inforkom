import Banner from '../components/home/banner/banner';
import People from '../components/home/people/people';
import Green  from '../components/home/green/green';
import Boxes  from '../components/home/boxes/boxes';
import FormAccount from '../components/home/formAccount/formAccount';
import Calc   from '../components/home/calc/calc';
import Red    from '../components/home/red/red';
import Card   from '../components/home/card/card';
import Azs    from '../components/home/azs/azs';
import { motion, useIsPresent } from "framer-motion";
import { Link } from 'react-router-dom';


import { useEffect, useState } from 'react';

const Home = () => {
    const isPresent = useIsPresent();
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
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className='transition'
        />
        </>
    );
  }

  export default Home;
