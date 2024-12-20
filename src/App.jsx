import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Involved from "./sections/Involved";
import Features from "./sections/Features";
import Price from "./sections/Pricing";
import Expectation from "./sections/Expectation";
import CallToAction from "./sections/CallToAction";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preloader = document.getElementById("preloader");

    const timer = setTimeout(() => {
      if (preloader) {
        preloader.classList.add("fade-out");
        setLoading(false); // Cambia el estado a false después del timeout
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="preloader">
        <div className="loader">
          <span className="loader--blue">Tomso</span>
        </div>
      </div>

      {!loading && (
      <>
        <Header />
        <Hero />

        <main>
          <Involved />
          <Features />
          <Price />
          <Expectation />
          <CallToAction />
        </main>

        <Footer />
      </>
      )}
    </>
  );
}

export default App;
