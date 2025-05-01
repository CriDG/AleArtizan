import React from 'react';
import './styles/Diversi.css';  
import ProductCard from '../components/ProductCard';
import diversiProducts from '../data/diversiData';


  export default function Diversi() {
    return (
      <>
        <h2 className='titolo-diversi'>
       Prodotti Diversi</h2>
       
        {/* Contenitore orizzontale per lo scroll dei prodotti */}
        <div className='contenitore-diversi' >
          {diversiProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          
        </div>
      </>
    );
  }

