const skills = [ 
  'HTML', 
  'CSS',
  'JavaScript', 
  'React',
  'Next.js',
  'Tailwind CSS', 
  'Python',
  'GitHub',
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/10 dark:bg-white/5 border border-white/10 hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
