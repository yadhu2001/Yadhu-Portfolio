import { ExternalLink, Github, Database, Cloud, Lock, Users } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Investors Portal',
      description: 'A comprehensive investor management system with secure authentication and admin CMS. Features include portfolio tracking, investment analytics, and real-time updates.',
      tags: ['Django', 'React', 'PostgreSQL', 'AWS', 'JWT'],
      icon: Lock,
      highlights: ['Secure Authentication', 'Admin Dashboard', 'Real-time Analytics', 'AWS Deployment'],
      github: 'https://github.com/yadhu2001/Lakshya-Investors-Webpage',
      status: 'Production',
      color: 'emerald',
    },
    {
      title: 'Career Connect',
      description: 'Placement management portal streamlining recruitment processes. Handles student registration, drive scheduling, application tracking, and automated notifications.',
      tags: ['Django', 'PostgreSQL', 'Bootstrap', 'REST API'],
      icon: Users,
      highlights: ['Student Portal', 'Drive Management', 'Email Automation', 'Report Generation'],
      github: 'https://github.com/yadhu2001/CareerConnect',
      status: 'Live',
      color: 'cyan',
    },
    {
      title: 'Career Page',
      description: 'Recruitment automation platform designed to optimize hiring workflows. Features candidate tracking, interview scheduling, and AI-powered resume screening.',
      tags: [' Node.js', 'Postgressql', 'React', 'AWS S3'],
      icon: Database,
      highlights: ['Candidate Tracking', 'Interview Scheduler', 'Resume Parser', 'Analytics Dashboard'],
      github: 'https://github.com/yadhu2001/Career---Page',
      status: 'Active',
      color: 'blue',
    },
    {
      title: 'Finance_Vendor_Form',
      description: 'This form is for vendors who wish to officially partner with our organization. Please provide accurate business and contact details for verification. Approved vendors will be added to our database and considered for future opportunities. Ensure all information is complete and correct before submission.',
      tags: ['Python', 'Django', 'SQLite','HTML'],
      icon: Cloud,
      highlights: ['Vendor Tracking', 'Vendor Registration', 'Maintenance Logs'],
      github: 'https://github.com/yadhu2001/Finance_Vendor_Form',
      status: 'Deployed',
      color: 'violet',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing production-ready applications that solve real-world problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up delay-200">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/90 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-emerald-500/30 rounded-2xl overflow-hidden hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:rotate-1 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15 + 0.3}s`, transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/10 rounded-2xl transition-all duration-500"></div>
              <div className="relative p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <project.icon className="w-8 h-8 text-emerald-500 dark:text-emerald-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-all duration-500 group-hover:translate-x-1">
                        {project.title}
                      </h3>
                      <span className="inline-block mt-1 px-3 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold rounded-full">
                        {project.status}
                      </span>
                    </div>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cyan-50 dark:bg-gray-700/50 text-cyan-700 dark:text-cyan-400 text-xs font-medium rounded-full border border-cyan-200 dark:border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/yadhu2001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/50 font-semibold animate-fade-in-up delay-500"
          >
            <Github className="w-5 h-5" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
