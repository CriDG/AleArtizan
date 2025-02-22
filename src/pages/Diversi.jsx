import React from 'react';
import './styles/Diversi.css';  // Importa il file CSS

const products = [
    {
      id: 1,
      name: "Prodotto 1",
      description: "Descrizione breve 1",
      price: "€ 19.99",
      imageUrl: "https://i.postimg.cc/HLmCfkPb/diverse1.jpg",
    },
    {
      id: 2,
      name: "Prodotto 2",
      description: "Descrizione breve 2",
      price: "€ 29.99",
      imageUrl: "https://i.postimg.cc/pdBtxMg4/diverse2.jpg",
    },
    {
      id: 3,
      name: "Prodotto 3",
      description: "Descrizione breve 3",
      price: "€ 39.99",
      imageUrl: "https://i.postimg.cc/XJ76YDWJ/diverse3.jpg",
    },
];

// Componente per la card prodotto
const ProductCard = ({ product }) => {
    return (
      <>
        <div className="product-card">
          {/* Nome del prodotto con font più grande */}
          <h2 className="product-title">{product.name}</h2>
          
          {/* Descrizione del prodotto */}
          <p className="product-description">{product.description}</p>
  
          {/* Immagine del prodotto con dimensioni aumentate */}
          <img src={product.imageUrl} alt={product.name} className="product-image" />
  
          {/* Prezzo e bottone per aggiungere ai preferiti */}
          <div className="product-footer">
            <span className="product-price">{product.price}</span> {/* Prezzo visibile e più grande */}
            <button className="add-fav-btn">❤️</button>
          </div>
        </div>
      </>
    );
  };
  
  
  export default function Diversi() {
    return (
      <>
        <h1>Diversi</h1>
        <p>Qui trovi una selezione di prodotti vari.</p>
  
        {/* Contenitore orizzontale per lo scroll dei prodotti */}
        <div className="products-wrapper">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </>
    );
  }