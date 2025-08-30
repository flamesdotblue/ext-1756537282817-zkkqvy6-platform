import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      <nav className="relative z-10 flex items-center justify-between px-6 md:px-10 py-6">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_20px_2px_rgba(16,185,129,0.8)]" />
          <span className="text-emerald-300 tracking-widest">MATRIX.DEV</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-emerald-200/80">
          <a className="hover:text-emerald-300 transition" href="#about">About</a>
          <a className="hover:text-emerald-300 transition" href="#projects">Projects</a>
          <a className="hover:text-emerald-300 transition" href="#contact">Contact</a>
        </div>
      </nav>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-black/40 px-4 py-2 text-emerald-300 backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs tracking-widest uppercase">System Online</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-emerald-300 drop-shadow-[0_0_25px_rgba(16,185,129,0.35)]">
            Hello, I am Neo Dev
          </h1>
          <p className="mt-4 text-emerald-200/80 max-w-2xl mx-auto">
            Building immersive, performant web experiences. Retro matrix vibes, modern stack.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md border border-emerald-400/40 bg-black/50 px-5 py-3 text-emerald-200 hover:bg-emerald-400/10 transition">
              <Rocket size={18} /> Explore Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-black px-5 py-3 font-semibold transition">
              Contact
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-5 text-emerald-200/80">
            <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-emerald-300 transition"><Github size={20} /></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-emerald-300 transition"><Linkedin size={20} /></a>
            <a aria-label="Email" href="mailto:hello@example.com" className="hover:text-emerald-300 transition"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </header>
  );
}
