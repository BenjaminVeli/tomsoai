import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";
import Logo from "/assets/img/logo.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer>
      <div className="footer-upper py-5">
        <div className="container text-white/70">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex gap-2 items-center">
              <img src={Logo} alt="" className="h-6 w-6"/>
              <div className="font-medium">AI Startup Landing Page</div>
            </div>
            <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 justify-center text-center">
              <Link to="hero" className="hover:text-white transition-all duration-300 cursor-pointer" smooth={true} duration={500}>Start</Link>
              <Link to="involved" className="hover:text-white transition-all duration-300 cursor-pointer" smooth={true} duration={500}>Involved</Link>
              <Link to="features" className="hover:text-white transition-all duration-300 cursor-pointer" smooth={true} duration={500}>Features</Link>
              <Link to="expectation" className="hover:text-white transition-all duration-300 cursor-pointer" smooth={true} duration={500}>Expectation</Link>
            </nav>
            <div className="flex gap-5 items-center">
              <RiTwitterXFill className="hover:text-white transition-all duration-300 cursor-pointer" size={24}/>
              <RiInstagramFill className="hover:text-white transition-all duration-300 cursor-pointer" size={24}/>
              <RiFacebookBoxFill className="hover:text-white transition-all duration-300 cursor-pointer" size={24}/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
