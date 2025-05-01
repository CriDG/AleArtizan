import './ProductCard.css';
import LikeButton from './LikeButton';
import CartButton from './CartButton';
export default function ProductCard({ children, id, description, price, name, imageUrl }) {
  return (
    <>
      <div className="product-card" data-id={id}>

        {/* Nome del prodotto con font più grande */}
        <img src={imageUrl} alt={name} className="product-image" />

        <div className="product-info">
        {/* Prezzo e bottone per aggiungere ai preferiti */}
        <div className="product-footer">
          <span className="product-price">{price}</span> 
          <LikeButton />
          <CartButton />
        </div>
        </div>
      </div>
      {children}
    </>
  )
}
