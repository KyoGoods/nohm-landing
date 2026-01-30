import { motion } from 'motion/react';
import { Shield, Zap, Clock, Lock, DollarSign, Home } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Instant Resolution",
    description: "No endless searching or phone calls. State the problem once, and we dispatch the right pro immediately.",
  },
  {
    icon: Shield,
    title: "Hand-Selected Pros",
    description: "Every contractor is vetted and verified. They earn their spot through merit, not marketing budgets.",
  },
  {
    icon: Lock,
    title: "Complete Privacy",
    description: "Your data never leaves the app. No selling to third parties. No spam calls. Total anonymity until you choose.",
  },
  {
    icon: Clock,
    title: "Express Service",
    description: "Urgent need? Express guarantees same-day service when available for a flat $40 fee.",
  },
  {
    icon: Home,
    title: "Home ID Value",
    description: "Every service is tracked with your unique Home ID, creating a permanent record that transfers with your property.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Know exactly what you'll pay before work begins. No hidden fees. No surprises. Always clear.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative py-32 bg-[#050814]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why NOHM is different
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're not a marketplace. We're a utility designed to eliminate the friction of home maintenance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-b from-[#0d1238] to-[#0a0e27] p-8 rounded-2xl border border-white/5 hover:border-[#1DA1F2]/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-[#1DA1F2]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1DA1F2]/20 transition-colors">
                  <Icon className="w-7 h-7 text-[#1DA1F2]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
