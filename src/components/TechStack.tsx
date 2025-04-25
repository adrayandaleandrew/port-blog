

const TechStack = () => {
  const technologies = {
    'Frontend': ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
    'Backend': ['Node.js', 'Express', 'Python', 'Django'],
    'Database': ['MongoDB', 'PostgreSQL', 'Redis'],
    'Tools': ['Git', 'Docker', 'AWS', 'VS Code']
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category}</h3>
              <ul className="space-y-2">
                {techs.map((tech) => (
                  <li key={tech} className="text-gray-600">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
