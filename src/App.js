
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
import Home        from './pages/Home';
import History     from './pages/about/history'
import FuelCard    from './pages/fuel-cards/fuel-card'
import OilTalons   from './pages/fuel-cards/oil-talons'
import ComProposal from './pages/fuel-cards/com-proposal'
import Goszakaz    from './pages/fuel-cards/44-fz-goszakazy'
import MapStation  from './pages/map-stations/map-station/MapStation';
import BasicPage   from './pages/basicPage';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <div>
    <Routes key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/about/history' element={<History />} />

      <Route path='/fuel-cards/fuel-card' element={<FuelCard />} />
      <Route path='/fuel-cards/oil-talons' element={<OilTalons />} />
      <Route path='/fuel-cards/com-proposal' element={<ComProposal />} />
      <Route path='/fuel-cards/44-fz-goszakazy' element={<Goszakaz />} />

      <Route path='/map-stations/map-station' element={<MapStation />} />
      <Route path='/basic-page' element={<BasicPage />} />
    </Routes>  
    </div>
    </AnimatePresence> 
  );
}

export default App;
