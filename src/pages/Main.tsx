import { useState, type JSX } from 'react';
import {
  Database,
  Server,
  Code2,
  Braces,
  Cpu,
  Workflow,
  Globe,
  Layers3,
  Terminal,
  GitBranch,
  Boxes,
  Sparkles,
} from 'lucide-react';

import {
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
}

export default function Portfolio(): JSX.Element {
  const skills = [
    {
      name: 'ERP Sankhya',
      icon: Boxes,
      color: 'group-hover:text-green-500',
    },
    {
      name: 'Java',
      icon: Code2,
      color: 'group-hover:text-orange-400',
    },
    {
      name: 'Spring Boot',
      icon: Workflow,
      color: 'group-hover:text-green-400',
    },
    {
      name: 'SQL Server',
      icon: Database,
      color: 'group-hover:text-blue-400',
    },
    {
      name: 'T-SQL',
      icon: Terminal,
      color: 'group-hover:text-cyan-400',
    },
    {
      name: 'React',
      icon: Cpu,
      color: 'group-hover:text-sky-400',
    },
    {
      name: 'JavaScript',
      icon: Braces,
      color: 'group-hover:text-yellow-400',
    },
    {
      name: 'APIs REST',
      icon: Globe,
      color: 'group-hover:text-emerald-400',
    },
    {
      name: 'Procedures & Triggers',
      icon: GitBranch,
      color: 'group-hover:text-red-400',
    },
    {
      name: 'Automação de Processos',
      icon: Layers3,
      color: 'group-hover:text-pink-400',
    },
    {
      name: 'Integrações de Sistemas',
      icon: Server,
      color: 'group-hover:text-indigo-400',
    },
    {
      name: 'IA & Produtividade',
      icon: Sparkles,
      color: 'group-hover:text-violet-400',
    },
  ];

  const projects: Project[] = [
    {
      title: 'Integrações com ERP Sankhya',
      description:
        'Desenvolvimento de integrações e automações voltadas para otimização de processos internos, conectando sistemas e melhorando o fluxo de informações da empresa.',
    },
    {
      title: 'APIs REST com Spring Boot',
      description:
        'Criação de APIs robustas utilizando Java e Spring Boot, focadas em performance, segurança e integração entre aplicações.',
    },
    {
      title: 'Banco de Dados SQL Server',
      description:
        'Modelagem de banco de dados, procedures, triggers e consultas T-SQL voltadas para automação e processamento de dados empresariais.',
    },
    {
      title: 'Interfaces Modernas com React',
      description:
        'Desenvolvimento de interfaces responsivas e modernas utilizando React, JavaScript e integração com APIs.',
    },
    {
      title: 'IA Aplicada à Produtividade',
      description:
        'Utilização de Inteligência Artificial para acelerar planejamentos, aumentar produtividade, automatizar tarefas e otimizar fluxos de desenvolvimento e processos corporativos.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }

        .animate-slideUp {
          animation: slideUp 1.2s ease forwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
      <Sidebar />

      <main className="lg:ml-72 transition-all duration-300">
        <section className="min-h-screen flex items-center px-6 md:px-16 py-20 bg-gradient-to-br from-black via-zinc-950 to-zinc-900">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            <div className="relative flex justify-center lg:justify-start animate-fadeIn">
              <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full" />

              <img
                src="PERFIL.png"
                alt="Jauã Felipe"
                className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] object-cover rounded-[40px] border border-zinc-800 shadow-2xl hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="max-w-5xl animate-slideUp">
            <span className="text-zinc-400 tracking-[0.3em] uppercase text-sm">
              Portfólio Profissional
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mt-6">
              Jauã Felipe
            </h1>

            <p className="text-xl md:text-2xl text-zinc-300 mt-6 leading-relaxed max-w-4xl">
              Desenvolvedor focado em ERP Sankhya, Java, banco de dados e
              automação de processos, criando soluções corporativas modernas,
              integrações e sistemas personalizados.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 animate-fadeIn delay-300">
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl">
                Ver Projetos
              </button>

              <button className="border border-zinc-700 px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-900 transition-all duration-300">
                Contato
              </button>
            </div>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="px-6 md:px-16 py-24 bg-zinc-950 border-t border-zinc-900"
        >
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Sobre Mim</h2>

              <p className="text-zinc-300 leading-8 text-lg">
                Tenho 21 anos e sou apaixonado por tecnologia,
                desenvolvimento de software e soluções corporativas voltadas
                para automação e performance.
              </p>

              <p className="text-zinc-400 leading-8 text-lg mt-6">
                Possuo experiência com ERP Sankhya, desenvolvimento de eventos,
                procedures, triggers e criação de telas personalizadas,
                trabalhando diretamente na automação e integração de processos.
              </p>

              <p className="text-zinc-400 leading-8 text-lg mt-6">
                Tenho amplo conhecimento em banco de dados, SQL Server, modelagem e consultas T-SQL, além de utilizar Java no desenvolvimento de soluções escaláveis e eficientes. Também utilizo IA para acelerar planejamentos, produtividade, automações e otimização de processos no desenvolvimento.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="group bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 cursor-pointer"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                      <div className={`transition-all duration-300 ${skill.color}`}>
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
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 hover:border-zinc-600 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 break-words leading-tight">{project.title}</h3>

                  <p className="text-zinc-400 leading-7 break-words text-sm sm:text-base">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
              Disponível para oportunidades na área de desenvolvimento,
              integrações de sistemas, automações e soluções corporativas.
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
      </main>
    </div>
  );
}

function Sidebar(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 left-6 z-50 bg-white text-black px-5 py-3 rounded-2xl font-semibold lg:hidden"
      >
        Menu
      </button>

      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-zinc-950 border-r border-zinc-800 z-50 transform transition-transform duration-500 ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black">fefo_dev</h2>
              <p className="text-zinc-500 mt-2 text-sm">
                Desenvolvedor Full Stack
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="lg:hidden text-zinc-400 text-2xl"
            >
              ×
            </button>
          </div>

          <nav className="mt-16 flex flex-col gap-6 text-lg">
            <a
              href="#sobre"
              className="hover:text-zinc-400 transition-all duration-300"
            >
              Sobre
            </a>

            <a
              href="#habilidades"
              className="hover:text-zinc-400 transition-all duration-300"
            >
              Habilidades
            </a>

            <a
              href="#contato"
              className="hover:text-zinc-400 transition-all duration-300"
            >
              Contato
            </a>
          </nav>

          <div className="mt-auto border-t border-zinc-800 pt-8">
            <p className="text-zinc-500 leading-7 text-sm">
              Especialista em ERP Sankhya, Java, SQL Server, procedures,
              triggers e automação de processos corporativos.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
