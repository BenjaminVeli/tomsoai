import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Involved from "./sections/Involved";
import Expectation from "./sections/Expectation";
import Features from "./sections/Features";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <main>
        <Involved />
        <Features />
        <Expectation />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
