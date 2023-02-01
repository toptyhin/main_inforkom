import { Routes, Route, useLocation } from 'react-router-dom';
import { Tariff_gql } from './gql';
import { AnimatePresence } from "framer-motion";
import Transition from './components/UI/Transition';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home   from './pages/Home';
import { FuelCard, History }  from './pages/pages_test';

import Social  from './pages/about/social'
import NewsWrapper from './pages/about/newsWrapper';

import OilTalons   from './pages/fuel-cards/oil-talons'
import ComProposal from './pages/fuel-cards/com-proposal'
import Goszakaz    from './pages/fuel-cards/44-fz-goszakazy'
import MapStation  from './pages/map-stations/map-station/MapStation';

import Tariff      from './pages/Tariff';

function App() {
  const location = useLocation();
  const tariff_cont = Tariff_gql();
  const routesMap = {
    '/': Home,
    '/about/history' : History,
    '/about/news' : NewsWrapper,
    '/about/social' : Social,
    '/fuel-cards/fuel-card' : FuelCard,
    '/fuel-cards/oil-talons' : OilTalons,
    '/fuel-cards/com-proposal' : ComProposal,
    '/fuel-cards/44-fz-goszakazy' : Goszakaz,
    '/map-stations/map-station': MapStation,
  };

  //Вынести в отдельный компонент
  const ErrorPage = (p) => <div>4040404040404</div>
  
  const Page = ({path}) => {
    if (path.includes('/about/news') === true) {
      return <Transition><NewsWrapper path={path}/></Transition>
    }
    else {
      const Component = routesMap[path] ? routesMap[path] : ErrorPage;
      return <Transition><Component/></Transition>
    }
  }
  
  return (
    <div>
      <Header tariff={tariff_cont.tariff}></Header>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path={location.pathname} element={<Page path={location.pathname}/>} />          
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;