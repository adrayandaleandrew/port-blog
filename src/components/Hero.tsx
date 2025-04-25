const Hero = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-blue-600">Dale Andrew</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get in Touch
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden">
              <img
                src="/assets/image.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
