
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import diversiProducts from '../data/diversiData'

export default function Wishlist() {
  const [favoriteProducts, setFavoriteProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    // Se non c’è utente loggato, reindirizzo al login
    const user = localStorage.getItem('currentUser')
    if (!user) {
      navigate('/accedi-registrati')
      return
    }

    // Prendo gli id salvati nella wishlist  
    const stored = localStorage.getItem('wishlist')
    const wishlistIds = stored ? JSON.parse(stored) : []

    // Filtro l’array completo di prodotti: prendo solo quelli presenti in wishlistIds
    const filtered = diversiProducts.filter((prod) =>
      wishlistIds.includes(prod.id)
    )
    setFavoriteProducts(filtered)
  }, [navigate])

  if (favoriteProducts.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>La tua Wishlist è vuota</h2>
        <p>
          <Link to="/diversi">Torna ai prodotti</Link> e aggiungi qualcosa ai tuoi preferiti!
        </p>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h2>La tua Wishlist</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginTop: '1rem',
        }}
      >
        {favoriteProducts.map((prod) => (
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
