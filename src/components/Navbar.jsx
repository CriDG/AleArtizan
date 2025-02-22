import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // ✅ Importa il file CSS

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="https://i.postimg.cc/jj14DD07/logo2.png"
            alt="Logo"
          />
        </Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/diversi">Mix</Link>
        <Link to="/famiglia">Famiglia</Link>
        <Link to="/feste">Feste</Link>
      </div>
    </nav>
  );
}
