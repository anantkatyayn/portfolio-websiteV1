import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import ContactForm from "./Components/Contact";
import Footer from "./Components/Footer";
import Preloader from "./Loader/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let hasLoaded = false;
    let timerDone = false;

    const hideLoader = () => {
      if (hasLoaded && timerDone) {
        setIsLoading(false);
      }
    };

    // Wait at least 2 seconds
    const timer = setTimeout(() => {
      timerDone = true;
      hideLoader();
    }, 2000);

    // Wait until everything is loaded (images, fonts, etc.)
    const handleLoad = () => {
      hasLoaded = true;
      hideLoader();
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    // Cleanup
    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return isLoading ? (
    <Preloader />
  ) : (
    <div>
      <Header />
      <section id="home" className="min-h-screen bg-gray-100">
        <Home />
      </section>
      <section id="about" className="min-h-screen bg-gray-100">
        <About />
      </section>
      <section id="projects" className="min-h-screen bg-gray-200">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default App;
