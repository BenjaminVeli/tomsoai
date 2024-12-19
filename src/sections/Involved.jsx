import { motion } from "framer-motion";
import { involvedCompanies } from "../constants";

const Involved = () => {
  // Duplicamos los elementos para que el carrusel sea continuo
  const companies = [...involvedCompanies, ...involvedCompanies];

  return (
    <section id="involved" className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-neutral-400 text-xl text-center mb-12">
          Involved<span className="text-white inline"> in this AI</span>
        </h2>

        <div className="flex justify-center items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: "0" }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="flex flex-none gap-14 translate-x-1/2"
          >
            {companies.map((involvedCompanies, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={involvedCompanies.envolvedImg}
                  alt={involvedCompanies.alt}
                  className="h-7 w-auto"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Involved;
