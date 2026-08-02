import { type JSX } from 'react';
import { PROJECTS } from '../data/portfolioData';

export function SkillsSection(): JSX.Element {
  return (
    <section
      id="habilidades"
      className="px-6 md:px-16 py-24 bg-black border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
            Experiência
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Habilidades & Tecnologias
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 hover:border-zinc-600 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words leading-tight">
                {project.title}
              </h3>

              <p className="text-zinc-400 leading-7 break-words text-sm sm:text-base">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}