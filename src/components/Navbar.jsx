import React from 'react'
import { Link } from 'react-router-dom'; 
export default function Navbar() {
  return (
  <>
   <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px', background: '#ddd' }}>
      <Link to="/">Home</Link>
      <Link to="/diversi">Mix</Link>
      <Link to="/famiglia">Famiglia</Link>
      <Link to="/feste">Feste</Link>
    </nav>
  </>

  );
}
