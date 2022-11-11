import './App.css';
import { BrowserRouter as Router, Routes, Route,
       } from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home  from './pages/Home';
import MapStation from './pages/MapStation';
import BasicPage  from './pages/basicPage';
import Name1 from './pages/Name1';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <main className="container">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map-stations/map-station" element={<MapStation />} />
              <Route path="/basic-page" element={<BasicPage />} />
              <Route path="/banners/Name1" element={<Name1 />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
