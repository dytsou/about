import { Mail, Github, Linkedin } from 'lucide-react';

export function Contact() {

  return (
    <section id="contact" className="min-h-screen py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat
            about technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Let's Connect
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <a
                  href="https://www.linkedin.com/in/dytsou/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border-2 border-blue-200 dark:border-blue-800 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg transform hover:-translate-y-1 group"
                >
                  <div className="p-4 bg-blue-600 rounded-full group-hover:scale-110 transition-transform">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 dark:text-white mb-2">
                      LinkedIn
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">
                      https://www.linkedin.com/in/dytsou/
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/dytsou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transition-all hover:shadow-lg transform hover:-translate-y-1 group"
                >
                  <div className="p-4 bg-gray-900 rounded-full group-hover:scale-110 transition-transform">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 dark:text-white mb-2">
                      GitHub
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      @dytsou
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:contact@dy.tsou.me"
                  className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-800/20 rounded-xl border-2 border-cyan-200 dark:border-cyan-800 hover:border-cyan-500 dark:hover:border-cyan-500 transition-all hover:shadow-lg transform hover:-translate-y-1 group"
                >
                  <div className="p-4 bg-cyan-600 rounded-full group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 dark:text-white mb-2">
                      Email Me
                    </div>
                    <div className="text-sm text-cyan-600 dark:text-cyan-400 break-all">
                      contact@dy.tsou.me
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border-2 border-blue-200 dark:border-blue-800">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Looking for opportunities in:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">Backend Development Roles</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <span className="w-3 h-3 bg-cyan-500 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">Full-Stack Engineering Positions</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <span className="w-3 h-3 bg-green-600 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">Research Collaborations</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <span className="w-3 h-3 bg-purple-600 rounded-full"></span>
                  <span className="text-gray-700 dark:text-gray-300">Quality Assurance Engineering Positions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}