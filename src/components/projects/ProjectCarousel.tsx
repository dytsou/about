import { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { getProjectIconAndColors } from './ProjectIconUtils';
import { CarouselControls } from './CarouselControls';
import './ProjectCarousel.css';

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

  if (projects.length === 0) return null;

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
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-track">
          <div
            className="carousel-slides"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <div key={index} className="carousel-slide">
                <div className={`carousel-slide-content ${isMobile ? 'mobile' : 'desktop'}`}>
                  <ProjectCard
                    project={item.firstProject}
                    projectIndex={item.firstIndex}
                    cardStyle="card-style-primary"
                    isMobile={isMobile}
                    getProjectIconAndColors={getProjectIconAndColors}
                  />
                  {!isMobile && item.secondProject && (
                    <ProjectCard
                      project={item.secondProject}
                      projectIndex={item.secondIndex}
                      cardStyle="card-style-secondary"
                      isMobile={isMobile}
                      getProjectIconAndColors={getProjectIconAndColors}
                    />
                  )}
                  {!isMobile && item.thirdProject && (
                    <ProjectCard
                      project={item.thirdProject}
                      projectIndex={item.thirdIndex}
                      cardStyle="card-style-tertiary"
                      isMobile={isMobile}
                      getProjectIconAndColors={getProjectIconAndColors}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <CarouselControls
          onPrev={prevSlide}
          onNext={nextSlide}
          currentSlide={currentSlide}
          totalSlides={carouselItems.length}
          onGoToSlide={goToSlide}
        />
      </div>
    </div>
  );
}