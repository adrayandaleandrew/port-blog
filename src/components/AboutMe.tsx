

const AboutMe = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 mb-6">
            I'm a passionate Full Stack Developer with experience in building modern web applications.
            My journey in software development started with a deep curiosity for technology and has
            evolved into a career focused on creating efficient, scalable, and user-friendly solutions.
          </p>
          <p className="text-gray-600 mb-6">
            With a strong foundation in both frontend and backend development, I enjoy tackling complex
            problems and turning ideas into reality through clean, maintainable code.
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Key Highlights:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>X years of professional development experience</li>
              <li>Specialized in React.js and Node.js development</li>
              <li>Strong background in database design and optimization</li>
              <li>Experience with cloud platforms and DevOps practices</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
