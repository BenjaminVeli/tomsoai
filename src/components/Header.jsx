import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/index.js";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { BiX } from "react-icons/bi";

const NavItems = ({ onClick }) => (
  <ul className="nav-ul group">
    {navLinks.map(({ id, to, name }) => (
      <li key={id} className="nav-li">
        <ScrollLink
          to={to}
          smooth={true}
          className="cursor-pointer"
          duration={500}
          onClick={onClick}
        >
          {name}
        </ScrollLink>
      </li>
    ))}
  </ul>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <div className="header-lower">
        <div className="container">
          <div className="flex justify-between items-center h-16 lg:h-18">
            <Link href="/" className="text-white font-normal text-xl">
              Tomso
            </Link>

            <nav className="lg:flex hidden">
              <NavItems />
            </nav>

            <button
              onClick={toggleMenu}
              className="lg:invisible flex"
              alt="Toggle menu"
            >
              {isOpen ? (
                <BiX className="h-6 w-6 text-white" />
              ) : (
                <HiOutlineMenuAlt3 className="h-6 w-6 text-white" />
              )}
            </button>
          </div>

          <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
            <nav className="p-5">
              <NavItems onClick={closeMenu} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
