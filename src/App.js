
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import { gql }     from '@apollo/client'
import {useQuery}  from '@apollo/client';
import Home        from './pages/Home';
import History     from './pages/about/history'
import FuelCard    from './pages/fuel-cards/fuel-card'
import OilTalons   from './pages/fuel-cards/oil-talons'
import ComProposal from './pages/fuel-cards/com-proposal'
import Goszakaz    from './pages/fuel-cards/44-fz-goszakazy'
import MapStation  from './pages/map-stations/map-station/MapStation';
import Tariff      from './pages/Tariff';
import Transition  from './components/UI/Transition';
import Header      from './components/header/header';
import Footer      from './components/footer/footer';

function App() {
  const location = useLocation();
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
  const {data, error, loading} = useQuery(GET_TEST)
  if(error) return `Oops there has been an error: ${error}`
  let tariff_arr = data?.tarifs.data.map(({attributes}) => [`/tarify/${attributes.address}`,`Тариф ${attributes.head}`]);
 
  return (
    <div>
      <Header tariff={tariff_arr}></Header>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Transition><Home /></Transition>} />
          {data?.tarifs.data.map(({attributes}) =>
            <Route path={`/tarify/${attributes.address}`} 
              element={
              <Transition>
                <Tariff head={attributes.head} text={attributes.description}/>
              </Transition>} />
          )}

          <Route path='/about/history' element={<Transition><History /></Transition>} />
          <Route path='/fuel-cards/fuel-card' element={<Transition><FuelCard /></Transition>} />
          <Route path='/fuel-cards/oil-talons' element={<Transition><OilTalons /></Transition>} />
          <Route path='/fuel-cards/com-proposal' element={<Transition><ComProposal /></Transition>} />
          <Route path='/fuel-cards/44-fz-goszakazy' element={<Transition><Goszakaz /></Transition>} />
          <Route path='/map-stations/map-station' element={<Transition><MapStation /></Transition>} />
        </Routes>  
      </AnimatePresence> 
      <Footer />
    </div>
  );
}

export default App;