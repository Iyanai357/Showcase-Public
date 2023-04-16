import { useState } from "react"
import { close, cheers, menu } from '../assets'
import { navLinks } from '../constants'

const NavBar = () => {

  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className="w-full flex flex-col sm:flex-row py-6 justify-between items-center navbar">
      <img src={cheers} alt="Logo" className="w-42 h-24 mt-3"/>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-unbounded font-normal cursor-pointer text-[16px] text-softAmber hover:text-shipCove hover:animate-ping ease-in-out duration-300 ${index === navLinks.length -1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((toggle) => !toggle)}/>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-shipCove-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>

          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-unbounded font-medium cursor-pointer text-[16px]  text-softAmber ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

        </div>

      </div>
    </nav>

  )
}

export default NavBar
