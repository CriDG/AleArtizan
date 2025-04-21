import React from 'react';
import './styles/Diversi.css';  // Importa il file CSS
import ProductCard from '../components/ProductCard';
import diversiProducts from '../data/diversiData';


  export default function Diversi() {
    return (
      <>
        <h2 style={{color : 'red', marginTop: "80px" }}>Diversi</h2>
        <p>Qui trovi una selezione di prodotti vari.</p>
  
        {/* Contenitore orizzontale per lo scroll dei prodotti */}
        <div style={{
             display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Colonne più grandi "repeat(auto-fit, minmax(350px, 1fr))"
             gap: "20px", // Spazio maggiore tra le card
             justifyContent: "center",
             alignItems: "start",
             padding: "40px",
             width: "100%",
             maxWidth: "1600px", // Adattato per schermi larghi
             margin: "auto",
        }} >
          {diversiProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </>
    );
  }

