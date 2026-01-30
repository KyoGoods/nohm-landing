import { motion } from 'motion/react';

export const TrustSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#050814] via-[#0d1238] to-[#050814] overflow-hidden">
      {/* Background apartment building image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1515263487990-61b07816b324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njk2ODI0MTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Modern apartment building"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/95 via-[#0d1238]/98 to-[#050814]/95"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-[#1DA1F2]/10 text-[#1DA1F2] px-4 py-2 rounded-lg font-semibold mb-8">
            A Message from Our Founder
          </div>

          <div className="bg-gradient-to-b from-[#0a0e27] to-[#050814] p-8 md:p-12 rounded-2xl border border-white/5">
            <blockquote className="text-left space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                "When you search 'near me' on other apps, you aren't seeing the best pros—you're seeing the highest bidders. They sell your data, blast your phone with spam, and leave you guessing about the process until it's too late."
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                "I built NOHM to give you the clarity they won't. Here, no one can buy the top spot, your data never leaves this app, and you get 100% transparency before you ever click a button."
              </p>
              <p className="text-lg md:text-xl text-white font-semibold leading-relaxed">
                "Your home is your sanctuary, not a marketplace. Welcome to the new standard."
              </p>
              <div className="flex flex-col gap-2 pt-6 border-t border-white/10">
                <p className="text-white font-semibold">Brison McPhail</p>
                <p className="text-gray-400">Founder, NOHM</p>
              </div>
            </blockquote>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="p-6">
            <div className="text-4xl font-bold text-[#1DA1F2] mb-2">100%</div>
            <div className="text-gray-400">Private & Secure</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-[#1DA1F2] mb-2">0</div>
            <div className="text-gray-400">Ads or Spam</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-[#1DA1F2] mb-2">Hand-Picked</div>
            <div className="text-gray-400">Verified Pros Only</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
