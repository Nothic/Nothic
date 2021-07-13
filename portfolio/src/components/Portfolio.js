const Portfolio = () => {
  return (
    <div>
      <section id="projects">
        <div
          id="project1"
          className="mx-auto px-10 py-20 bg-green-600 text-white rounded-sm"
        >
          <h1 className="text-3xl mb-4">Projects</h1>
          <h2>Home Docker Server</h2>
          <p>
            I was frustrated at having to copy my files between multiple
            devices. Hence, I built a desktop server of my own and put a couple
            of drives in it. You can find associated docker-compose files to
            help build your home media storage device too on my Github.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
