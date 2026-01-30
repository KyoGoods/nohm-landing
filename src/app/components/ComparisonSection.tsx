import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';

const comparisons = [
  {
    feature: 'Your data is private',
    nohm: true,
    others: false,
  },
  {
    feature: 'No lead selling',
    nohm: true,
    others: false,
  },
  {
    feature: 'Transparent pricing',
    nohm: true,
    others: false,
  },
  {
    feature: 'Hand-selected pros',
    nohm: true,
    others: false,
  },
  {
    feature: 'No spam calls',
    nohm: true,
    others: false,
  },
  {
    feature: 'Merit-based selection',
    nohm: true,
    others: false,
  },
  {
    feature: 'Property records included',
    nohm: true,
    others: false,
  },
  {
    feature: 'No marketplace chaos',
    nohm: true,
    others: false,
  },
];

export const ComparisonSection = () => {
  return (
    <section className="relative py-32 bg-[#050814]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            NOHM vs. Traditional Marketplaces
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're not just different—we're the opposite of what you're used to.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-b from-[#0d1238] to-[#0a0e27] rounded-2xl border border-white/5 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/5">
            <div className="col-span-1"></div>
            <div className="text-center">
              <div className="text-[#1DA1F2] font-bold text-lg">NOHM</div>
            </div>
            <div className="text-center">
              <div className="text-gray-400 font-bold text-lg">Others</div>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-3 gap-4 p-6 border-b border-white/5 last:border-b-0 hover:bg-white/[0.02] transition-colors"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="col-span-1 text-white font-medium flex items-center">
                {item.feature}
              </div>
              <div className="flex items-center justify-center">
                {item.nohm ? (
                  <div className="w-8 h-8 bg-[#1DA1F2]/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#1DA1F2]" />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
              <div className="flex items-center justify-center">
                {item.others ? (
                  <div className="w-8 h-8 bg-[#1DA1F2]/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#1DA1F2]" />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Traditional platforms optimize for leads and bidding. NOHM optimizes for outcomes and trust. That's the difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
