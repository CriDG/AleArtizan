import './App.css';
import viteLogo from "/vite.svg"; // Senza ./public/
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Diversi from './pages/Diversi';
import Famiglia from './pages/Famiglia';
import Feste from './pages/Feste';

function App() {
  return (
    <>
      <div>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/diversi" element={<Diversi />} />
        <Route path="/famiglia" element={<Famiglia />} />
        <Route path="/feste" element={<Feste />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
