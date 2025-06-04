import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "FinMan",
    category: "Development",
    description: "Finance Manager Application",
    image: "../../projectThumbnails/finman.jpg",
    link: "https://finman-anant.netlify.app/",
  },
  {
    id: 2,
    title: "MovieChowk",
    category: "Development",
    description: "Entertainment Database application",
    image: "../../projectThumbnails/moviechowk.png",
    link: "https://moviechowk.netlify.app/",
  },
  {
    id: 3,
    title: "PokeDex",
    category: "Development",
    description: "Pokemon Info Application",
    image: "../../projectThumbnails/pokedex.png",
    link: "https://pokedexv1anant.netlify.app",
  },
  {
    id: 4,
    title: "The Dark Reality E-Comic",
    category: "Design",
    description: "First look of e-comic The Dark Reality",
    image: "../../projectThumbnails/e-comic-thumbnail.png",
    link: "https://www.behance.net/gallery/227427063/The-Dark-Reality-E-Comic-first-look",
  },
  {
    id: 5,
    title: "TimelyPro",
    category: "Design",
    description: "ERMS Application",
    image: "../../projectThumbnails/timelypro.png",
    link: "https://www.behance.net/gallery/194423893/Timely-Pro-ERMS-Application-case-study",
  },
  {
    id: 6,
    title: "KafiKitaab",
    category: "Design",
    description: "Book Cafe Application",
    image: "../../projectThumbnails/kafikitaab.png",
    link: "https://www.behance.net/gallery/193465259/Kafi-Kitaab-book-cafe-mobile-application-casestudy",
  },
  // {
  //   id: 6,
  //   title: "Jiffy",
  //   category: "Design",
  //   description: "Brand Identity",
  //   image: "../../projectThumbnails/jiffy.png",
  //   link: "https://www.behance.net/gallery/190938009/Jiffy-Logistics-Brand-Identity-board",
  // },
  // {
  //   id: 6,
  //   title: "Design Portfolio",
  //   category: "Design",
  //   description: "My Design Portfolio",
  //   image: "../../projectThumbnails/portfolio.png",
  //   link: "https://www.behance.net/gallery/198313225/My-design-Portfolio",
  // },
  // {
  //   id: 7,
  //   title: "KafiKitaab",
  //   category: "Design",
  //   description: "Book Cafe Application",
  //   image: "../../projectThumbnails/kafikitaab.png",
  //   link: "https://www.behance.net/gallery/193465259/Kafi-Kitaab-book-cafe-mobile-application-casestudy",
  // },
  // {
  //   id: 8,
  //   title: "Jiffy",
  //   category: "Design",
  //   description: "Brand Identity",
  //   image: "../../projectThumbnails/jiffy.png",
  //   link: "https://www.behance.net/gallery/190938009/Jiffy-Logistics-Brand-Identity-board",
  // },
  // {
  //   id: 9,
  //   title: "Design Portfolio",
  //   category: "Design",
  //   description: "My Design Portfolio",
  //   image: "../../projectThumbnails/portfolio.png",
  //   link: "https://www.behance.net/gallery/198313225/My-design-Portfolio",
  // },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="bg-[#f9f9f9] py-16">
      <div className="container mx-auto px-6 lg:px-[240px]">
        <h2 className="font-raleway text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        {/* Category Toggles */}
        <div className="flex justify-center gap-4 mb-12">
          {["All", "Design", "Development"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-raleway font-medium text-sm shadow-sm transition ${
                activeCategory === category
                  ? "text-[#2d2d2d] font-semibold"
                  : "text-[#b6b6b6]"
              } hover:bg-gradient-to-r hover:`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block overflow-hidden rounded-xl shadow-lg transform transition hover:scale-105"
            >
              {/* Redirection Icon with Tooltip */}
              <div className="absolute top-3 right-3 z-10">
                <div className="relative group">
                  <div className="bg-white p-1 rounded-full shadow-md">
                    🔗
                  </div>
                  {/* Tooltip */}
                  <div className="w-[130px] absolute right-full top-5 -translate-y-1/2 pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black text-white text-xs px-2 py-1 rounded shadow-lg">
                      Opens in a new tab
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover rounded-xl"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black to-transparent 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-80 transition duration-300"
              ></div>
              {/* Text */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition duration-300"
              >
                <h3 className="text-lg font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
