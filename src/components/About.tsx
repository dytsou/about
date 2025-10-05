import { Code2, BookOpen } from 'lucide-react';
import { useGitHub } from '../hooks/useGitHub';

export function About() {
  const { stats } = useGitHub();

  return (
    <section id="about" className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Dong-You Tsou"
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                I'm a Computer Science student at{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  National Yang Ming Chiao Tung University
                </span>
                {' '}in Taiwan. I'm passionate about building scalable
                backend systems and creating seamless full-stack applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                As Vice President of NYCU Software Development Club
                , I lead a community of developers and organize technical workshops. I also
                serve on the Agenda Committee for SITCON, Taiwan's largest student-run tech
                conference.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                My research experience spans research testing on software quality at the Software Quality Lab
                and video-based 3D object detection on autonomous driving at the Applied Computing and Multimedia
                Lab. I enjoy exploring the intersection of practical engineering and cutting-edge
                research.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {stats?.public_repos || '20+'}
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Public Repos</div>
              </div>

              <div className="p-4 bg-cyan-50 dark:bg-cyan-900/20 rounded-xl border border-cyan-200 dark:border-cyan-800">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">2</div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Research Labs</div>
              </div>
            </div>

            <div className="pt-4">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
                <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Most Used Languages
                </h5>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    { name: 'Python', color: 'bg-blue-500' },
                    { name: 'C++', color: 'bg-blue-700' },
                    { name: 'C', color: 'bg-gray-600' },
                    { name: 'Shell', color: 'bg-green-500' },
                    { name: 'JavaScript', color: 'bg-yellow-500' },
                    { name: 'Verilog', color: 'bg-purple-500' },
                    { name: 'Go', color: 'bg-cyan-500' },
                    { name: 'Cuda', color: 'bg-green-600' },
                  ].map((lang) => (
                    <div key={lang.name} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className={`w-2 h-2 rounded-full ${lang.color} shadow-sm`}></div>
                      <div className={`font-medium text-gray-900 dark:text-white ${lang.name.length > 10 ? 'text-xs' :
                        lang.name.length > 6 ? 'text-sm' : 'text-sm'
                        }`}>
                        {lang.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

