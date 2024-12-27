import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";

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
      <section id="contact" className="min-h-screen bg-gray-300">
        <h2 className="text-center text-3xl font-bold">Contact</h2>
        <p className="text-center mt-4">This is the Contact section.</p>
      </section>
    </div>
  );
};

export default App;
