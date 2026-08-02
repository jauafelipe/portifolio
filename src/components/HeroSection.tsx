import { type JSX } from 'react';

export function HeroSection(): JSX.Element {
  return (
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
  );
}