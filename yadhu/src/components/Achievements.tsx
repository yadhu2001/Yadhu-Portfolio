import { Award, Trophy, Target, Zap } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Award,
      title: 'AWS Certified',
      description: 'Solutions Architect Associate',
      color: 'from-amber-400 to-orange-500',
    },
    {
      icon: Trophy,
      title: 'Top Performer',
      description: 'Employee of the Quarter Q2',
      color: 'from-emerald-400 to-cyan-500',
    },
    {
      icon: Target,
      title: '99.9% Uptime',
      description: 'Production Systems',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: '100% On-Time Project Completion',
      color: 'from-violet-400 to-purple-500',
    },
  ];

  const certifications = [
    {
      name: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      year: '2024',
      image: 'https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Python Full Stack Developer',
      issuer: 'Syneefo Solutions',
      year: '2023',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      year: '2024',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              Achievements & Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in-up delay-200">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:scale-105 hover:-translate-y-2 text-center shadow-lg hover:shadow-emerald-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/10 rounded-xl transition-all duration-300"></div>
              <div className="relative">
                <div className={`inline-block p-3 rounded-xl bg-gradient-to-r ${achievement.color} mb-4 group-hover:scale-110 transition-all duration-300 shadow-md`}>
                  <achievement.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-3xl font-bold text-center mb-10">
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent">
              Professional Certifications
            </span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up delay-400">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-emerald-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-emerald-500 rounded-lg shadow-lg">
                    <span className="text-sm font-bold text-white">{cert.year}</span>
                  </div>
                </div>
                <div className="relative p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {cert.name}
                  </h4>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
