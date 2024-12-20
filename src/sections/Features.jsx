import { DotLottiePlayer } from "@dotlottie/react-player";
import ProductImage from "/assets/img/product-image.png";
import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { Reveal } from "../utils/Reveal";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = (tab) => {
  const dotLottieRef = useRef(null);

  const xPercentage = useMotionValue(100);
  const yPercentage = useMotionValue(50);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black, transparent)`;

  useEffect(() => {
    const options = {
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], options);
    animate(yPercentage, [0, 0, 100, 100, 0], options);
  }, );

  const handleTabHover = () => {
    if (dotLottieRef.current) {
      dotLottieRef.current.seek(0);
      dotLottieRef.current.play(); // Utilizamos `DotLottieCommonPlayer` para reproducir la animación
    }
  };

  return (
    <Reveal>
      <div
      onMouseEnter={handleTabHover}
      className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center text-white lg:flex-1 relative"
    >
      <motion.div
        style={{
          maskImage: maskImage,
        }}
        className="absolute inset-0 -m-px border border-[#A369FF] rounded-xl"
      ></motion.div>
      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={tab.icon}
          className="h-5 w-5 cursor-pointer"
          autoplay={false} // Desactivamos autoplay para que solo reproduzca al hover
        />
      </div>
      <div className="font-medium">{tab.title}</div>
      {tab.isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#6c44ff] text-black font-semibold">
          New
        </div>
      )}
    </div>
    </Reveal>
    
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-24">
      <div className="container">
        <Reveal>
          <h2 className="text-4xl md:text-5xl text-center tracking-tighter font-medium text-white mb-5">
            Elevate your Styles
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-white/70 text-base md:text-xl text-center tracking-tight [text-wrap:balance] max-w-xl mx-auto">
            From small startups to large enterprises, our AI-driven tool has
            revolutionized the way businesses elevate their styles in web
            design.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab) => (
            <FeatureTab {...tab} key={tab.title} />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <div
            className="aspect-video bg-cover border border-white/20 rounded-lg"
            style={{
              backgroundImage: `url(${ProductImage})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
