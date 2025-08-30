import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const data = [
  {
    title: 'Cipher Stream',
    desc: 'A real-time, end-to-end encrypted chat with WebRTC and WebSockets.',
    tech: ['React', 'TypeScript', 'WebRTC'],
    link: '#',
  },
  {
    title: 'Neon Grid',
    desc: 'Interactive grid visualizer with GPU-accelerated animations.',
    tech: ['React', 'WebGL', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Matrix CLI',
    desc: 'Terminal-style portfolio powered by serverless functions.',
    tech: ['Next.js', 'Edge Runtime', 'Tailwind'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-[#031a0e]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.06)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-10 relative">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2 text-emerald-300">
            <Code size={18} />
            <h2 className="text-2xl md:text-3xl font-semibold">Selected Projects</h2>
          </div>
          <a href="#" className="text-sm text-emerald-300/80 hover:text-emerald-300 transition">View all</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {data.map((p) => (
            <article key={p.title} className="group relative rounded-xl border border-emerald-400/20 bg-black/60 p-5 hover:border-emerald-400/40 transition shadow-[0_0_30px_rgba(16,185,129,0.08)]">
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent" />
              <div className="flex items-start justify-between">
                <h3 className="text-emerald-300 text-lg font-semibold">{p.title}</h3>
                <a aria-label={`Open ${p.title}`} href={p.link} target="_blank" rel="noreferrer" className="text-emerald-200/80 hover:text-emerald-300 transition">
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="text-emerald-200/80 text-sm mt-2">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded border border-emerald-400/30 text-emerald-300/90">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div id="contact" className="mt-16 rounded-xl border border-emerald-400/20 bg-black/60 p-6">
          <h3 className="text-emerald-300 text-xl font-semibold">Let’s build something</h3>
          <p className="text-emerald-200/80 mt-2 max-w-2xl">Available for freelance and full-time opportunities. I love complex problems, delightful motion, and crisp performance budgets.</p>
          <a href="mailto:hello@example.com" className="inline-block mt-4 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-black px-5 py-3 font-semibold transition">hello@example.com</a>
        </div>
      </div>
    </section>
  );
}
