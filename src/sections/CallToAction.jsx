import { Link } from "react-scroll";
import { Reveal } from "../utils/Reveal";

const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="border border-white/15 py-24 rounded-xl overflow-hidden relative"
          style={{ backgroundImage: "url(/assets/img/stars.png)" }}
        >
          <div
            className="absolute inset-0 bg-[rgb(74,32,138)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{ backgroundImage: "url(/assets/img/grid-lines.png)" }}
          ></div>
          <Reveal>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl md:max-w-md max-w-xs mx-auto tracking-tighter text-center font-medium text-white">
              AI-driven STYLE for everyone.
            </h2>
            <p className="text-center text-lg md:text-xl max-w-xs mx-auto text-white/70 px-4 mt-5 tracking-tight">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <Link to="pricing" className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] text-white to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] cursor-pointer" smooth={true} duration={500}>
                <div className="absolute inset-0">
                  <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                  <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                  <div className="absolute inset-0 show-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
                </div>
                <span>Get Started</span>
              </Link>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
