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
    title: "Cloud Computing",
    description: "Innovative cloud solutions for scalable AI",
  },
  {
    Icon: RiTailwindCssFill,
    label: "Tailwind",
    title: "Tailwind CSS",
    description: "Custom UI design with utility-first approach",
  },
  {
    Icon: BsRocketFill,
    label: "Rocket",
    title: "Rocket Launch",
    description: "Boost your AI capabilities with speed",
  },
  {
    Icon: SiArchlinux,
    label: "arch",
    title: "Linux Environment",
    description: "Developed and optimized in a Linux setup",
  },
  {
    Icon: FaFileCode,
    label: "Code",
    title: "AI Code Generation",
    description: "Generating unique coding styles for projects",
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
                      className="text-gray-icons px-5 md:size-[130px] size-[100px]"
                      aria-label={tool.label}
                    />
                  </div>
                  <div className="flex flex-col pr-2.5 sm:pr-4 lg:pr-10 lg:pl-6 sm:pl-2 pl-1">
                    <h3 className="text-indigo-500 font-medium text-base md:text-lg">
                      {tool.title}
                    </h3>
                    <p className="text-lg md:text-xl text-white [text-wrap:balance] leading-6 lg:leading-[27px]">
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