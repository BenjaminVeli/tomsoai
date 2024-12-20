import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
    <Router>
      <div id="preloader">
        <div className="loader">
          <span className="loader--blue">Tomso ai</span>
        </div>
      </div>

      {!loading && (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <main>
                    <Involved />
                    <Features />
                    <Price />
                    <Expectation />
                    <CallToAction />
                  </main>
                </>
              }
            />
            {/* Puedes agregar más rutas aquí si es necesario */}
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;