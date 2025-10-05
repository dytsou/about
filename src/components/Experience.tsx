import { Briefcase, GraduationCap, Calendar, MapPin, ExternalLink } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      type: 'leadership',
      title: 'Vice President',
      organization: 'NYCU Software Development Club',
      orgUrl: 'https://www.sdc.nycu.club',
      period: 'Oct 2023 - Present',
      location: 'Hsinchu, Taiwan',
      description: [
        'Leading a community of 100+ student developers',
        'Organizing technical workshops and hackathons',
        'Managing club operations and strategic planning',
        'Mentoring students in software development'
      ],
      posts: [
        {
          title: 'From Behind-the-Scenes to Driving the Community | LinkedIn',
          subtitle: 'Reflecting on my journey as Administration Committee of NYCU Software Development Club',
          url: 'https://tsou.me/SDC-post',
          orgUrl: 'https://www.sdc.nycu.club',
          date: 'Aug 2025'
        }
      ],
      icon: Briefcase,
      color: 'blue'
    },
    {
      type: 'leadership',
      title: 'Agenda Committee Member',
      organization: 'SITCON, Students\' Information Technology Conference',
      orgUrl: 'https://sitcon.org/2025',
      period: 'Oct 2024 - Mar 2025',
      location: 'Taiwan',
      description: [
        'Curating technical content for Taiwan\'s largest student tech conference',
        'Reviewing and selecting speaker proposals',
        'Coordinating with speakers and organizing sessions',
        'Contributing to conference planning and execution'
      ],
      posts: [
        {
          title: 'A Journey from Participation to Creation | LinkedIn',
          subtitle: 'My experience curating content for Taiwan\'s largest student tech conference as an Agenda Committee member',
          url: 'https://tsou.me/SITCON-post',
          orgUrl: 'https://sitcon.org/2025',
          date: 'May 2025'
        }
      ],
      icon: Briefcase,
      color: 'cyan'
    },
    {
      type: 'research',
      title: 'Member',
      organization: 'Software Quality Lab',
      orgUrl: 'https://sqlab.web.nycu.edu.tw',
      period: 'Sep 2025 - Present',
      location: 'NYCU',
      description: [
        'Researching impact of AI-generated testing on software quality',
        'Analyzing test coverage and effectiveness metrics',
        'Collaborating with PhD students on research methodology',
        'Contributing to academic publications'
      ],
      icon: GraduationCap,
      color: 'green'
    },
    {
      type: 'research',
      title: 'Member',
      organization: 'Applied Computing and Multimedia Lab',
      orgUrl: ' http://acm.cs.nycu.edu.tw/',
      period: 'Sep 2024 - Aug 2025',
      location: 'NYCU',
      description: [
        'Working on video-based 3D object detection',
        'Implementing computer vision algorithms',
        'Processing and analyzing large-scale video datasets',
        'Optimizing model performance and accuracy'
      ],
      icon: GraduationCap,
      color: 'purple'
    }
  ];

  const education = {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'National Yang Ming Chiao Tung University',
    period: 'Sep 2022 - Jun 2026 (Expected)',
    location: 'Hsinchu, Taiwan',
    highlights: [
      'Focus on Software Engineering and Systems',
      'Active member of Software Development Club',
      'Participating in research labs and projects',
      'Building practical applications and contributing to open source'
    ]
  };

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      border: 'border-blue-500',
      icon: 'text-blue-600 dark:text-blue-400',
      dot: 'bg-blue-600'
    },
    cyan: {
      bg: 'bg-cyan-50 dark:bg-cyan-900/20',
      border: 'border-cyan-500',
      icon: 'text-cyan-600 dark:text-cyan-400',
      dot: 'bg-cyan-500'
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      border: 'border-green-500',
      icon: 'text-green-600 dark:text-green-400',
      dot: 'bg-green-600'
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-900/20',
      border: 'border-purple-500',
      icon: 'text-purple-600 dark:text-purple-400',
      dot: 'bg-purple-600'
    }
  };

  return (
    <section id="experience" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>

        <div className="mb-16 p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border-l-4 border-blue-600">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {education.institution}
              </h3>
              <div className="text-xl text-gray-900 dark:text-white font-semibold mb-3">
                {education.degree}
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {education.period}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {education.location}
                </div>
              </div>
              <ul className="space-y-2">
                {education.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const colors = colorClasses[exp.color as keyof typeof colorClasses];
              const Icon = exp.icon;

              return (
                <div key={index} className="relative pl-20">
                  <div className={`absolute left-6 w-5 h-5 rounded-full ${colors.dot} border-4 border-white dark:border-gray-800`}></div>

                  <div className={`p-6 ${colors.bg} rounded-xl border-2 ${colors.border} shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md`}>
                        <Icon className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`text-xl font-bold ${colors.icon}`}>
                            {exp.organization}
                          </h3>
                          {exp.orgUrl && (
                            <a
                              href={exp.orgUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                              title="Visit organization website"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <div className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          {exp.title}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {exp.description.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                              <span className={colors.icon}>•</span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        {exp.posts && exp.posts.length > 0 && (
                          <div className="mt-4">
                            <div className="space-y-2">
                              {exp.posts.map((post, idx) => (
                                <a
                                  key={idx}
                                  href={post.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors group"
                                >
                                  <div className="flex-1">
                                    <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer hover:underline">
                                      {post.title}
                                    </div>
                                    {post.subtitle && (
                                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                        {post.subtitle}
                                      </div>
                                    )}
                                    <div className="flex items-center gap-2 mt-1">
                                      <div className="text-xs text-gray-500 dark:text-gray-400">
                                        {post.date}
                                      </div>
                                      {post.orgUrl && (
                                        <>
                                          <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
                                          <span className="text-xs text-gray-500 dark:text-gray-400">
                                            Organization
                                          </span>
                                        </>
                                      )}
                                    </div>
                                  </div>
                                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
