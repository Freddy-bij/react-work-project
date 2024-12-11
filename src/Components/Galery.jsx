

const Galery = () => {
  return (
    <div className="grid grid-cols-1 p-2 border border-spacing-2 border-purple-500 gap-3 m-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <img src="./public/img1.png" alt="img1" className="w-full h-full"/>
        <img src="./public/img2.png" alt="img1" className="h-full"/>
        <img src="./public/img3.png" alt="img1" className="w-full h-full"/>
    </div>
  )
}

export default Galery