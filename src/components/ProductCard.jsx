
import './ProductCard.css'
import LikeButton from './LikeButton'
import CartButton from './CartButton'

export default function ProductCard({ id, description, price, name, imageUrl }) {
  return (
    <div className="product-card" data-id={id}>
      <img src={imageUrl} alt={name} className="product-image" />

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>

        <div className="product-footer">
          <span className="product-price">{price}</span>
          <LikeButton productId={id} />
          <CartButton />
        </div>
      </div>
    </div>
  )
}
