// src/App.jsx
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Diversi from './pages/Diversi'
import Famiglia from './pages/Famiglia'
import Feste from './pages/Feste'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Footer from './components/Footer'
import Registrati from './pages/Registrati'

function App() {
  // Controlla se c’è currentUser in localStorage
  const isLogged = () => !!localStorage.getItem('currentUser')

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
          <Route path="/accedi-registrati" element={<Registrati />} />

          {/* PAGINA WISHLIST PROTETTA */}
          <Route
            path="/wishlist"
            element={isLogged() ? <Wishlist /> : <Navigate to="/accedi-registrati" />}
          />

          {/* Qualunque altro path → redirect a /home */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
