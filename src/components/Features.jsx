import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Calendar, BarChart3, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Prioritization',
    description: 'Smart algorithms analyze your tasks and automatically prioritize based on urgency, importance, and deadlines.',
    gradient: 'from-blue-500 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Automation',
    description: 'Automate repetitive workflows and save hours every week. Set it once, and let AI handle the rest.',
    gradient: 'from-yellow-500 to-orange-600',
    bgGradient: 'from-yellow-50 to-orange-50',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption and SOC 2 compliant infrastructure ensure your data stays private and secure.',
    gradient: 'from-emerald-500 to-teal-600',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: 'Intelligent calendar integration that suggests optimal time blocks and prevents scheduling conflicts.',
    gradient: 'from-purple-500 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Gain insights into your productivity patterns with beautiful dashboards and actionable recommendations.',
    gradient: 'from-red-500 to-rose-600',
    bgGradient: 'from-red-50 to-rose-50',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Seamlessly collaborate with your team. Share tasks, track progress, and communicate in real-time.',
    gradient: 'from-cyan-500 to-blue-600',
    bgGradient: 'from-cyan-50 to-blue-50',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-5"
          >
            FEATURES
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-5 leading-tight">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Supercharge Productivity
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Powerful AI-driven features designed to help you and your team work smarter and accomplish more.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-2xl p-7 shadow-lg shadow-slate-200/50 border border-slate-200/80 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all duration-500 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${feature.gradient} rounded-xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <feature.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-900 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${feature.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-4">Want to see more features?</p>
          <button className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            View Full Feature List
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
