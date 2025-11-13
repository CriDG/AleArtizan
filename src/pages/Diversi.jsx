// src/pages/Diversi.jsx
import React from 'react'
import diversiProducts from '../data/diversiData'
import ProductCard from '../components/ProductCard'

export default function Diversi() {
  
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Prodotti Diversi</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginTop: '1rem',
        }}
      >
        {diversiProducts.map((prod) => (
          <ProductCard
            key={prod.id}
            id={prod.id}
            name={prod.name}
            description={prod.description}
            price={prod.price}
            imageUrl={prod.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
