import { type JSX } from 'react';
import { SKILLS } from '../data/portfolioData';

export function AboutSection(): JSX.Element {
  return (
    <section
      id="sobre"
      className="px-6 md:px-16 py-24 bg-zinc-950 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">Sobre Mim</h2>

          <p className="text-zinc-300 leading-8 text-lg">
            Tenho 21 anos e sou apaixonado por tecnologia, desenvolvimento de
            software e soluções corporativas voltadas para automação e
            performance.
          </p>

          <p className="text-zinc-400 leading-8 text-lg mt-6">
            Possuo experiência com ERP Sankhya, desenvolvimento de eventos,
            procedures, triggers e criação de telas personalizadas, trabalhando
            diretamente na automação e integração de processos.
          </p>

          <p className="text-zinc-400 leading-8 text-lg mt-6">
            Tenho amplo conhecimento em banco de dados, SQL Server, modelagem e
            consultas T-SQL, além de utilizar Java no desenvolvimento de
            soluções escaláveis e eficientes. Também utilizo IA para acelerar
            planejamentos, produtividade, automações e otimização de processos
            no desenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                  <div
                    className={`transition-all duration-300 ${skill.color}`}
                  >
                    <Icon size={32} />
                  </div>

                  <span className="text-base sm:text-lg font-medium text-white group-hover:text-zinc-100 transition-all duration-300 break-words leading-6">
                    {skill.name}
                  </span>
                </div>

                <div className="h-1 w-0 bg-white rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}