import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import packageJson from "../../package.json";

const Footer = () => {
  const openMailClient = () => {
    window.location.href =
      "mailto:anantkatyayn112@gmail.com?subject=Hello&body=Hi Anant, I wanted to reach out.";
  };
  return (
    <footer className="bg-[#f9f9f9] text-gray-700 py-12">
      <div className="container mx-auto px-6 lg:px-[240px]">
        {/* Main Section */}
        <div className="flex flex-wrap justify-between items-center mb-8">
          {/* Brand Info */}
          <div className="mb-6 lg:mb-0 lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-gray-800">
              Anant Katyayn
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Crafting beautiful solutions.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 justify-center lg:justify-end lg:w-1/2">
            <a
              href="https://github.com/anantkatyayn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/anantkatyayn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://behance.net/anantkatyayn"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition text-2xl"
              aria-label="Behance"
            >
              <FaBehance />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300"></div>

        {/* Bottom Section */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Designed & Built with{" "}
            <span className="text-red-500 font-raleway">&hearts;</span> by Anant
            Katyayn.
          </p>
          <p className="text-sm text-gray-500 mt-2">
          Version: {packageJson.version}
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
