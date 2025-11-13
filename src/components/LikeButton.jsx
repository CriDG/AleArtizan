
import React, { useState, useEffect } from 'react'
import { AiFillHeart } from 'react-icons/ai'

export default function LikeButton({ productId }) {
  const [liked, setLiked] = useState(false)

  // Al montaggio, controllo se productId è già in wishlist
  useEffect(() => {
    const stored = localStorage.getItem('wishlist')
    const wishlistArray = stored ? JSON.parse(stored) : []
    setLiked(wishlistArray.includes(productId))
  }, [productId])

  const handleClick = () => {
    const stored = localStorage.getItem('wishlist')
    const wishlistArray = stored ? JSON.parse(stored) : []
    let updatedWishlist

    if (liked) {
      // rimuovo productId
      updatedWishlist = wishlistArray.filter((id) => id !== productId)
    } else {
      // aggiungo productId
      updatedWishlist = [...wishlistArray, productId]
    }

    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
    setLiked(!liked)
  }

  return (
    <AiFillHeart
      onClick={handleClick}
      style={{ color: liked ? 'red' : 'lightgray', cursor: 'pointer' }}
      size={34}
    />
  )
}
