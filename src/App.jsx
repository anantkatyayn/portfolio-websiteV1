import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import ContactForm from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <section id="home" className="min-h-screen bg-gray-100">
        <Home/>
      </section>
      <section id="about" className="min-h-screen bg-gray-100">
        <About/>
      </section>
      <section id="projects" className="min-h-screen bg-gray-200">
        <Projects/>
      </section>
      <section id="contact" className="min-h-screen ">
        <ContactForm/>
      </section>
      <Footer/>
      
    </div>
  );
};

export default App;
