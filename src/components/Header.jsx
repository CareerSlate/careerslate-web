import { useState } from "react"
import { Link } from "react-router-dom"
import { logoImg, navLinks, hamburger } from "../utils/constants"
import { HiMenu } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleHamburgerMenu() {
    setIsMenuOpen(prev => !prev)
  }
  return (
    <nav id="nav" className="flex justify-between items-center gap-4 py-3 ">
      {/* logo */}
      <Link to="/">
        <img data-testid="logo" src={logoImg.img} alt={logoImg.alt} className="w-[160px]" />
      </Link>

      {/* navbar web version */}
      <ul data-testid="navbar" className="flex-1 hidden md:flex justify-end items-center gap-6 text-slate-800">
        {navLinks.map(navLink => {
          return (
            <li key={navLink.id} className="hover:text-secondary">
              <Link to={navLink.link}>{navLink.title}</Link>
            </li>
          )
        })}
      </ul>

      {/* navbar mobile version */}
      <div className=" flex-1  md:hidden flex justify-end block relative ">
        <div data-testid="hamburger-menu" onClick={handleHamburgerMenu}>
          {isMenuOpen ? <AiOutlineClose size={28} /> : <HiMenu size={28} />}
        </div>
        <ul data-testid="navbar-mobile" className={`${isMenuOpen ? "block" : "hidden"} absolute top-12 right-0 shadow-lg rounded-lg flex flex-col items-start px-5 py-8 slide-navbar bg-white z-[100] `}>
          {navLinks.map(navLink => {
            return (
              <Link key={navLink.id} to={navLink.link} onClick={handleHamburgerMenu} className="w-full p-4 border-b  hover:bg-gradient-to-l hover:from-slate-100 hover:text-primary rounded-md">
                <li>{navLink.title}</li>
              </Link>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Header
