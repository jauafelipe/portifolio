import { useState, type JSX } from 'react';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { HeroSection } from '../components/HeroSection';
import { SkillsSection } from '../components/SkillsSection';
import { Sidebar } from '../components/Sidebar';

export default function Portfolio(): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

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

      {/* Componente Modular da Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <main className="lg:ml-72 transition-all duration-300 min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}