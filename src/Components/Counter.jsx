import { useState } from "react"

const Counter = () => {
    const [count,setCount]=useState(0)
  return (
    <>
        <div>Counter:{count}</div>
    <button className="bg-pink-950 rounded-lg ml-2 text-white p-2" onClick={()=> setCount(prevCount => prevCount+1)}>increment</button>
    <button className="bg-green-950 rounded-lg ml-2 text-white p-2" onClick={()=> setCount(prevCount => prevCount-1)}>decrement</button>
    <button className="bg-gray-950 rounded-lg ml-2 text-white p-2" onClick={()=> setCount(0)}>resert</button>
    </>

  )
}

export default Counter