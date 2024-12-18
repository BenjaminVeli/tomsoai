import { motion } from "framer-motion";

import { FaCloud } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsRocketFill } from "react-icons/bs";
import { SiArchlinux } from "react-icons/si";
import { FaFileCode } from "react-icons/fa6";

const toolkit = [
  {
    Icon: FaCloud,
    label: "Cloud",
    title: "title",
    description: "description description descriptiondescription",
  },
  {
    Icon: RiTailwindCssFill,
    label: "Tailwind",
    title: "title",
    description: "description description descriptiondescription",
  },
  {
    Icon: BsRocketFill,
    label: "Rocket",
    title: "title",
    description: "description description descriptiondescription",
  },
  {
    Icon: SiArchlinux,
    label: "arch",
    title: "title",
    description: "description description descriptiondescription",
  },
  {
    Icon: FaFileCode,
    label: "Code",
    title: "title",
    description: "description description descriptiondescription",
  },
];

const Expectation = () => {
  // Duplicamos los elementos para que el carrusel sea continuo
  const items = [...toolkit, ...toolkit];

  return (
    <section id="expectation" className="py-20">
      <div className="container">
        <h2 className="text-4xl md:text-5xl text-center tracking-tighter font-medium text-white mb-5">
          Beyond Expectations
        </h2>
        <p className="text-white/70 text-base md:text-xl text-center tracking-tight [text-wrap:balance] max-w-xl mx-auto">
          Our cutting-edge Tomso AI tools redefine design strategies, empowering
          our clients to innovate like never before.
        </p>

        <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{
              translateX: "0%",
            }}
            animate={{
              translateX: "-50%", // Desplazar la mitad del contenido (debido a los elementos duplicados)
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 15,
            }}
            className="flex gap-10 flex-none"
          >
            {items.map((tool, index) => (
              <div
                key={index}
                className="border border-white/15 hover:border-white/25 cursor-pointer transition-all duration-300 rounded-xl bg-gray-dark flex-none md:max-w-md max-w-sm"
              >
                <div className="flex items-center py-4 md:py-8">
                  <div className="md:w-[130px] md:h-[130px] w-[100px] h-[100px]">
                    <tool.Icon
                      className="text-gray-icons px-5 w-full h-full"
                      aria-label={tool.label}
                    />
                  </div>
                  <div className="flex flex-col pr-2.5 sm:pr-4 lg:pr-10">
                    <h3 className="text-indigo-600 font-medium text-base md:text-lg">
                      {tool.title}
                    </h3>
                    <p className="text-lg md:text-xl text-white">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expectation;