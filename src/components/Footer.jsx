import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { RiFacebookBoxFill } from "react-icons/ri";
import Logo from "/assets/img/logo.svg";

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
              <a href="#hero" className="hover:text-white transition-all duration-300 cursor-pointer">Start</a>
              <a href="#involved" className="hover:text-white transition-all duration-300 cursor-pointer">Involved</a>
              <a href="#features" className="hover:text-white transition-all duration-300 cursor-pointer">Features</a>
              <a href="#pricing" className="hover:text-white transition-all duration-300 cursor-pointer" >Pricing</a>
              <a href="#expectation" className="hover:text-white transition-all duration-300 cursor-pointer">Expectation</a>
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
