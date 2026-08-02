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
import type { Skill, Project } from '../types/portifolio';

export const SKILLS: Skill[] = [
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

export const PROJECTS: Project[] = [
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