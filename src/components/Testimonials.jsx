import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO at TechFlow',
    content: 'AutoTask transformed how our team operates. The AI prioritization is phenomenal – we\'ve increased productivity by 40% in just two months. It\'s not just a tool, it\'s a game-changer.',
    rating: 5,
    avatar: 'bg-gradient-to-br from-purple-400 to-pink-600',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Product Manager at Innovate Labs',
    content: 'I\'ve tried countless task managers, but AutoTask is in a league of its own. The smart scheduling feature alone saves me 10+ hours weekly. My team actually enjoys using it!',
    rating: 5,
    avatar: 'bg-gradient-to-br from-blue-400 to-cyan-600',
  },
  {
    name: 'Emily Watson',
    role: 'Founder & Designer at Pixel Studio',
    content: 'As a creative professional, I need tools that enhance my flow, not disrupt it. AutoTask does exactly that. The interface is beautiful, intuitive, and incredibly powerful.',
    rating: 5,
    avatar: 'bg-gradient-to-br from-orange-400 to-red-600',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Testimonials = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-300/20 to-indigo-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-purple-300/20 to-pink-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4"
          >
            Testimonials
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6">
            Loved by thousands of
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              professionals worldwide
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See what our users have to say about their experience with AutoTask
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/70 transition-all duration-500 border border-slate-100">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <Quote className="w-16 h-16 text-indigo-600" fill="currentColor" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-slate-700 leading-relaxed mb-6 text-base">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    {/* Avatar */}
                    <div className={`flex-shrink-0 w-14 h-14 ${testimonial.avatar} rounded-full shadow-lg flex items-center justify-center text-white font-bold text-lg`}>
                      {testimonial.name.charAt(0)}
                    </div>

                    {/* Name & Role */}
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '10K+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
