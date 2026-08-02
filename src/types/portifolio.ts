import { type  ComponentType } from 'react';
import { type LucideProps } from 'lucide-react';

export interface Skill {
  name: string;
  icon: ComponentType<LucideProps>;
  color: string;
}

export interface Project {
  title: string;
  description: string;
}