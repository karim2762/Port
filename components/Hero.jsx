'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 font-medium mb-4">Hello 👋</p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Kareem <br /> Basha
          </h1>

          <div className="text-2xl md:text-3xl mt-6 font-semibold text-blue-500 h-20">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Creative Web Builder',
                2000,
                'Frontend Developer',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            I build modern, responsive and interactive web experiences with clean UI and smooth performance.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-blue-500 text-white hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="https://github.com/karim2762"
              className="px-6 py-3 rounded-full border border-gray-400 hover:bg-white/10 transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-60 animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  )
}
