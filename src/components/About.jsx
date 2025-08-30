import React from 'react';
import { Cpu, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-black to-[#031a0e]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.06),transparent_35%)] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-10 relative">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 px-3 py-1 text-emerald-300 bg-black/50">
              <Cpu size={16} />
              <span className="text-xs tracking-widest uppercase">About</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-emerald-300">Crafting clean code and slick UIs</h2>
            <p className="text-emerald-200/80">
              I specialize in building fast, accessible, and animated web apps. My toolkit includes React, TypeScript, Node, and modern CSS.
            </p>
            <div className="rounded-lg border border-emerald-400/20 bg-black/50 p-4 shadow-[0_0_30px_rgba(16,185,129,0.08)]">
              <div className="flex items-center gap-2 text-emerald-300 mb-3">
                <Terminal size={16} />
                <span className="text-sm">console.log</span>
              </div>
              <pre className="text-emerald-200 text-sm overflow-auto"><code>{`const neo = {
  role: 'Frontend Engineer',
  stack: ['React', 'TypeScript', 'Node', 'Tailwind', 'Framer Motion'],
  currently: 'Exploring WebGL & 3D UI',
  location: 'Remote / Worldwide',
};`}</code></pre>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-4">
            {[
              { title: 'Performance', desc: 'Lighthouse-focused, code-splitting, caching.' },
              { title: 'Animations', desc: 'Tasteful motion with Framer Motion & CSS.' },
              { title: 'Accessibility', desc: 'Keyboard-first, ARIA, color contrast.' },
              { title: 'Tooling', desc: 'Vite, Vitest, PNPM, Turbo, CI/CD.' },
            ].map((item) => (
              <li key={item.title} className="rounded-lg border border-emerald-400/20 bg-black/50 p-5 hover:border-emerald-400/40 transition">
                <h3 className="text-emerald-300 font-semibold">{item.title}</h3>
                <p className="text-emerald-200/80 text-sm mt-1">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
