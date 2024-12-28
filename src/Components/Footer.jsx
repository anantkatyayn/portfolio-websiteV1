const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-6 lg:px-[240px]">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-between items-center text-center lg:text-left mb-6">
            <div className="mb-4 lg:mb-0">
              <h2 className="text-2xl font-bold text-white">Anant Katyayn</h2>
              <p className="text-sm text-gray-400">Creative Developer & Designer</p>
            </div>
            <div className="flex gap-6 justify-center lg:justify-end">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Twitter
              </a>
            </div>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-600"></div>
  
          {/* Copyright */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Anant Katyayn. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  