import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0e27] via-[#0d1238] to-[#050814]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1706809019043-c16ada0165e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzY5NzAyOTQyfDA&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Modern luxury home"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/90 via-[#0d1238]/95 to-[#050814]"></div>
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1DA1F2] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6">
            <span className="text-[#1DA1F2] uppercase tracking-wider font-medium">
              The New Standard
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            Home repairs that
            <br />
            <span className="text-[#1DA1F2]">resolve themselves</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
            NOHM eliminates the stress of home maintenance. No searching, no comparing, no coordinating.
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto italic">
            Just state the problem. We handle everything else.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <button className="group bg-[#1DA1F2] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a8cd8] transition-all flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/5 transition-all">
              Learn More
            </button>
          </motion.div>

          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1DA1F2] rounded-full"></div>
              Private
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1DA1F2] rounded-full"></div>
              No Ads
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#1DA1F2] rounded-full"></div>
              Neutral
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050814] to-transparent"></div>
    </section>
  );
};
