import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { useState } from 'react';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  }
    return (
    <>
    <AiFillHeart 
    onClick={handleClick}
    style={{color:liked ? 'red' : 'grey', cursor:'pointer'}}
    size={34}
    />
    
    </>
  )
}