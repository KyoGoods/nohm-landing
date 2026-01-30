import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "State the Problem",
    description: "No heat? Leak? Just tell us what's wrong. That's it.",
    image: "https://images.unsplash.com/photo-1656879373170-eee64139118c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRlbmFudCUyMGhvbWVvd25lcnxlbnwxfHx8fDE3Njk3MzA3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "02",
    title: "We Handle Everything",
    description: "NOHM determines urgency, matches the right trade, and schedules automatically.",
    image: "https://images.unsplash.com/photo-1659353588972-f3be41ae0834?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250cmFjdG9yJTIwaGFuZHNoYWtlJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2OTczMDcxMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "03",
    title: "Track in Real-Time",
    description: "Get status updates as your pro accepts, travels, arrives, and completes the work.",
    image: "https://images.unsplash.com/photo-1765518440022-10242cc86895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwbWFpbnRlbmFuY2UlMjB0b29sc3xlbnwxfHx8fDE3Njk3MzA3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    number: "04",
    title: "Permanent Record",
    description: "Every service is recorded in your Home ID vault, adding value to your property.",
    image: "https://images.unsplash.com/photo-1649663724528-3bd2ce98b6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBsYW5kbG9yZCUyMHByb3BlcnR5JTIwb3duZXJ8ZW58MXx8fHwxNzY5NzMwNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#050814] via-[#0a0e27] to-[#050814]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How it works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            The simplest way to maintain your home. No thinking required.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#1DA1F2]/30 to-transparent"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-block bg-[#1DA1F2]/10 text-[#1DA1F2] px-4 py-2 rounded-lg font-mono text-sm mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Center dot */}
                <div className="relative">
                  <div className="w-4 h-4 bg-[#1DA1F2] rounded-full relative z-10">
                    <div className="absolute inset-0 bg-[#1DA1F2] rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/50 to-transparent"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
