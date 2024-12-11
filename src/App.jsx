import Counter from "./Components/Counter"
import Galery from "./Components/Galery"
import Model from "./Components/Model"
import NavBar from "./Components/NavBar"
import ProductCard from "./Components/ProductCard"
import ProfileCard from "./Components/ProfileCard"
import WeatherCard from "./Components/WeatherCard"
import MenuBar from "./Components/MenuBar"
import Button from "./Components/Button"
import ThemeToggle from "./Components/ThemeToggle"



const App = () => {
  return (
<>
<MenuBar/>
<Button texte="click to enter"/>
<div className="grid grid-cols-1 gap-3 p-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
<ProfileCard name='my name is freddy'/>
<ProfileCard age=' am 20 old'/>
<ProfileCard bio='am software developper'/>

</div>

<Counter/>
<div >
<WeatherCard temperature='20' city='kigali' condition ='rain'/>
<WeatherCard temperature='30' city='goma' condition ='sunny'/>
<WeatherCard temperature='60' city='kishansa' condition ='rain'/>
<WeatherCard temperature='50' city='kampala' condition ='sunny'/>
</div>

<NavBar/>
<Model/>
<div className="grid grid-cols-1 p-2 border border-spacing-2 border-purple-500 gap-3 m-4 text-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
<ProductCard name='casque' price="50" image="./public/casque.png"/>
<ProductCard name='iphone13' price="500" image="./public/phone.png"/>
<ProductCard name='mac10' price="2500" image="./public/mac.png"/>
</div>

<Galery/>

<ThemeToggle/>

</>
  )
}

export default App