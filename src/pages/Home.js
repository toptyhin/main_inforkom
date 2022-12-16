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
const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const Home = () => {
    return (
        <>
        <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible
        }}>
        <Banner/>
        <People/>
        <Green/>
        <Boxes/>
        <FormAccount/>
        <Calc/>
        <Red/>
        <Card/>
        <Azs/>
        </motion.div>
        </>
    );
  }

  export default Home;
