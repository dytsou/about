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

export function getProjectIconAndColors(project: any) {
  const tech = (project.technologies || []).map((t: string) => t.toLowerCase());
  const title = String(project.title || '').toLowerCase();

  // Explicit title-based mappings
  if (title.includes('core system')) {
    return { Icon: LayoutDashboard, bgClass: 'from-slate-50 to-gray-100 dark:from-slate-800/40 dark:to-gray-800/40', iconClass: 'text-slate-700 dark:text-slate-300' };
  }
  if (title.includes('caiender') || title.includes('caiendar') || title.includes('calendar')) {
    return { Icon: CalendarDays, bgClass: 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20', iconClass: 'text-cyan-600 dark:text-cyan-400' };
  }
  if (title.includes('ballquest')) {
    return { Icon: CircleDot, bgClass: 'from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20', iconClass: 'text-orange-600 dark:text-orange-400' };
  }
  if (title.includes('dungeon')) {
    return { Icon: Puzzle, bgClass: 'from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20', iconClass: 'text-violet-600 dark:text-violet-400' };
  }
  if (title.includes('reversi')) {
    return { Icon: Disc, bgClass: 'from-zinc-50 to-slate-50 dark:from-zinc-800/40 dark:to-slate-800/40', iconClass: 'text-zinc-700 dark:text-zinc-300' };
  }

  if (tech.includes('go') || title.includes('backend')) {
    return { Icon: Terminal, bgClass: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20', iconClass: 'text-blue-600 dark:text-blue-400' };
  }
  if (tech.includes('docker')) {
    return { Icon: Boxes, bgClass: 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20', iconClass: 'text-cyan-600 dark:text-cyan-400' };
  }
  if (tech.includes('postgresql') || tech.includes('database')) {
    return { Icon: Database, bgClass: 'from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20', iconClass: 'text-indigo-600 dark:text-indigo-400' };
  }
  if (tech.includes('graphql')) {
    return { Icon: Layers, bgClass: 'from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20', iconClass: 'text-pink-600 dark:text-pink-400' };
  }
  if (tech.includes('flutter') || tech.includes('dart')) {
    return { Icon: Rocket, bgClass: 'from-sky-50 to-cyan-50 dark:from-sky-900/20 dark:to-cyan-900/20', iconClass: 'text-sky-600 dark:text-sky-400' };
  }
  if (tech.includes('c++') || tech.includes('c') || title.includes('game')) {
    return { Icon: Cpu, bgClass: 'from-gray-50 to-slate-50 dark:from-gray-800/40 dark:to-slate-800/40', iconClass: 'text-gray-700 dark:text-gray-300' };
  }
  if (tech.includes('ai') || tech.includes('llm') || title.includes('ai')) {
    return { Icon: Bot, bgClass: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20', iconClass: 'text-emerald-600 dark:text-emerald-400' };
  }

  // Default web app
  return { Icon: Globe, bgClass: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20', iconClass: 'text-blue-600 dark:text-blue-400' };
}
