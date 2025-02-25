
import { useState,useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // ✅ Importa il file CSS

export default function Navbar() {
  const[menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // 🔥 Riferimento al menu per controllare i click fuori

  // Funzione per chiudere il menu quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <nav className="navbar">
      
    <div className='menu-container' ref={menuRef}>
    <button className='menu-button' onClick= {() => setMenuOpen(!menuOpen)}> ☰ Menu</button>
      
      <div className={`dropdown ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/diversi" onClick={() => setMenuOpen(false)}>Mix</Link>
        <Link to="/famiglia" onClick={() => setMenuOpen(false)}>Famiglia</Link>
        <Link to="/feste" onClick={() => setMenuOpen(false)}>Feste</Link>
      </div>
      </div>
      
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="https://i.postimg.cc/jj14DD07/logo2.png"
            alt="Logo"
          />
        </Link>
      </div>

    </nav>
  );
}
