import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: "Navigation",
      links: [
        { label: "Home", path: "/" },
        { label: "Portfolio", path: "/portfolio" },
        { label: "Blog", path: "/blog" },
        { label: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "GitHub", path: "https://github.com/adrayandaleandrew" },
        {
          label: "LinkedIn",
          path: "https://www.linkedin.com/in/dale-andrew-adrayan-851622263/",
        },
        { label: "Twitter", path: "https://twitter.com" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dale Andrew</h3>
            <p className="text-gray-400">
              Full Stack Developer creating beautiful and functional web
              applications.
            </p>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.path.startsWith("http") ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
