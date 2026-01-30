import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export const PricingSection = () => {
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
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No hidden fees. No surprises. Just honest pricing for homeowners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard Service */}
          <motion.div
            className="bg-gradient-to-b from-[#0d1238] to-[#0a0e27] p-8 md:p-10 rounded-2xl border border-white/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Standard Service</h3>
              <p className="text-gray-400">For planned maintenance and non-urgent repairs</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-white">Free</span>
              </div>
              <p className="text-gray-400">For homeowners to use NOHM</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Hand-selected, vetted contractors',
                'Complete privacy protection',
                'Transparent pricing before work begins',
                'Home ID service records',
                'Track job status in real-time',
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1DA1F2] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Express Service */}
          <motion.div
            className="relative bg-gradient-to-b from-[#1DA1F2]/20 to-[#0a0e27] p-8 md:p-10 rounded-2xl border border-[#1DA1F2]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="absolute top-0 right-8 bg-[#1DA1F2] text-white px-4 py-2 rounded-b-lg text-sm font-semibold">
              For Urgent Needs
            </div>

            <div className="mb-8 mt-4">
              <h3 className="text-2xl font-bold text-white mb-2">Express Service</h3>
              <p className="text-gray-400">Same-day service when available</p>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline mb-2">
                <span className="text-5xl font-bold text-white">$40</span>
                <span className="text-gray-400 ml-2">flat fee</span>
              </div>
              <p className="text-gray-400">Only when you need immediate help</p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                'Everything in Standard',
                'Same-day service guarantee',
                'Priority dispatch',
                'Immediate pro matching',
                'Fast-track scheduling',
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#1DA1F2] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 max-w-3xl mx-auto">
            You only pay the service call fee set by your chosen contractor. All additional costs for repairs and parts are confirmed with you before any work begins. No obligation to proceed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
