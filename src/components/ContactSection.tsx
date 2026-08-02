import { type JSX } from 'react';
import { FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

export function ContactSection(): JSX.Element {
  return (
    <section
      id="contato"
      className="px-6 md:px-16 py-24 border-t border-zinc-900 bg-zinc-950"
    >
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-zinc-500 uppercase tracking-[0.3em] text-sm">
          Contato
        </span>

        <h2 className="text-5xl font-black mt-6 leading-tight">
          Vamos criar algo incrível juntos.
        </h2>

        <p className="text-zinc-400 text-lg leading-8 mt-8">
          Disponível para oportunidades na área de desenvolvimento, integrações
          de sistemas, automações e soluções corporativas.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="https://www.linkedin.com/in/jau%C3%A3-felipe-bb2b322ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl"
          >
            <FaLinkedin size={22} />
            LinkedIn
          </a>

          <a
            href="https://github.com/jauafelipe"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-900 transition-all duration-300 inline-flex items-center gap-3"
          >
            <FaGithub size={22} />
            GitHub
          </a>

          <a
            href="https://guns.lol/im_fefo"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-indigo-500/40 bg-indigo-500/10 px-8 py-4 rounded-2xl font-semibold hover:bg-indigo-500/20 transition-all duration-300 inline-flex items-center gap-3"
          >
            <FaDiscord size={22} />
            Discord
          </a>
        </div>
      </div>
    </section>
  );
}