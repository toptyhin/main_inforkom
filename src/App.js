import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <main className="container">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>

  );
}

export default App;
