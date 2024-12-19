import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Involved from "./sections/Involved";
import Features from "./sections/Features";
import Price from "./sections/Pricing";
import Expectation from "./sections/Expectation";
import CallToAction from "./sections/CallToAction";

function App() {
  return (
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
  );
}

export default App;
