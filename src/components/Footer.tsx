const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              GitHub
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="hover:text-gray-300">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
