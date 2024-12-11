import { useState } from "react"
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";


const ThemeToggle = () => {
    const [isLigthTheme , setIsLigthTheme]=useState(false)
  return (
    <div  className={`${!isLigthTheme? 'bg-yellow-100' : 'bg-black  text-white'}`}>
        <div className='flex justify-center '>
            <button className="text-4xl m-4" onClick={()=> setIsLigthTheme(prevIsLigthTheme => !prevIsLigthTheme)}>{!isLigthTheme? <IoIosSunny />
:<FaMoon /> }</button>
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus dolor recusandae magni fugit, deleniti, ea soluta aliquid similique id corporis itaque officia. Dicta, expedita! Consectetur distinctio doloribus adipisci fugit id.
        In cumque iste optio suscipit quisquam! Rerum, minus necessitatibus totam dolorem quae vel blanditiis obcaecati? Adipisci velit saepe modi quae delectus et molestias amet impedit repellat, rerum est quas ratione.
        Eius veniam, doloremque inventore aspernatur saepe expedita repudiandae nihil cupiditate vitae cumque, labore ad aliquam voluptate, voluptatem iure quo explicabo eaque laboriosam esse commodi animi autem dignissimos ipsam facere. Pariatur?
        Numquam nam animi illum natus totam ullam, sequi dolorem dolore obcaecati laboriosam corrupti ad, quidem error magnam? Voluptates voluptas, vitae totam impedit excepturi neque ad dignissimos. Sint incidunt minima corporis.
        Reiciendis, explicabo ducimus itaque optio magni placeat cum rem hic repellendus incidunt odio quas iure ab ipsum debitis veritatis esse voluptates accusantium sapiente blanditiis animi recusandae eaque harum fugit. Soluta?
        Obcaecati, officia quae quo magni accusamus rem consequatur tenetur. Hic fugit, eligendi dignissimos animi earum, mollitia quae veniam nostrum suscipit nisi blanditiis. Velit odio nam eum optio aliquam blanditiis! Voluptatem?
        Veritatis rem dolorum in ex ducimus temporibus deleniti commodi eligendi perferendis recusandae odit fugit mollitia animi esse quis, nihil illum eius reprehenderit quod quidem, quisquam unde dolor ut velit? Officiis.
        Sequi facere eos ab omnis libero tenetur distinctio impedit enim minima quam optio voluptatum qui sapiente cum, dolorum reprehenderit earum nobis deserunt odio. Tenetur deleniti repellat, repudiandae quis commodi nam?
        Amet totam rerum aliquid ratione voluptates qui perferendis facilis vero rem. Illo facere veniam commodi earum recusandae voluptate nisi, architecto aut iure sint expedita deserunt sequi beatae omnis a blanditiis!
        Quisquam veniam ipsa officiis ab, facilis possimus minima a alias neque nihil dignissimos dolore non cupiditate iusto molestiae qui exercitationem consequatur dolorum. Dolore praesentium, voluptatum explicabo expedita aspernatur sequi corrupti.</p>
    </div>
  )
}

export default ThemeToggle