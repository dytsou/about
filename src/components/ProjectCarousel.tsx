import { useState, useEffect } from 'react';
import {
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
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

interface Project {
  id: string;
  title: string;
  description: string;
  short_description: string;
  technologies: string[];
  github_url?: string;
  live_url?: string;
  image_url?: string;
  featured?: boolean;
}

interface ProjectCarouselProps {
  projects: Project[];
  featured?: boolean;
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [expandedDescriptions, setExpandedDescriptions] = useState<Set<number>>(new Set());
  const [expandedTags, setExpandedTags] = useState<Set<number>>(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and update mobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleDescription = (projectIndex: number) => {
    setExpandedDescriptions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectIndex)) {
        newSet.delete(projectIndex);
      } else {
        newSet.add(projectIndex);
      }
      return newSet;
    });
  };

  const toggleTags = (projectIndex: number) => {
    setExpandedTags(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectIndex)) {
        newSet.delete(projectIndex);
      } else {
        newSet.add(projectIndex);
      }
      return newSet;
    });
  };

  if (projects.length === 0) return null;

  // Calculate average description length to determine which descriptions are significantly longer
  const averageDescriptionLength = projects.reduce((sum, project) => sum + project.description.length, 0) / projects.length;
  const shouldShowSeeMore = (description: string) => description.length > averageDescriptionLength * 1.8; // 80% longer than average - only for very long descriptions

  // Calculate average number of technologies to determine when to show more tags
  const averageTechnologiesCount = projects.reduce((sum, project) => sum + project.technologies.length, 0) / projects.length;
  const shouldShowMoreTags = (technologies: string[]) => technologies.length > averageTechnologiesCount * 1.5; // 50% more than average

  // (Removed) Primary language badge helpers

  // Pick icon and colors based on project technologies/title
  const getProjectIconAndColors = (project: any) => {
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
  };

  // Create carousel items - responsive: 1 project on mobile, 3 on desktop
  const carouselItems = isMobile
    ? projects.map((project, index) => ({
      firstProject: project,
      secondProject: null,
      firstIndex: index,
      secondIndex: null,
      thirdProject: null,
      thirdIndex: null
    }))
    : (() => {
      const items = [];
      for (let i = 0; i < projects.length; i += 3) {
        const firstProject = projects[i];
        const secondProject = projects[(i + 1) % projects.length];
        const thirdProject = projects[(i + 2) % projects.length];
        items.push({
          firstProject: firstProject,
          secondProject: secondProject,
          firstIndex: i,
          secondIndex: (i + 1) % projects.length,
          thirdProject: thirdProject,
          thirdIndex: (i + 2) % projects.length
        });
      }
      return items;
    })();

  const ProjectCard = ({ project, projectIndex, cardStyle }: { project: any, projectIndex: number, cardStyle: string }) => (
    <div className={`${isMobile ? 'w-full max-w-2xl' : ''} flex flex-col justify-between ${cardStyle} rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02]`}>
      <div className={`w-full p-6 lg:p-8 flex flex-col justify-between h-full`}>
        <div className="space-y-3 flex-1">
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-1">
              {(() => {
                const { Icon, iconClass } = getProjectIconAndColors(project);
                return (
                  <span className="inline-flex items-center gap-3 flex-wrap">
                    <Icon className={`w-6 h-6 ${iconClass}`} />
                    <span>{project.title}</span>
                  </span>
                );
              })()}
            </h3>
            <div className="relative">
              <p className={`text-base text-gray-700 dark:text-gray-300 leading-relaxed ${expandedDescriptions.has(projectIndex) ? '' : 'line-clamp-5'}`}>
                {project.description}
              </p>
              {shouldShowSeeMore(project.description) && (
                <button
                  onClick={() => toggleDescription(projectIndex)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm mt-2 transition-colors"
                >
                  {expandedDescriptions.has(projectIndex) ? 'See less' : 'See more'}
                </button>
              )}
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, expandedTags.has(projectIndex) ? project.technologies.length : 5).map((tech: string, index: number) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {shouldShowMoreTags(project.technologies) && !expandedTags.has(projectIndex) && (
              <button
                onClick={() => toggleTags(projectIndex)}
                className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
              >
                +{project.technologies.length - 5} more
              </button>
            )}
            {expandedTags.has(projectIndex) && shouldShowMoreTags(project.technologies) && (
              <button
                onClick={() => toggleTags(projectIndex)}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                Show less
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-3 mt-auto">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-semibold text-sm"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-2xl">
        {/* Carousel Container */}
        <div className="relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className={`${isMobile ? 'flex justify-center' : 'grid xl:grid-cols-3'} gap-6 min-h-[350px] lg:min-h-[400px] p-6`}>
                  <ProjectCard
                    project={item.firstProject}
                    projectIndex={item.firstIndex}
                    cardStyle="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20"
                  />
                  {!isMobile && item.secondProject && (
                    <ProjectCard
                      project={item.secondProject}
                      projectIndex={item.secondIndex}
                      cardStyle="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20"
                    />
                  )}
                  {!isMobile && item.thirdProject && (
                    <ProjectCard
                      project={item.thirdProject}
                      projectIndex={item.thirdIndex}
                      cardStyle="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 pb-4">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide
                ? 'bg-blue-600 dark:bg-blue-400'
                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}