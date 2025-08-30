import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-emerald-400/20">
      <div className="container mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-emerald-200/70 text-sm">© {new Date().getFullYear()} Neo Dev. Built with React + Vite.</p>
        <div className="flex items-center gap-5 text-emerald-200/80">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-emerald-300 transition"><Github size={18} /></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-emerald-300 transition"><Linkedin size={18} /></a>
          <a aria-label="Email" href="mailto:hello@example.com" className="hover:text-emerald-300 transition"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
