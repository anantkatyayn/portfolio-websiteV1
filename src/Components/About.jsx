import React from "react";
import CV from "/AnantKatyaynResume.pdf";
import BGElements from "./BGElements";

const About = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-[#e1e1e1] z-20 -mt-2 pt-[72px] lg:pt-[96px] pb-20 flex items-center lg:h-auto overflow-hidden">
      <BGElements />

      <div className="container mx-auto px-6 lg:px-[240px] z-20 py-16 flex flex-col gap-12">
        {/* First Row: Why Hire Me and My Skills */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
          {/* Left Section: Why Hire Me */}
          <div className="lg:w-1/2 md:w-3/4 text-center lg:text-left">
            <h2 className="font-raleway text-3xl font-bold mb-4">
              Why Hire Me?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto lg:mx-0">
              I am a creative problem solver with expertise in design,
              development, and branding. With a proven ability to deliver
              engaging and impactful solutions, I ensure your brand stands out
              and connects with your audience.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition"
              >
                HIRE ME
              </button>
              <a href={CV} download>
                <button className="text-black px-6 py-3 transition">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Right Section: My Skills */}
          <div className="lg:w-1/2 md:w-3/4 sm:w-3/4 text-center lg:text-left">
            <h2 className="font-raleway text-3xl font-bold mb-4">Services</h2>
            <div className="space-y-6">
              {/* Skill 1 */}
              <div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold font-lato">
                    FrontEnd Development
                  </span>
                </div>
                <div className="bg-[#6f6f6f] h-[1.5px] rounded-full mt-2"></div>
              </div>
              {/* Skill 2 */}
              <div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold font-lato">
                    UX Design
                  </span>
                </div>
                <div className="bg-[#6f6f6f] h-[1.5px] rounded-full mt-2"></div>
              </div>
              {/* Skill 3 */}
              <div>
                <div className="flex justify-between">
                  <span className="text-gray-700 font-semibold font-lato">
                    Graphic Design
                  </span>
                </div>
                <div className="bg-[#6f6f6f] h-[1.5px] rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Tech Stack */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-center lg:text-left mb-4">
            My Tech Stack
          </h2>
          <div className="space-y-4 ">
            {/* Row 1 */}
            <div className="flex flex-wrap justify-evenly lg:justify-between items-center gap-4 ">
              <div className="flex items-center gap-2 w-1/2 sm:w-auto">
                <img src="/HTML.svg" alt="HTML5" className="w-6 h-6" />
                <span>HTML</span>
              </div>
              <div className="flex items-center gap-2 w-1/2 sm:w-auto">
                <img src="/css.svg" alt="CSS3" className="w-6 h-6" />
                <span>CSS</span>
              </div>
              <div className="flex items-center gap-2 w-1/2 sm:w-auto">
                <img
                  src="/javascript.svg"
                  alt="JavaScript"
                  className="w-6 h-6"
                />
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-2 w-1/2 sm:w-auto">
                <img src="/cpp.svg" alt="C++" className="w-6 h-6" />
                <span>C++</span>
              </div>
            </div>
            <div className="border-t border-gray-300"></div>
            {/* Row 2 */}
            <div className="flex flex-wrap justify-evenly lg:justify-evenly items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 w-1/2 sm:w-auto">
                <img src="/react.svg" alt="React" className="w-6 h-6" />
                <span>React</span>
              </div>
              <div className="flex items-center gap-2 w-1/2 sm:w-auto">
                <img
                  src="/TailwindCSS.svg"
                  alt="Tailwind CSS"
                  className="w-6 h-6"
                />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 w-1/2 sm:w-auto">
                <img
                  src="/shadcn-ui-seeklogo.svg"
                  alt="Material UI"
                  className="w-6 h-6"
                />
                <span>Shadcn/ui</span>
              </div>
            </div>
            <div className="border-t border-gray-300"></div>
            {/* Row 3 */}
            <div className="flex flex-wrap justify-evenly lg:justify-between items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 w-1/2 sm:w-auto">
                <img src="/git.svg" alt="Git" className="w-6 h-6" />
                <span>Git/Github</span>
              </div>
              <div className="flex items-center gap-2 w-1/2 sm:w-auto">
                <img
                  src="/illustrator.svg"
                  alt="Illustrator"
                  className="w-6 h-6"
                />
                <span>Illustrator</span>
              </div>
              <div className="flex items-center gap-2 w-1/2 sm:w-auto">
                <img src="/figma.svg" alt="Figma" className="w-6 h-6" />
                <span>Figma</span>
              </div>
              <div className="flex items-center gap-2 w-1/2 sm:w-auto">
                <img src="/photoshop.svg" alt="Photoshop" className="w-6 h-6" />
                <span>Photoshop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
