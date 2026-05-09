const projects = [
  {
    title: 'Tool-Kit',
    desc: 'A real-time education information gathering web application.',
    live: 'https://tool-kit-eta.vercel.app/', 
    github: 'https://github.com/karim2762/portfolio-',
  }, 
  {
    title: 'Birthday Site',
    desc: 'A beautiful interactive birthday wishing website.', 
    live: 'https://birthday1-1.netlify.app/', 
    github: 'https://github.com/karim2762/Birthdaydemo', 
  }, 
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="rounded-3xl p-8 bg-white/10 dark:bg-white/5 border border-white/10 hover:-translate-y-2 transition"
            >
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {project.desc}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-5 py-2 rounded-full bg-blue-500 text-white"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="px-5 py-2 rounded-full border border-gray-400"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
