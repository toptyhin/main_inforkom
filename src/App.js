
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home        from './pages/Home';
import History     from './pages/about/history'
import FuelCard    from './pages/fuel-cards/fuel-card'
import OilTalons   from './pages/fuel-cards/oil-talons'
import ComProposal from './pages/fuel-cards/com-proposal'
import Goszakaz    from './pages/fuel-cards/44-fz-goszakazy'
import MapStation  from './pages/map-stations/map-station/MapStation';
import Transition  from './components/UI/Transition';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Transition><Home /></Transition>} />
        <Route path='/about/history' element={<Transition><History /></Transition>} />

        <Route path='/fuel-cards/fuel-card' element={<Transition><FuelCard /></Transition>} />
        <Route path='/fuel-cards/oil-talons' element={<Transition><OilTalons /></Transition>} />
        <Route path='/fuel-cards/com-proposal' element={<Transition><ComProposal /></Transition>} />
        <Route path='/fuel-cards/44-fz-goszakazy' element={<Transition><Goszakaz /></Transition>} />

        <Route path='/map-stations/map-station' element={<Transition><MapStation /></Transition>} />
      </Routes>  
    </AnimatePresence> 
  );
}

export default App;
