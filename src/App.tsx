import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Layout Components
import Layout from "./components/layout/Layout";

// Page Components
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";

// Portfolio Components
import ProjectList from "./components/portfolio/ProjectList";

// Blog Components
import BlogList from "./components/blog/BlogList";

// Admin Components
import AdminDashboard from "./components/admin/AdminDashboard";

// Shared Components
import ContactForm from "./components/shared/ContactForm";

const Home = () => (
  <>
    <Hero />
    <AboutMe />
    <TechStack />
  </>
);

const Portfolio = () => (
  <ProjectList
    projects={[
      // Add sample projects here
      {
        id: "1",
        title: "E-commerce Website",
        description: "A sample project description",
        imageUrl:
          "https://api.microlink.io/?url=https://adrayan-e-commerce.vercel.app/&screenshot=true&embed=screenshot.url",
        technologies: ["React", "Tailwind", "Node.js"],
        demoLink: "https://adrayan-e-commerce.vercel.app/",
        githubLink: "https://github.com/adrayandaleandrew/e-commerce-website",
      },

      {
        id: "2",
        title: "Sample Project",
        description: "A sample project description",
        imageUrl: "https://via.placeholder.com/400",
        technologies: ["React", "TypeScript", "Tailwind"],
        demoLink: "https://example.com",
        githubLink: "https://github.com",
      },
    ]}
  />
);

const Blog = () => (
  <BlogList
    posts={[
      // Add sample blog posts here
      {
        id: "1",
        title: "Sample Blog Post",
        excerpt: "This is a sample blog post excerpt...",
        date: "2025-04-25",
        author: "John Doe",
        category: "Technology",
        readTime: "5 min",
      },
    ]}
    currentPage={1}
    totalPages={1}
    onPageChange={() => {}}
  />
);

const Contact = () => (
  <div className="container mx-auto px-4 py-8">
    <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
    <div className="max-w-2xl mx-auto">
      <ContactForm />
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
