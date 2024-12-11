

function NavBar() {
  return (
    <div>
      <nav className="bg-red-600 flex  sm:bg-red-600 sm:justify-center   md:bg-yellow-700 md:justify-start lg:bg-sky-600 lg:justify-center">
        <ul className=" flex gap-3 font-bold text-2xl p-5 lg:flex md:flex sm:flex  ">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
