import {
  Code2,
  Database,
  Cloud,
  Zap,
  GitBranch,
  Palette,
  FileCode,
  Plug,
  Box,
  Sparkles,
  Layout,
  Gauge,
  PenTool,
  ShieldCheck,
  Orbit,
} from 'lucide-react';

export default function Skills() {
  // ✅ skills NOT changed
  const skills = [
    { name: 'React', level: 90, icon: Code2, color: 'from-cyan-400 to-blue-500', iconColor: 'text-cyan-400' },
    { name: 'Python', level: 95, icon: Code2, color: 'from-blue-500 to-yellow-500', iconColor: 'text-blue-400' },
    { name: 'Django', level: 90, icon: Box, color: 'from-green-500 to-emerald-600', iconColor: 'text-emerald-400' },
    { name: 'JavaScript', level: 88, icon: Zap, color: 'from-yellow-400 to-orange-500', iconColor: 'text-yellow-400' },
    { name: 'MongoDB', level: 85, icon: Database, color: 'from-green-400 to-emerald-500', iconColor: 'text-green-400' },
    { name: 'AWS', level: 80, icon: Cloud, color: 'from-orange-400 to-red-500', iconColor: 'text-orange-400' },
    { name: 'SQL', level: 85, icon: Database, color: 'from-blue-400 to-indigo-500', iconColor: 'text-blue-400' },
    { name: 'REST API', level: 92, icon: Plug, color: 'from-emerald-400 to-cyan-500', iconColor: 'text-emerald-400' },
    { name: 'Git/GitHub', level: 88, icon: GitBranch, color: 'from-gray-600 to-gray-800', iconColor: 'text-gray-600 dark:text-gray-400' },
    { name: 'CSS/SCSS', level: 90, icon: Palette, color: 'from-pink-400 to-purple-500', iconColor: 'text-pink-400' },
    { name: 'HTML5', level: 95, icon: FileCode, color: 'from-orange-500 to-red-600', iconColor: 'text-orange-500' },
    { name: 'Bootstrap', level: 85, icon: Code2, color: 'from-purple-500 to-indigo-600', iconColor: 'text-purple-500' },
  ];

  const capabilities = [
    { label: 'Full Stack Development', icon: Sparkles },
    { label: 'React Development', icon: Layout },
    { label: 'Performance Optimization', icon: Gauge },
    { label: 'UI/UX Design', icon: PenTool },
    { label: 'Code Reviews', icon: ShieldCheck },
    { label: 'Advanced Motion', icon: Orbit },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-[#0a1222] dark:to-gray-950 transition-colors duration-500"></div>

      {/* Modern ambient (cleaner, not messy) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-[-6rem] w-[28rem] h-[28rem] bg-emerald-500/10 dark:bg-emerald-500/14 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 left-[-6rem] w-[28rem] h-[28rem] bg-cyan-500/10 dark:bg-cyan-500/14 rounded-full blur-3xl"></div>
        <div
          className="absolute inset-0 opacity-[0.06] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)',
            backgroundSize: '26px 26px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Same-height columns */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch animate-fade-in-up">
          {/* LEFT */}
          <div className="lg:col-span-8 flex flex-col">
            {/* header */}
            <div className="mb-10">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                  Technical Skills
                </span>
              </h2>

              <div className="mt-3 flex items-center gap-3">
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full" />
                <div className="w-10 h-1 bg-white/10 dark:bg-white/10 rounded-full" />
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
                Constantly evolving skill set with expertise across the full stack
              </p>
            </div>

            {/* grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 flex-1">
              {skills.map((skill, index) => (
                <div key={index} className="group relative">
                  {/* premium gradient stroke */}
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-emerald-500/22 via-cyan-500/18 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* modern glass card */}
                  <div
                    className="
                      relative h-[96px] rounded-2xl px-5
                      bg-white/[0.55] dark:bg-white/[0.04]
                      backdrop-blur-xl
                      border border-gray-200/50 dark:border-white/10
                      shadow-[0_12px_28px_rgba(0,0,0,0.10)]
                      dark:shadow-[0_18px_50px_rgba(0,0,0,0.55)]
                      flex items-center gap-4
                      transition-all duration-500
                      group-hover:-translate-y-1.5
                      group-hover:shadow-[0_22px_55px_rgba(34,211,238,0.10)]
                    "
                  >
                    {/* subtle sheen */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-white/0 via-white/6 to-white/0" />

                    {/* icon chip */}
                    <div
                      className="
                        h-12 w-12 rounded-2xl grid place-items-center
                        bg-gray-100/60 dark:bg-white/5
                        border border-gray-200/50 dark:border-white/10
                        transition-transform duration-500
                        group-hover:scale-110
                      "
                    >
                      <skill.icon className={`w-6 h-6 ${skill.iconColor}`} />
                    </div>

                    {/* label */}
                    <div className="min-w-0 w-full">
                      <div className="text-gray-900 dark:text-white font-semibold text-lg truncate">
                        {skill.name}
                      </div>

                      {/* clean accent line */}
                      <div className="mt-2 h-[2px] w-28 rounded-full bg-gray-200/60 dark:bg-white/10 overflow-hidden">
                        <div className={`h-full w-full bg-gradient-to-r ${skill.color} opacity-70 group-hover:opacity-95 transition-opacity duration-500`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Make right side stretch to match left height */}
            <div className="flex-1">
              <div className="lg:pt-[6px]">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Core Strengths
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 mb-6">
                  What you can expect from my work.
                </p>
              </div>

              {/* Distribute items so column height feels balanced */}
              <div className="h-full flex flex-col justify-between">
                <div className="space-y-5">
                  {capabilities.map((item, i) => (
                    <div
                      key={i}
                      className="
                        group flex items-center gap-4
                        rounded-2xl px-2 py-2
                        transition-all duration-300
                        hover:bg-white/30 dark:hover:bg-white/5
                        hover:backdrop-blur-md
                      "
                    >
                      <div className="relative">
                        <div
                          className="
                            h-12 w-12 rounded-full grid place-items-center
                            bg-gradient-to-br from-emerald-500/14 to-cyan-500/14
                            border border-emerald-500/18 dark:border-cyan-500/18
                            shadow-[0_14px_30px_rgba(0,0,0,0.12)]
                            dark:shadow-[0_18px_45px_rgba(0,0,0,0.55)]
                            transition-transform duration-300
                            group-hover:-translate-y-0.5 group-hover:scale-[1.04]
                          "
                        >
                          <item.icon className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />
                        </div>

                        {/* modern ring glow */}
                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ring-1 ring-emerald-500/25 dark:ring-cyan-500/25" />
                      </div>

                      <div className="flex-1">
                        <div className="text-gray-800 dark:text-gray-200 font-medium">
                          {item.label}
                        </div>
                        <div className="mt-2 h-[2px] w-40 rounded-full bg-gray-200/60 dark:bg-white/10 overflow-hidden">
                          <div className="h-full w-full bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-65 transition-opacity duration-300" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ✅ footer removed as you asked */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
