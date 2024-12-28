import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../../public/cartoon dp without bg.png"; 
import circlePattern1 from "../../public/bg pattern.png"; 
import circlePattern2 from "../../public/Ellipse 21.png"; 
import baseImage from "../../public/bg pattern.png"; 

const Home = () => {
  return (
    <section className="relative bg-[#f9f9f9] min-h-screen flex items-center overflow-hidden">
      {/* Base Image */}
      <img
        src={baseImage}
        alt="Base Pattern"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Ellipse 21 (Quarter Circles) */}
      <img
        src={circlePattern2}
        alt="Ellipse Top Right"
        className="absolute w-[200px] h-[200px] top-[-20px] right-[-110px] md:w-[250px] md:h-[250px] md:top-[-10px] md:right-[-90px] lg:w-[600px] lg:h-[600px] lg:top-[-300px] lg:right-[-300px]"
      />
      <img
        src={circlePattern2}
        alt="Ellipse Bottom Left"
        className="absolute w-[200px] h-[200px] bottom-[-70px] md:w-[250px] md:h-[250px] md:bottom-[-30px] md:left-[-110px] left-[-110px] lg:w-[600px] lg:h-[600px] lg:bottom-[-300px] lg:left-[-300px]"
      />

      <div className="container mx-auto px-6 lg:px-[240px] flex flex-col lg:flex-row items-center relative z-10">
        {/* Text Section */}
        <div className="font-raleway text-center lg:text-left lg:w-1/2 relative mt-24 lg:mt-0">
          <h4 className="text-lg md:text-lg lg:text-xl font-medium text-gray-500">
            <Typewriter
              words={['Designer', 'Developer', 'Artist']}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h4>
          <h1 className="text-4xl lg:text-[54px] font-bold mt-4 leading-tight">
            Hello I'm <br />
            <span className="text-[#313e8e]">Anant Katyayn</span>
          </h1>
          <p className="font-lato text-gray-600 mt-4 leading-relaxed  text-sm md:text-base lg:text-base">
            I bring ideas to life through creativity and technology. With a passion for design, development, and art, I craft experiences that inspire and connect. Let’s create something extraordinary together.
          </p>
          <button className="mt-6 px-6 py-3 border-2 border-[#313e8e] text-[#313e8e] font-semibold rounded-[32px] hover:bg-[#313e8e] hover:text-white transition">
            GET IN TOUCH
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-12 lg:mt-24 flex justify-center">
          {/* Circular Pattern 1 (Behind Image, Properly Aligned) */}
          <img
            src={circlePattern1}
            alt="Circular Pattern Behind"
            className="absolute w-[700px] h-auto md:w-[1000px] lg:w-[1200px] lg:h-auto -z-10 top-[75%] left-[25%] lg:top-[50%] lg:left-[45%] transform -translate-x-1/2 -translate-y-1/2 object-contain"
          />

          {/* Profile Image */}
          <div className="relative">
            <img
              src={profileImage}
              alt="Anant Katyayn"
              className="relative z-5 -sm:mb-[2px] max-w-[300px] md:max-w-[450px] lg:max-w-[600px] drop-shadow-[0_35px_35px_rgba(49,62,142,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
