import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string;
  demoLink: string;
  githubLink: string;
  imageUrl: string;
}

const ProjectEditor = () => {
  const [project, setProject] = useState<Project>({
    title: '',
    description: '',
    technologies: '',
    demoLink: '',
    githubLink: '',
    imageUrl: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Submitting project:', project);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Project Title
        </label>
        <input
          type="text"
          id="title"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
          Technologies (comma-separated)
        </label>
        <input
          type="text"
          id="technologies"
          value={project.technologies}
          onChange={(e) => setProject({ ...project, technologies: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          placeholder="React, TypeScript, Tailwind CSS"
        />
      </div>

      <div>
        <label htmlFor="demoLink" className="block text-sm font-medium text-gray-700">
          Demo Link
        </label>
        <input
          type="url"
          id="demoLink"
          value={project.demoLink}
          onChange={(e) => setProject({ ...project, demoLink: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700">
          GitHub Link
        </label>
        <input
          type="url"
          id="githubLink"
          value={project.githubLink}
          onChange={(e) => setProject({ ...project, githubLink: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="url"
          id="imageUrl"
          value={project.imageUrl}
          onChange={(e) => setProject({ ...project, imageUrl: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Save Project
        </button>
      </div>
    </form>
  );
};

export default ProjectEditor;
