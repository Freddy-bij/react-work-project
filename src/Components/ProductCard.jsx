import { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

const ProductCard = ({image,name,price}) => {
  const [isClicked , setIsClicked]=useState(true)
  return (
    <div >
        <img src={image} alt="casque" className="w-full"/>
        <p>{name}</p>
        <p>{price}USD</p>
        <p className="text-blue-700">{isClicked? '' : 'product is  good'} </p>
       <div onClick={()=> setIsClicked(prev => !prev)} className="flex justify-end">

        {isClicked ? <FaRegThumbsUp /> :  <FaThumbsUp />}
     
       </div>
  

    </div>
  )
}

export default ProductCard