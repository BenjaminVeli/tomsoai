import { Link } from "react-scroll";
import { BsArrowDown } from "react-icons/bs";
import { Reveal } from "../utils/Reveal";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{ backgroundImage: "url(/assets/img/stars.png)" }}
    >
      <div className="container relative">
        <div className="min-h-[70vh] flex items-center">
          <div className="relative z-10 text-center mx-auto lg:max-w-4xl">
            <Reveal className="">
              <h1 className="text-white text-[2.7rem] sm:text-7xl xl:text-8xl leading-none">
                Power<span className="text-ai block lg:inline"> Tomso AI</span>
              </h1>
            </Reveal>
            <Reveal>
              <h2 className="text-white my-5 font-medium text-base lg:text-lg">
                The best AI for generating custom coding styles with Tailwind
                CSS.
              </h2>
            </Reveal>
            <div className="mb-2">
              <Link
                to="involved"
                smooth={true}
                duration={500}
                className="bg-white rounded-lg transition-all duration-300 hover:bg-gray-300 inline-block py-2 px-4 text-black text-base cursor-pointer"
              >
                <div className="flex items-center">
                  <span>Get Started</span>
                  <BsArrowDown className="h-3 w-3 text-black ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
