import {
  Boxes,
  Cpu,
  Terminal,
  Database,
  Globe,
  Bot,
  Rocket,
  Layers,
  LayoutDashboard,
  CalendarDays,
  CircleDot,
  Puzzle,
  Disc
} from 'lucide-react';
import { ComponentType } from 'react';
import './ProjectIconUtils.css';

interface Project {
  title: string;
  technologies?: string[];
}

export function getProjectIconAndColors(project: Project): { Icon: ComponentType<{ className?: string }>; bgClass: string; iconClass: string } {
  const tech = (project.technologies || []).map((t: string) => t.toLowerCase());
  const title = String(project.title || '').toLowerCase();

  // Explicit title-based mappings
  if (title.includes('core system')) {
    return { Icon: LayoutDashboard, bgClass: 'project-icon-bg-core-system', iconClass: 'project-icon-core-system' };
  }
  if (title.includes('caiender') || title.includes('caiendar') || title.includes('calendar')) {
    return { Icon: CalendarDays, bgClass: 'project-icon-bg-calendar', iconClass: 'project-icon-calendar' };
  }
  if (title.includes('ballquest')) {
    return { Icon: CircleDot, bgClass: 'project-icon-bg-ballquest', iconClass: 'project-icon-ballquest' };
  }
  if (title.includes('dungeon')) {
    return { Icon: Puzzle, bgClass: 'project-icon-bg-dungeon', iconClass: 'project-icon-dungeon' };
  }
  if (title.includes('reversi')) {
    return { Icon: Disc, bgClass: 'project-icon-bg-reversi', iconClass: 'project-icon-reversi' };
  }

  if (tech.includes('go') || title.includes('backend')) {
    return { Icon: Terminal, bgClass: 'project-icon-bg-backend', iconClass: 'project-icon-backend' };
  }
  if (tech.includes('docker')) {
    return { Icon: Boxes, bgClass: 'project-icon-bg-docker', iconClass: 'project-icon-docker' };
  }
  if (tech.includes('postgresql') || tech.includes('database')) {
    return { Icon: Database, bgClass: 'project-icon-bg-database', iconClass: 'project-icon-database' };
  }
  if (tech.includes('graphql')) {
    return { Icon: Layers, bgClass: 'project-icon-bg-graphql', iconClass: 'project-icon-graphql' };
  }
  if (tech.includes('flutter') || tech.includes('dart')) {
    return { Icon: Rocket, bgClass: 'project-icon-bg-flutter', iconClass: 'project-icon-flutter' };
  }
  if (tech.includes('c++') || tech.includes('c') || title.includes('game')) {
    return { Icon: Cpu, bgClass: 'project-icon-bg-game', iconClass: 'project-icon-game' };
  }
  if (tech.includes('ai') || tech.includes('llm') || title.includes('ai')) {
    return { Icon: Bot, bgClass: 'project-icon-bg-ai', iconClass: 'project-icon-ai' };
  }

  // Default web app
  return { Icon: Globe, bgClass: 'project-icon-bg-default', iconClass: 'project-icon-default' };
}
