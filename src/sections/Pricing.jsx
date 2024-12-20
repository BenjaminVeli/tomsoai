import { FaCheck } from "react-icons/fa";
import { Reveal } from "../utils/Reveal";

const data = [
  {
    title: "Free",
    titleClasses: "text-white font-semibold text-2xl",
    description: "",
    descriptionClasses: "",
    price: "0",
    features: [
      "Generate up to 10 custom styles per month",
      "Access to basic Tailwind CSS templates",
      "Community support",
      "Basic customization options",
    ],
    featuresClasses: "my-10 flex-1",
    height: "h-100",
    borderClasses: "border-white/15 hover:border-white/25 bg-gray-dark",
    extraClasses: "md:border-r-0",
  },
  {
    title: "Plus",
    titleClasses: "text-white font-semibold text-2xl flex items-center gap-2",
    description: "Popular",
    descriptionClasses:
      "ml-1 text-xs uppercase rounded border border-green-neon px-1 py-0 text-green-neon font-bold",
    price: "20",
    features: [
      "Unlimited custom style generation",
      "Advanced Tailwind CSS template library",
      "Priority customer support",
      "Style suggestions based on project type",
    ],
    featuresClasses: "md:my-14 my-10 flex-1",
    height: "md:h-105 h-100",
    borderClasses:
      "border-green-neon hover:border-greenh-neon bg-greenbg-neon bg-opacity-5",
    extraClasses: "",
  },
  {
    title: "Pro",
    titleClasses: "text-white font-semibold text-2xl",
    description: "",
    descriptionClasses: "",
    price: "40",
    features: [
      "All Plus features included",
      "AI-powered real-time style preview",
      "Export ready-to-use Tailwind CSS code",
      "Team collaboration tools",
    ],
    featuresClasses: "my-10 flex-1",
    height: "h-100",
    borderClasses: "border-white/15 hover:border-white/25 bg-gray-dark",
    extraClasses: "md:border-l-0",
  },
];

const Price = () => {
  return (
    <section id="pricing" className="py-20 md:py-24">
      <div className="container">
        <Reveal>
          <h2 className="text-4xl md:text-5xl text-center tracking-tighter font-medium text-white mb-10">
            Pricing
          </h2>
        </Reveal>

        <div className="flex flex-col justify-center md:flex-row gap-8 md:gap-0 items-center">
          {data.map((plan, index) => (
            <div
              key={index}
              className={`p-6 border cursor-pointer transition-all duration-300 rounded-xl ${plan.height} ${plan.borderClasses} ${plan.extraClasses}`}
            >
              <h3 className={` ${plan.titleClasses}`}>
                {plan.title}
                <span className={` ${plan.descriptionClasses}`}>
                  {plan.description}
                </span>
              </h3>
              <p className="text-xl text-white">
                ${plan.price} <span className="text-lg">{" / "}month</span>
              </p>
              <div className={` ${plan.featuresClasses}`}>
                <ul className="inline-flex flex-col gap-2 text-left text-neutral-400">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCheck />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] text-white to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] cursor-pointer">
                  <div className="absolute inset-0">
                    <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                    <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                    <div className="absolute inset-0 show-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
                  </div>
                  <span>Subscribe to {plan.title}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
