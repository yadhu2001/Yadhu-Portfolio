import { Code, Database, Cloud, Zap } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Code, label: 'Years Experience', value: '1+' },
    { icon: Database, label: 'Projects Completed', value: '20+' },
    { icon: Cloud, label: 'AWS Deployments', value: '10+' },
    { icon: Zap, label: 'Technologies', value: '15+' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16 animate-fade-in-up delay-200">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a passionate <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Full Stack Developer</span>, I specialize in building robust web applications using cutting-edge technologies. With expertise in Python, Django, React, and AWS, I transform business requirements into elegant, scalable solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My journey in software development has equipped me with a deep understanding of both frontend and backend ecosystems. I thrive on solving complex problems and creating seamless user experiences that make a real impact.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Beyond coding, I'm passionate about <span className="text-cyan-600 dark:text-cyan-400 font-semibold">continuous learning</span>, staying ahead of industry trends, and contributing to the developer community through open-source projects.
            </p>
            <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 dark:text-gray-400">
              "True intelligence goes beyond knowledge—it thrives in imagination."
            </blockquote>
          </div>

          <div className="relative animate-bounce-slow">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl blur-2xl animate-pulse"></div>
            <div className="relative bg-white/90 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-emerald-500/30 rounded-2xl p-8 space-y-4 shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:scale-105">
              <div className="space-y-3">
                <InfoRow label="Name" value="Yadhu Krishnan P S" />
                <InfoRow label="Location" value="Kochi, Kerala" />
                <InfoRow label="Email" value="yadhu.k0007@gmail.com" />
                <InfoRow label="Phone" value="8921298997" />
                <InfoRow label="Education" value="BSc Computer Seience" />
                <InfoRow label="Availability" value="Open for Opportunities" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up delay-400">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white/90 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/20 group-hover:to-cyan-500/20 rounded-xl transition-all duration-500"></div>
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow"></div>
              <div className="relative">
                <stat.icon className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700/50">
      <span className="text-gray-600 dark:text-gray-400 font-medium">{label}:</span>
      <span className="text-emerald-600 dark:text-emerald-400">{value}</span>
    </div>
  );
}
