interface ProjectDetailProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  longDescription: string;
  challenges: string[];
  solutions: string[];
  onClose: () => void;
}

const ProjectDetail = ({
  title,
  description,
  imageUrl,
  technologies,
  demoLink,
  githubLink,
  longDescription,
  challenges,
  solutions,
  onClose,
}: ProjectDetailProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded-lg mb-6" />
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span key={tech} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-4 mb-6">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Live Demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                GitHub
              </a>
            )}
          </div>
          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>
            <p className="mb-6">{longDescription}</p>
            <h3 className="text-xl font-semibold mb-4">Challenges & Solutions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-medium mb-2">Challenges</h4>
                <ul className="list-disc pl-5">
                  {challenges.map((challenge, index) => (
                    <li key={index} className="mb-2">{challenge}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium mb-2">Solutions</h4>
                <ul className="list-disc pl-5">
                  {solutions.map((solution, index) => (
                    <li key={index} className="mb-2">{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
