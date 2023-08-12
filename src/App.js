import { useEffect } from "react";
import Aos from "aos";

import "./App.css";

import Header from "./assets/components/Header/Header";
import Footer from "./assets/components/Footer/Footer";
import Hero from "./assets/components/UI/Hero";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return <>
    <Header />
    <main>
      <Hero />
    </main>
    <Footer />
  </>
}

export default App;
