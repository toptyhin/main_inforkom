import './App.css';
import { BrowserRouter as Router, Routes, Route,
       } from 'react-router-dom';
import { gql } from '@apollo/client'
import {useQuery} from '@apollo/client';
import ScrollToTop from './components/scrollToTop'

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home  from './pages/Home';

import History from './pages/about/history'

import FuelCard from './pages/fuel-cards/fuel-card'
import OilTalons from './pages/fuel-cards/oil-talons'
import ComProposal from './pages/fuel-cards/com-proposal'
import Goszakaz from './pages/fuel-cards/44-fz-goszakazy'

import MapStation from './pages/map-stations/map-station/MapStation';
import BasicPage  from './pages/basicPage';
import Tariff from './pages/Tariff';
import Test from './pages/test';

function App() {
  const GET_TEST = gql`
  query { tarifs { data {
    id
    attributes {
      head
      description
      address } } }
  }`

  const {data, error, loading} = useQuery(GET_TEST)
  if(error) return `Oops there has been an error: ${error}`

  let tariff_arr = data?.tarifs.data.map(({attributes}) => [`/tarify/${attributes.address}`,`Тариф ${attributes.head}`]);
  console.log(data); 
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Header test={tariff_arr}></Header>
        <main className='container'>
          <Routes>
            <Route path='/' element={<Home />} />          
            {data?.tarifs.data.map(({attributes}) =>
              <Route path={`/tarify/${attributes.address}`} 
              element={<Tariff head={attributes.head} text={attributes.description}/>} />
            )}
            <Route path='/test' element={<Test />} />

            <Route path='/about/history' element={<History />} />
            <Route path='/fuel-cards/fuel-card' element={<FuelCard />} />
            <Route path='/fuel-cards/oil-talons' element={<OilTalons />} />
            <Route path='/fuel-cards/com-proposal' element={<ComProposal />} />
            <Route path='/fuel-cards/44-fz-goszakazy' element={<Goszakaz />} />

            <Route path='/map-stations/map-station' element={<MapStation />} />
            <Route path='/basic-page' element={<BasicPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
