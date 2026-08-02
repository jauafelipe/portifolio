import { type JSX } from 'react';
import { X, Menu } from 'lucide-react';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Sidebar({ open, setOpen }: SidebarProps): JSX.Element {
  return (
    <>
      {/* Botão Hambúrguer Mobile */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 left-6 z-40 bg-zinc-900/90 text-white p-3 rounded-2xl border border-zinc-800 lg:hidden shadow-lg backdrop-blur-md"
        aria-label="Abrir Menu"
      >
        <Menu size={24} />
      </button>

      {/* Overlay escuro para fechar ao clicar fora (Mobile) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/70 z-40 lg:hidden backdrop-blur-sm"
        />
      )}

      {/* Sidebar Lateral */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-zinc-950 border-r border-zinc-800 z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-8 flex flex-col h-full">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-black text-white">fefo_dev</h2>
              <p className="text-zinc-500 mt-2 text-sm">
                Desenvolvedor Full Stack
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="lg:hidden text-zinc-400 hover:text-white p-2"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mt-16 flex flex-col gap-6 text-lg">
            <a
              href="#sobre"
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-white transition-all duration-300"
            >
              Sobre
            </a>

            <a
              href="#habilidades"
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-white transition-all duration-300"
            >
              Habilidades
            </a>

            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-white transition-all duration-300"
            >
              Contato
            </a>
            <a
              href="https://fetec.vercel.app/" target="_blank" rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-white transition-all duration-300"
            >
              Visitar FETEC
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