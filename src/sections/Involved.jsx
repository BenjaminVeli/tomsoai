import { motion } from "framer-motion";
import { involvedCompanies } from "../constants";

const Involved = () => {
  return (
    <section id="involved" className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-neutral-400 text-lg text-center mb-12 cursor-pointer">
          Information about those<span className="text-white block sm:inline"> involved in this AI</span>
        </h2>

        <div className="flex justify-center items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
            className="flex flex-none gap-14 translate-x-1/2"
          >
            {involvedCompanies.map((company, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={company.envolvedImg}
                  alt={company.alt}
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
