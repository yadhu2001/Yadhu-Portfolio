import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Indian Institute of Commerce Lakshya',
      location: 'Kochi, Kerala',
      period: 'July 2023 - Present',
      type: 'Full-time',
      responsibilities: [
        'Architected and delivered custom web applications for student admissions, counseling workflows, and result distribution systems',
        'Managed AWS cloud infrastructure (EC2, S3, RDS, VPC) ensuring 99.9% uptime and optimal performance',
        'Developed RESTful APIs for seamless frontend-backend integration with React applications',
        'Implemented secure authentication systems using JWT and role-based access control',
        'Led agile development sprints and collaborated with cross-functional teams',
        'Optimized database queries reducing response time by 40%',
      ],
      technologies: ['Python', 'Django', 'React', 'AWS', 'PostgreSQL', 'REST API', 'Git'],
    },
  ];

  const achievements = [
    {
      title: 'System Architecture',
      description: 'Designed scalable microservices architecture handling 10,000+ daily users',
    },
    {
      title: 'Performance Optimization',
      description: 'Improved application load time by 60% through code optimization and caching',
    },
    {
      title: 'Team Leadership',
      description: 'Mentored junior developers and conducted code reviews maintaining 95% code quality',
    },
    {
      title: 'Cloud Migration',
      description: 'Successfully migrated 5+ applications to AWS with zero downtime',
    },
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"></div>

      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              Professional Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* TIMELINE STYLE (replaces the big card container) */}
        <div className="space-y-12 animate-fade-in-up delay-200">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10 sm:pl-12">
              {/* vertical line */}
              <div className="absolute left-4 sm:left-5 top-0 bottom-0 w-px bg-emerald-500/30 dark:bg-emerald-400/30" />

              {/* dot */}
              <div className="absolute left-4 sm:left-5 top-2 -translate-x-1/2 w-4 h-4 bg-emerald-500 rounded-full ring-4 ring-white dark:ring-gray-950" />

              {/* period (like screenshot 1) */}
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</div>

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="space-y-2">
                  {/* Company + role layout like screenshot 1 */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                  <div className="text-lg font-semibold text-gray-700 dark:text-gray-200">{exp.title}</div>

                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.type}
                    </div>
                  </div>
                </div>

                {/* keep the type badge (no container box) */}
                <span className="inline-block self-start px-4 py-2 bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-sm font-semibold rounded-full border border-cyan-200 dark:border-cyan-500/30">
                  {exp.type}
                </span>
              </div>

              {/* Responsibilities (unchanged content) */}
              <div className="space-y-4 mb-6">
                <h4 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">Key Responsibilities:</h4>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <div className="mt-2 w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies (unchanged content) */}
              <div>
                <h4 className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-cyan-50 dark:bg-gray-700/50 text-cyan-700 dark:text-cyan-400 text-sm font-medium rounded-full border border-cyan-200 dark:border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements section (unchanged) */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <h4 className="text-lg font-semibold text-emerald-600 dark:text-emerald-400 mb-3">{achievement.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
