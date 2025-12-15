import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Surabhi L',
      role: 'Lead Full Stack Developer',
      image: '/Surabhi.jpeg',
      content: 'Yadhu Krishnan is an exceptional developer with strong problem-solving skills. His expertise in Django and React, combined with his dedication to clean code, makes his an invaluable team member. He consistently delivers high-quality work.',
      rating: 5,
    },
    {
      name: 'Vijay P N',
      role: 'CEO of Inta Solutions, Software Developer',
      image: '/vijay.jpeg',
      content: 'Working with Yadhu krishnan has been a great experience. He is always willing to help and share knowledge. His technical skills in full-stack development and ability to tackle complex challenges are impressive.',
      rating: 5,
    },
    {
      name: 'Rivin Rone',
      role: 'Senior Software Developer',
      image: '/rivin.jpeg',
      content: 'Yadhu Krishnan is a talented developer who brings creativity and technical excellence to every project. His collaborative approach and deep understanding of both frontend and backend make working with his seamless.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-500"></div>

      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              Colleague Testimonials
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full animate-pulse"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            What my colleagues say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up delay-200">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/90 dark:bg-gray-800/60 backdrop-blur-xl border border-gray-200 dark:border-emerald-500/30 rounded-2xl p-6 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-500 hover:scale-110 hover:-translate-y-2 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15 + 0.3}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-500"></div>
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-md opacity-50"></div>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="relative w-16 h-16 rounded-full object-cover border-2 border-emerald-500"
                  />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-emerald-500/30 mb-2" />
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
