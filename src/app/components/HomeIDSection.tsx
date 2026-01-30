import { motion } from 'motion/react';
import { FileText, TrendingUp, Shield, Clock } from 'lucide-react';

export const HomeIDSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#050814] to-[#0a0e27] overflow-hidden">
      {/* Background decoration with property image */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1759630815249-3c410d221a07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMHJlYWwlMjBlc3RhdGUlMjBob3VzZXN8ZW58MXx8fHwxNzY5NzMwNzA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Real estate properties"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050814]/95 via-[#0a0e27]/90 to-[#050814]/95"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1DA1F2] rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-[#1DA1F2]/10 text-[#1DA1F2] px-4 py-2 rounded-lg font-mono text-sm mb-6">
            NOHM VAULT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Home ID creates
            <br />
            <span className="text-[#1DA1F2]">lasting property value</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every service is permanently recorded and tied to your property—not you. This record transfers when you sell, adding verified value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Visual representation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-[#0d1238] to-[#0a0e27] p-8 rounded-2xl border border-[#1DA1F2]/30">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-12 h-12 bg-[#1DA1F2]/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#1DA1F2]" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Official HID</div>
                  <div className="text-white font-mono font-bold">APX-928-01</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">HVAC System Serviced</span>
                  <span className="text-gray-500 ml-auto">Jan 2026</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Plumbing Repair Completed</span>
                  <span className="text-gray-500 ml-auto">Dec 2025</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Electrical Inspection</span>
                  <span className="text-gray-500 ml-auto">Nov 2025</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Roof Maintenance</span>
                  <span className="text-gray-500 ml-auto">Oct 2025</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-xs text-gray-400 mb-1">Property Maintenance Score</div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#1DA1F2] to-green-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    ></motion.div>
                  </div>
                  <span className="text-[#1DA1F2] font-bold text-sm">92%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Benefits */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#1DA1F2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-[#1DA1F2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Complete Service History</h3>
                <p className="text-gray-400">
                  Every repair, maintenance visit, and inspection is automatically documented and stored in your Home ID vault.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#1DA1F2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-[#1DA1F2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Increases Property Value</h3>
                <p className="text-gray-400">
                  A well-maintained property with verified records is more valuable. Your Home ID proves it to buyers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#1DA1F2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#1DA1F2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Transfers with Property</h3>
                <p className="text-gray-400">
                  When you sell, the new owner inherits the complete service history—adding transparency and trust.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-[#1DA1F2]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#1DA1F2]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Never Forget Maintenance</h3>
                <p className="text-gray-400">
                  Track when systems were last serviced and plan future maintenance with confidence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
