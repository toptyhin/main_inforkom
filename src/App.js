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
import { Tariff_gql } from './appconfig';

function App() {
  const location = useLocation();
  const cont = Tariff_gql();
  
  const routesMap = {
    '/': Home,
    '/about/history' : History,
    '/fuel-cards/fuel-card' : FuelCard,
    '/fuel-cards/oil-talons' : OilTalons,
    '/fuel-cards/com-proposal' : ComProposal,
    '/fuel-cards/44-fz-goszakazy' : Goszakaz,
    '/map-stations/map-station': MapStation
  };

  //Вынести в отдельный компонент
  const ErrorPage = (p) => <div>4040404040404</div>

  const Page = ({path}) => {
    const Component = routesMap[path] ? routesMap[path] : ErrorPage;
    return <Transition><Component/></Transition>
  }
  
  return (
    <div>
      <Header tariff={cont.tariff}></Header>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={location.pathname} element={<Page path={location.pathname}/>} />
          {cont.tariff_routes}
        </Routes>  
      </AnimatePresence> 
      <Footer />
    </div>
  );
}

export default App;