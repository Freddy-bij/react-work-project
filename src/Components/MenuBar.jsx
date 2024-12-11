import { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const hearder = () => {
 const [isClicked , setIsClicked]=useState(false)
  let logos = ["Home","contact", "About"]
  return (
    <div  className="flex justify-between bg-gray-900 py-3 px-2 items-center texte-white">
      <h1 className="text-white text-3xl">Logo</h1>
      <div onClick={() => setIsClicked(PrevIsClicked => !PrevIsClicked)}>
      <div>
        {isClicked ?    <ul className="flex text-white gap-x-3">{logos.map(logo => <li>{logo}</li>)}</ul> : <IoIosMenu className="text-4xl text-pink-950 font-bold" /> }
      </div>
   
      </div>
    </div>
  )
}

export default hearder