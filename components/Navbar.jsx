'use client'

import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/10 dark:bg-black/20 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Kareem Basha</h1>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  )
}
