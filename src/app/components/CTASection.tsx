import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="relative py-32 bg-[#050814]">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Stop managing repairs.
            <br />
            <span className="text-[#1DA1F2]">Let them manage themselves.</span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join homeowners who've eliminated the stress of home maintenance.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="group bg-[#1DA1F2] text-white px-10 py-5 rounded-lg font-semibold hover:bg-[#1a8cd8] transition-all flex items-center gap-2 text-lg">
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <p className="mt-8 text-sm text-gray-500">
            Available in select markets. Rolling out nationwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
