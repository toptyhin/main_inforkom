import './App.css';
import { BrowserRouter as Router, Routes, Route,
       } from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home  from './pages/Home';

import History from './pages/about/history'

import FuelCard from './pages/fuel-cards/fuel-card'

import MapStation from './pages/MapStation';
import BasicPage  from './pages/basicPage';
import Name1 from './pages/Name1';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <main className='container'>
          <Routes>
              <Route path='/' element={<Home />} />

                <Route path='/about/history' element={<History />} />

                <Route path='/fuel-cards/fuel-card' element={<FuelCard />} />

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
