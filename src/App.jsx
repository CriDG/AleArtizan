import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Diversi from './pages/Diversi';
import Famiglia from './pages/Famiglia';
import Feste from './pages/Feste';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="content-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/diversi" element={<Diversi />} />
          <Route path="/famiglia" element={<Famiglia />} />
          <Route path="/feste" element={<Feste />} />
        </Routes>
        <Footer />
      </div>
     
    </>
  );
}

export default App;
