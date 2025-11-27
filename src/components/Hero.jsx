import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg shadow-blue-500/10 border border-blue-100 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-slate-700">AI-Powered Task Management</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6"
            >
              Work Smarter,
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Not Harder
              </span>
              with AI Tasks
            </motion.h1>

            {/* Sub-text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-md mx-auto lg:mx-0"
            >
              AutoTask uses AI to intelligently organize, prioritize, and automate your daily workflow—so you can focus on what really matters.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-xl shadow-lg hover:shadow-xl border border-slate-200 hover:border-slate-300 hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2">
                <Play className="w-5 h-5 text-blue-600" />
                Watch Demo
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-2 border-white shadow-md"
                    ></div>
                  ))}
                </div>
                <div className="text-slate-700">
                  <span className="font-bold text-slate-900">12,000+</span> users
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Free 14-day trial</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Main Dashboard Card */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="relative bg-white rounded-3xl shadow-2xl shadow-indigo-500/20 p-8 border border-slate-200/60"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="h-3 w-32 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                {/* Task Items */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <div className="w-5 h-5 rounded bg-blue-500"></div>
                    <div className="flex-1 h-3 bg-blue-300/40 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-5 h-5 rounded bg-slate-300"></div>
                    <div className="flex-1 h-3 bg-slate-300/40 rounded-full"></div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                    <div className="w-5 h-5 rounded bg-slate-300"></div>
                    <div className="flex-1 h-3 bg-slate-300/40 rounded-full w-2/3"></div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mt-6">
                  <div className="h-16 bg-gradient-to-br from-violet-100 to-purple-100 rounded-lg"></div>
                  <div className="h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg"></div>
                  <div className="h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg"></div>
                </div>
              </motion.div>

              {/* Floating AI Badge */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-emerald-400 to-green-500 text-white px-5 py-2.5 rounded-full shadow-xl font-bold text-sm flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                AI Powered
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-2xl p-4 border border-slate-200"
              >
                <div className="flex items-end gap-2">
                  <p className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">98%</p>
                  <p className="text-xs text-slate-600 pb-1">faster</p>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">task completion</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
