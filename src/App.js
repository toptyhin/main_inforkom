import { Routes, Route, useLocation } from 'react-router-dom';
import { Tariff_gql, News_gql } from './gql';
import { AnimatePresence } from "framer-motion";
import Transition from './components/UI/Transition';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home   from './pages/Home';

import History  from './pages/about/history'
import Newslist from './pages/about/newsList';
import News     from './pages/about/news';

import FuelCard    from './pages/fuel-cards/fuel-card'
import OilTalons   from './pages/fuel-cards/oil-talons'
import ComProposal from './pages/fuel-cards/com-proposal'
import Goszakaz    from './pages/fuel-cards/44-fz-goszakazy'
import MapStation  from './pages/map-stations/map-station/MapStation';

import Tariff      from './pages/Tariff';

function App() {
  let index, true_content;
  const location = useLocation();
  const tariff_cont = Tariff_gql();
  const routesMap = {
    '/': Home,
    '/about/history' : History,
    '/about/news' : Newslist,
    '/fuel-cards/fuel-card' : FuelCard,
    '/fuel-cards/oil-talons' : OilTalons,
    '/fuel-cards/com-proposal' : ComProposal,
    '/fuel-cards/44-fz-goszakazy' : Goszakaz,
    '/map-stations/map-station': MapStation,
  };

  //Вынести в отдельный компонент
  const ErrorPage = (p) => <div>4040404040404</div>
  
  const Page = ({path}) => {
    if (path.includes('/news/') === true) {
      const news_cont = News_gql();    
      index = news_cont.address.indexOf(path);
      console.log(index);
      if (index != -1) {
        return news_cont.news_routes[index];
      }
    }
    else if (tariff_cont.address.includes(path) === true) {
      index = tariff_cont.address.indexOf(path);
      true_content = tariff_cont.tariff[index];
      return <Transition><News children = {true_content} /></Transition>
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