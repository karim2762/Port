'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackgroundAnimation from '@/components/BackgroundAnimation'

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white overflow-hidden transition-all duration-500">
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
