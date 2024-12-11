import { useState } from "react"


function Model() {

  const [showSomeThing , setShowSomeThing]=useState("")


  return (
    <div>
      <p className="bg-green-950 p-4 w-44 m-3 text-white">{showSomeThing}</p>
      <button onClick={()=> setShowSomeThing("I am looking at creating a random paragraph generator created from separate sentences that are all grouped together within their own values or structure of the paragraph")} className="bg-pink-950 text-white m-3 p-3 capitalize ">show content</button>
      <button onClick={()=>setShowSomeThing()}  className="bg-gray-950 text-white m-3 p-3 capitalize ">X</button>
    </div>
  )
}

export default Model
