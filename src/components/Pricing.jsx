import { motion } from 'framer-motion';
import { Check, Sparkles, Crown, Building2 } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Free',
    icon: Sparkles,
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals getting started',
    features: [
      'Up to 50 tasks per month',
      'Basic AI prioritization',
      'Mobile & desktop apps',
      'Email support',
      '1 workspace',
      'Basic analytics',
    ],
    cta: 'Get Started',
    popular: false,
    gradient: 'from-slate-500 to-slate-700',
    bgGradient: 'from-slate-50 to-slate-100',
  },
  {
    name: 'Pro',
    icon: Crown,
    price: '$12',
    period: 'per month',
    description: 'For professionals who demand more',
    features: [
      'Unlimited tasks',
      'Advanced AI automation',
      'Priority support 24/7',
      'Unlimited workspaces',
      'Advanced analytics & insights',
      'Custom integrations',
      'Team collaboration (up to 5)',
      'Calendar sync',
    ],
    cta: 'Start Free Trial',
    popular: true,
    gradient: 'from-blue-600 to-indigo-600',
    bgGradient: 'from-blue-50 to-indigo-50',
  },
  {
    name: 'Enterprise',
    icon: Building2,
    price: 'Custom',
    period: 'contact sales',
    description: 'For organizations at scale',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Custom AI model training',
      'SSO & advanced security',
      'Unlimited team members',
      'API access',
      'Custom contracts & SLAs',
      'White-label options',
    ],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-purple-600 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Pricing = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-slate-50 to-transparent"></div>

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
            className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-5"
          >
            PRICING
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-5 leading-tight">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Pricing for Everyone
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Start free, scale as you grow. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 lg:gap-6"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: plan.popular ? 0 : -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className={`px-5 py-2 bg-gradient-to-r ${plan.gradient} text-white text-xs font-extrabold rounded-full shadow-xl uppercase tracking-wide`}>
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              <div
                className={`relative h-full bg-white rounded-2xl p-8 border-2 transition-all duration-500 ${
                  plan.popular
                    ? 'border-indigo-600 shadow-2xl shadow-indigo-500/30 scale-105 lg:scale-110 ring-2 ring-indigo-100'
                    : 'border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:border-indigo-200'
                }`}
              >
                {/* Plan Icon */}
                <div className={`inline-flex p-3 bg-gradient-to-br ${plan.gradient} rounded-2xl shadow-lg mb-6`}>
                  <plan.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-extrabold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    {plan.price !== 'Custom' && (
                      <span className="text-slate-600 text-base font-medium">
                        /{plan.period}
                      </span>
                    )}
                  </div>
                  {plan.price === 'Custom' && (
                    <p className="text-slate-600 text-sm mt-1">{plan.period}</p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 mb-8 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.gradient} text-white shadow-lg hover:shadow-xl hover:scale-105`
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.cta}
                </button>

                {/* Features List */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                    What's included:
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center mt-0.5`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-slate-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Background Gradient on Hover */}
                {!plan.popular && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              No hidden fees
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              24/7 support
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
