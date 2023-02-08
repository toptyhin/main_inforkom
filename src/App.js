import { Routes, Route, useLocation } from 'react-router-dom'
import { Tariff_gql, Menu_gql } from './gql'
import { AnimatePresence } from "framer-motion"
import Transition from './components/UI/Transition'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home   from './pages/Home'
import Pages   from './pages/pages'

import Social  from './pages/about/social'
import NewsWrapper from './pages/about/newsWrapper'

import OilTalons   from './pages/fuel-cards/oil-talons'
import ComProposal from './pages/fuel-cards/com-proposal'
import Goszakaz    from './pages/fuel-cards/44-fz-goszakazy'
import MapStation  from './pages/map-stations/map-station/MapStation'

import Tariff from './pages/tariff/Tariff'
 
function App() {
  const location = useLocation();
  let url;
  let head = []
  let full_url = []
  let menu_info = []
  let info = []
  const cont = {}
  const routesMap = {
    '/': Home,
    '/about/news' : NewsWrapper,
    '/about/social' : Social,
  }
  const content = Menu_gql();
  if (!content.loading && content.data) {
    content.data.menus.data.map ((element, j) => {
      url = `${element.attributes.url_parent}`;
      element.attributes.menu_item.map ((elem, i) => {
        head[i] = `${elem.name}`;
        full_url[i] = url+`${elem.url}`
          
        if (head[i].includes('Тариф ')) {
          routesMap[full_url[i]] = Tariff;
          cont[full_url[i]] = elem.tarif;
          
        }
        else {
          routesMap[full_url[i]] = Pages;
          cont[full_url[i]] = elem.page;
        }
      });
      
      
    }); 
    
  }

  //Вынести в отдельный компонент
  const ErrorPage = (p) => <div>4040404040404</div>
  
  const Page = ({path}) => {
    if (path.includes('/about/news') === true) {
      return <Transition><NewsWrapper path={path}/></Transition>
    }
    else {
      const Component = routesMap[path] ? routesMap[path] : ErrorPage;
      return <Transition><Component path={path} content={cont[path]}/></Transition>
    }
  }
  
  return (
    <div>
      <Header ></Header>
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