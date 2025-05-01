import React from 'react'
import { useState } from 'react'
 import {FaShoppingCart } from "react-icons/fa";

export default function CartButton() {
    const [added, setAdded] = useState (false)
    const handleClick = () => {
        setAdded(!added);
    };
    return (
    <>
     <FaShoppingCart 
     onClick={handleClick}
     style={{color:added ? '#00FF7F' : 'lightgray', cursor : 'grab'}}
     size={34}
     />

    </>
  )
}
